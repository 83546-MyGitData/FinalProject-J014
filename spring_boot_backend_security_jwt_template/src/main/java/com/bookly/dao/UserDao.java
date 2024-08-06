package com.bookly.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookly.entities.User;

public interface UserDao extends JpaRepository<User, Long>{
	
}
