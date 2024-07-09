package com.sportalk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;


@SpringBootApplication
public class SportalkApplication {

    public static void main(String[] args) {
        SpringApplication.run(SportalkApplication.class, args);
    }

    @PostConstruct
    public void init() {
        System.out.println("Application started...");
    }

    @PreDestroy
    public void destroy() {
        System.out.println("Application is shutting down...");
    }
}
