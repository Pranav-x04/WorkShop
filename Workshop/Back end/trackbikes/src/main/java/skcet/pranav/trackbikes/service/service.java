package skcet.pranav.trackbikes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import skcet.pranav.trackbikes.entity.tbikes_e;
import skcet.pranav.trackbikes.repo.tbikes;

@Service
public class service {
	@Autowired
	private tbikes t;
	
	public List<tbikes_e> getdetails()
	{
		return t.findAll();
	}
	
	public void delete(int id) {
		t.deleteById(id);
	}
	public void add_details(tbikes_e e) {
		t.save(e);
	}
	public void update_details(tbikes_e e) {
		t.save(e);
	}
}
