package com.bookly.dto;



import javax.validation.constraints.NotBlank;

import com.bookly.entities.Category;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long bookId;
	@NotBlank
	private String title;
	@NotBlank
	private String author;
	@NotBlank
	private String description;
	@NotBlank
	private double price;
	@NotBlank
	private String publication;
}
