package com.bookly.services;

import com.bookly.dto.RegisterDTO;

public interface UserService {
	RegisterDTO addUser(RegisterDTO dto);
}
