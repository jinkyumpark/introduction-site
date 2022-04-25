package com.jinkyumpark.introback;

import org.mybatis.logging.Logger;
import org.mybatis.logging.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

import java.util.concurrent.TimeUnit;


@SpringBootApplication
public class IntroBackApplication {

    private static Logger logger = LoggerFactory.getLogger(SpringApplication.class.getName());

    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Register resource handler for images
        registry.addResourceHandler("/images/**").addResourceLocations("/images/")
                .setCacheControl(CacheControl.maxAge(2, TimeUnit.HOURS).cachePublic());
    }


    public static void main(String[] args) {
        SpringApplication.run(IntroBackApplication.class, args);
    }

}
