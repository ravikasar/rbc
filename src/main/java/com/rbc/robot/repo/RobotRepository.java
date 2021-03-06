package com.rbc.robot.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.rbc.robot.entity.Robot;

@RepositoryRestResource
public interface RobotRepository extends JpaRepository<Robot, Long> {
	List<Robot> getByName(String name);
}