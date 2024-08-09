package com.bookly.services;

import java.util.List;

import com.bookly.dto.ApiResponse;
import com.bookly.dto.BookDTO;

public interface BookService {
	List<BookDTO> getAllBooksByCategory(Long CategoryId);
	
	ApiResponse deleteBookById(Long BookId);
	
	BookDTO addNewBook(Long CategoryId, BookDTO dto);
	
	BookDTO getBookById(Long bookId);
	
	BookDTO updateBook(BookDTO dto);

	List<BookDTO> getAllBooks();
}
