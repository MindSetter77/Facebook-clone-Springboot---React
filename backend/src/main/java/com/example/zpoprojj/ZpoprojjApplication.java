package com.example.zpoprojj;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.zpoproj")
public class ZpoprojjApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZpoprojjApplication.class, args);
	}

}
