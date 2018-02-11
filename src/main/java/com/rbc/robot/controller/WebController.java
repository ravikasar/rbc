package com.rbc.robot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class WebController {

	@RequestMapping("/")
	ModelAndView home(ModelAndView modelAndView) {
		System.out.println("In WebController");
		modelAndView.setViewName("home");
		System.out.println("loading home.jsp");

		return modelAndView;
	}
}