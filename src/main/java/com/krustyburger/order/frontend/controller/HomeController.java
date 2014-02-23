package com.krustyburger.order.frontend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	@Value("${order.backend.url}")
	private String orderBackendURL;
	
	@RequestMapping("/")
	public ModelAndView home() {
		ModelAndView modelAndView = new ModelAndView("orderList");
		modelAndView.addObject("orderBackendURL", this.orderBackendURL);
		return modelAndView;
	}
	
}