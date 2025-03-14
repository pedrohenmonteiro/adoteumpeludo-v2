package com.projunifil.adoteumpeludo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "springSecurityAuditorAware")
public class AdoteumpeludoApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdoteumpeludoApplication.class, args);
	}

}
