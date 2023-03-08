package skcet.pranav.trackbikes.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;



import skcet.pranav.trackbikes.entity.tbikes_e;

public interface tbikes extends JpaRepository<tbikes_e,Integer> {
}



	
	

