package skcet.pranav.trackbikes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import skcet.pranav.trackbikes.entity.tbikes_e;
import skcet.pranav.trackbikes.service.service;

@RestController
@CrossOrigin("http://localhost:3002")
public class controller {
	@Autowired
	private service s;
	
	@GetMapping("/get")
	public List<tbikes_e> getdetails()
	{
	   return s.getdetails();  
	}
	
	@DeleteMapping("/delete{id}")
	public String delete(@PathVariable int id) {
		s.delete(id);
		return "Deleted";
	}
	@PostMapping("/post")
	public String add_details(@RequestBody tbikes_e e) {
		s.add_details(e);
		return "Values Added";
		
	}
	@PutMapping("/update/{}")
	public String update_details(@RequestBody tbikes_e e) {
		s.update_details(e);
		return "Updated";
	}
  
}
