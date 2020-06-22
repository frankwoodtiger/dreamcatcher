package com.chi.dreamcatcher.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/api/**").permitAll()
            // Need to permit this to skip basic authentication. Then, the redirect from / to /api can be handled
            // by the custom WebConfig class
            .antMatchers("/").permitAll();
        // calling super as we still want the default auto configuration for basic authentication of management console
        // like H2-console and actuator endpoints.
        super.configure(http);
    }
}