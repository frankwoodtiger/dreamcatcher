package com.chi.dreamcatcher.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Configuration
@EnableJpaAuditing // for @CreatedDate and @LastModifiedDate
public class DatabaseConfig {
}
