package com.rbc.robot;

import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.rbc.robot.entity.Robot;
import com.rbc.robot.repo.RobotRepository;

@SpringBootApplication
public class RbcSpringBoot2JpaWithHibernateAndH2Application {

	public static void main(String[] args) {
		SpringApplication.run(RbcSpringBoot2JpaWithHibernateAndH2Application.class, args);
	}
	

    @Bean
    ApplicationRunner init(RobotRepository repository) {
        return args -> {
            Stream.of("R2D2", "BB8").forEach(name -> {
                Robot robot = new Robot();
                robot.setName(name);
                repository.save(robot);
            });
            repository.findAll().forEach(System.out::println);
        };
    }	
}
