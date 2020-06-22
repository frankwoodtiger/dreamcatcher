package com.chi.dreamcatcher.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * This class is used to redirect certain URL without the use of controller.
 * See usage in detail:
 * https://spring.io/guides/gs/securing-web/
 * https://www.baeldung.com/web-mvc-configurer-adapter-deprecated
 *
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addRedirectViewController("/", "/api");
    }
}
