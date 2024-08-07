package com.bookly.dto;

import java.time.LocalDate;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;



@Getter
@Setter
@ToString
public class RegisterDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long userId;
	@NotBlank
	private String firstName;
	@NotBlank
	private String lastName;
	@JsonProperty(access = Access.WRITE_ONLY)	
	private String userPassword;
	@JsonProperty(access = Access.WRITE_ONLY)
	private String ConfirmUserPassword;
	@Email
	private String email;
	@NotBlank
	private String contactNo;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate birthDate;
}
