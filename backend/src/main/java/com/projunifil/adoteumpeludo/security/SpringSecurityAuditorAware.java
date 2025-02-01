package com.projunifil.adoteumpeludo.security;


import java.util.Optional;

import org.springframework.data.domain.AuditorAware;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;



@Component
public class SpringSecurityAuditorAware implements AuditorAware<String> {

    public final String DEFAULT_AUDITOR = "system";

    @Override
    @NonNull
    public Optional<String> getCurrentAuditor() {
        return Optional.of(SecurityUtils.getCurrentUserLogin().orElse(DEFAULT_AUDITOR));
    }
}