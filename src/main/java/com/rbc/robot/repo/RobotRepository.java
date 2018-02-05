package com.rbc.robot.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.rbc.robot.entity.Robot;

@RepositoryRestResource
public interface RobotRepository extends JpaRepository<Robot, Long> {
}