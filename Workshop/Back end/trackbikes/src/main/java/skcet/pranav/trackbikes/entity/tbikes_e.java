package skcet.pranav.trackbikes.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Track_Bikes")
public class tbikes_e {
  @Id
  private int id;
  private String bike_name; 
  private String engine_CC;
  private int top_speed;
  private String power;
  
 public tbikes_e() {}
public tbikes_e(int id, String bike_Name, String engine_CC, int top_Speed, String power) {
	super();
	this.id = id;
	this.bike_name = bike_Name;
	this.engine_CC = engine_CC;
	this.top_speed = top_Speed;
	this.power = power;
}
public int getId() {
	return id;
}
public String getBike_name() {
	return bike_name;
}
public void setBike_name(String bike_name) {
	this.bike_name = bike_name;
}
public String getEngine_CC() {
	return engine_CC;
}
public void setEngine_CC(String engine_CC) {
	this.engine_CC = engine_CC;
}
public int getTop_speed() {
	return top_speed;
}
public void setTop_speed(int top_speed) {
	this.top_speed = top_speed;
}
public String getPower() {
	return power;
}
public void setPower(String power) {
	this.power = power;
}
public void setId(int id) {
	this.id = id;
}
 
}
  
  