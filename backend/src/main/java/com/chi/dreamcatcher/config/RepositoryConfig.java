package com.chi.dreamcatcher.config;

import com.chi.dreamcatcher.entity.Choice;
import com.chi.dreamcatcher.entity.Question;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Question.class)
                .exposeIdsFor(Choice.class);
    }
}