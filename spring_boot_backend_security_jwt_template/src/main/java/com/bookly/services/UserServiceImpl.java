package com.bookly.services;

import java.time.LocalDate;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bookly.custom_exceptions.ApiException;
import com.bookly.dao.UserDao;
import com.bookly.dto.ApiResponse;
import com.bookly.dto.RegisterDTO;
import com.bookly.dto.SigninRequest;
import com.bookly.entities.User;


@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
    private PasswordEncoder passwordEncoder;

	
	@Override
	public RegisterDTO addUser(RegisterDTO dto) {
		if(dto.getUserPassword().equals(dto.getConfirmUserPassword())) {
			User user = modelMapper.map(dto, User.class);
			user.setUserPassword((passwordEncoder.encode(user.getUserPassword()))); // Encode the password before saving
			user.setCreatedAt(LocalDate.now());
			User persistentUser = userDao.save(user);
			System.out.println("User Id for User " + user.getEmail() + "is "+ persistentUser.getUserId() );
			return modelMapper.map(persistentUser, RegisterDTO.class);
		}
		throw new ApiException("Password Doesn't Match!");
	}
	
	@Override
    public ApiResponse authenticateUser(SigninRequest dto) {
        Optional<User> userOptional = userDao.findByEmail(dto.getEmail());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (passwordEncoder.matches(dto.getPassword(), user.getUserPassword())) {
                return new ApiResponse("User Logged In with Id: " + user.getUserId());
            } else {
                return new ApiResponse("Authentication failed: Invalid Email or Password.");
            }
        } else {
            return new ApiResponse("Authentication failed: User not found.");
        }
    }

}
