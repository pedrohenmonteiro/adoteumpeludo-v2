package com.projunifil.adoteumpeludo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer.FrameOptionsConfig;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.server.resource.web.BearerTokenAuthenticationEntryPoint;
import org.springframework.security.oauth2.server.resource.web.access.BearerTokenAccessDeniedHandler;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.header.writers.ReferrerPolicyHeaderWriter;
import org.springframework.security.web.servlet.util.matcher.MvcRequestMatcher;
import org.springframework.web.servlet.handler.HandlerMappingIntrospector;

import com.projunifil.adoteumpeludo.security.AuthorityEnum;

@Configuration
@EnableMethodSecurity(securedEnabled = true)
public class SecurityConfig {

     String contentSecurityPolicy =
                "default-src 'self'; frame-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:";

                @Bean
                public PasswordEncoder passwordEncoder() {
                    return new BCryptPasswordEncoder();
                }
            
                @Bean
                public SecurityFilterChain filterChain(HttpSecurity http, MvcRequestMatcher.Builder mvc) throws Exception {
                    http
                        .cors(Customizer.withDefaults())
                        .csrf(csrf -> csrf.disable())
                        .headers(headers ->
                            headers
                                .contentSecurityPolicy(csp -> csp.policyDirectives(contentSecurityPolicy))
                                .frameOptions(FrameOptionsConfig::sameOrigin)
                                .referrerPolicy(referrer -> referrer.policy(ReferrerPolicyHeaderWriter.ReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN))
                                .permissionsPolicyHeader(permissions ->
                                    permissions.policy(
                                        "camera=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), sync-xhr=()"
                                    )
                                )
                        )
                        .authorizeHttpRequests(authz ->
                            // prettier-ignore
                            authz
                                .requestMatchers(mvc.pattern("/index.html"), mvc.pattern("/*.js"), mvc.pattern("/*.txt"), mvc.pattern("/*.json"), mvc.pattern("/*.map"), mvc.pattern("/*.css")).permitAll()
                                .requestMatchers(mvc.pattern("/*.ico"), mvc.pattern("/*.png"), mvc.pattern("/*.svg"), mvc.pattern("/*.webapp")).permitAll()
                                .requestMatchers(mvc.pattern("/app/**")).permitAll()
                                .requestMatchers(mvc.pattern("/i18n/**")).permitAll()
                                .requestMatchers(mvc.pattern("/content/**")).permitAll()
                                .requestMatchers(mvc.pattern("/swagger-ui/**")).permitAll()
                                .requestMatchers(mvc.pattern(HttpMethod.POST, "/api/authenticate")).permitAll()
                                .requestMatchers(mvc.pattern(HttpMethod.GET, "/api/authenticate")).permitAll()
                                .requestMatchers(mvc.pattern(HttpMethod.GET, "/api/ads")).permitAll()
                                .requestMatchers(mvc.pattern("/api/activate")).permitAll()
                                .requestMatchers(mvc.pattern("/api/account/reset-password/init")).permitAll()
                                .requestMatchers(mvc.pattern("/api/account/reset-password/finish")).permitAll()
                                .requestMatchers(mvc.pattern("/api/admin/**")).hasAuthority(AuthorityEnum.ROLE_ADMIN.getRole())
                                .requestMatchers(mvc.pattern("/api/**")).authenticated()
                                .requestMatchers(mvc.pattern("/v3/api-docs/**")).hasAuthority(AuthorityEnum.ROLE_ADMIN.getRole())
                                .requestMatchers(mvc.pattern("/management/health")).permitAll()
                                .requestMatchers(mvc.pattern("/management/health/**")).permitAll()
                                .requestMatchers(mvc.pattern("/management/info")).permitAll()
                                .requestMatchers(mvc.pattern("/management/prometheus")).permitAll()
                                .requestMatchers(mvc.pattern("/management/**")).hasAuthority(AuthorityEnum.ROLE_ADMIN.getRole())
                        )
                        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                        .exceptionHandling(exceptions ->
                            exceptions
                                .authenticationEntryPoint(new BearerTokenAuthenticationEntryPoint())
                                .accessDeniedHandler(new BearerTokenAccessDeniedHandler())
                        )
                        .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()));
                    return http.build();
                }
            
                @Bean
                MvcRequestMatcher.Builder mvc(HandlerMappingIntrospector introspector) {
                    return new MvcRequestMatcher.Builder(introspector);
                }
            }