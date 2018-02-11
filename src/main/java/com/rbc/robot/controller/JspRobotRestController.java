package com.rbc.robot.controller;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import com.rbc.robot.controller.response.Response;
import org.springframework.web.bind.annotation.*;

import com.rbc.robot.entity.Robot;
import com.rbc.robot.repo.RobotRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JspRobotRestController {
	private RobotRepository repository;

	public JspRobotRestController(RobotRepository repository) {
		this.repository = repository;
	}

	@RequestMapping(value = "/findall", method = RequestMethod.GET)
	public Response findAll() {
		return new Response("Done", repository.findAll());
	}

	@RequestMapping(value = "/robot/{id}", method = RequestMethod.GET)
	public Response getRobot(@PathVariable("id") Long id) {
		Robot robot = repository.getOne(id);
		System.out.println(robot);
		return new Response("Done", robot);
	}

	@RequestMapping(value = "/name", method = RequestMethod.GET)
	public Response getRobotByName(@RequestParam("name") String name) {
		List<Robot> robots = repository.getByName(name);
		System.out.println(robots);
		return new Response("Done", robots);
	}
	
	@RequestMapping(value = "/postrobot", method = RequestMethod.POST)
	public Response saveRobot(@RequestBody Robot robot) {
		repository.saveAndFlush(robot);
		return new Response("Done", robot);

	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public Robot updateRobot(@RequestBody Robot updatedRobot) {
		repository.saveAndFlush(updatedRobot);
		return updatedRobot;
	}

	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public boolean deleteUser(@PathVariable Long id) {
		repository.delete(id);
		return true;
	}
}
