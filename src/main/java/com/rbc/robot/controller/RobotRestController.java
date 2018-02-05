package com.rbc.robot.controller;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rbc.robot.entity.Robot;
import com.rbc.robot.repo.RobotRepository;

@RestController
@RequestMapping(value = "/robots")
@CrossOrigin(origins = "http://localhost:4200")
public class RobotRestController {
	private RobotRepository repository;

	public RobotRestController(RobotRepository repository) {
		this.repository = repository;
	}

	@RequestMapping(method = RequestMethod.GET)
	public Collection<Robot> listRobots() {
		return repository.findAll().stream().collect(Collectors.toList());
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Robot getRobot(@PathVariable("id") Long id) {
		Robot robot = repository.getOne(id);
		System.out.println(robot);
		return robot;
	}

	@RequestMapping(method = RequestMethod.POST)
	public Robot saveRobot(@RequestBody Robot robot) {
		repository.saveAndFlush(robot);
		return robot;

	}

	@RequestMapping(method = RequestMethod.PUT)
	public Robot updateRobot(@RequestBody Robot updatedRobot) {
		repository.saveAndFlush(updatedRobot);
		return updatedRobot;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public boolean deleteUser(@PathVariable Long id) {
		repository.delete(id);
		return true;
	}
}
