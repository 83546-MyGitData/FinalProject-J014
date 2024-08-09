package com.bookly.services;

import java.time.LocalDate;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookly.custom_exceptions.ApiException;
import com.bookly.dao.UserDao;
import com.bookly.dto.RegisterDTO;
import com.bookly.entities.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public RegisterDTO addUser(RegisterDTO dto) {
		if(dto.getUserPassword().equals(dto.getConfirmUserPassword())) {
			User user = modelMapper.map(dto, User.class);
			user.setCreatedAt(LocalDate.now());
			User persistentUser = userDao.save(user);
			System.out.println("User Id for User " + user.getEmail() + "is "+ persistentUser.getUserId() );
			return modelMapper.map(persistentUser, RegisterDTO.class);
		}
		throw new ApiException("Password Doesn't Match!");
	}

}
