package com.univaq.disim.bioinfo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"com.univaq.disim.bioinfo"})
public class BioinfoApplication {

	public static void main(String[] args) {
		SpringApplication.run(BioinfoApplication.class, args);
	}

}
