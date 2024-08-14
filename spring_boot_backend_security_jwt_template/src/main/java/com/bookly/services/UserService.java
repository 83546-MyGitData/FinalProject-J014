package com.bookly.services;

import com.bookly.dto.ApiResponse;
import com.bookly.dto.RegisterDTO;
import com.bookly.dto.SigninRequest;

public interface UserService {
	RegisterDTO addUser(RegisterDTO dto);

	ApiResponse authenticateUser(SigninRequest dto);
}
