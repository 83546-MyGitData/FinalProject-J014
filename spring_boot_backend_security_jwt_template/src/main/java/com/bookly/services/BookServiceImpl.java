package com.bookly.services;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.bookly.custom_exceptions.ResourceNotFoundException;
import com.bookly.dao.BookDao;
import com.bookly.dao.CategoryDao;
import com.bookly.dto.ApiResponse;
import com.bookly.dto.BookDTO;
import com.bookly.entities.Book;


public class BookServiceImpl implements BookService {

	@Autowired
	private BookDao bookDao;
	
	@Autowired 
	private CategoryDao categoryDao;
	
	@Autowired 
	private ModelMapper mapper;
	
	@Override
	public ApiResponse deleteBookById(Long BookId) {
		Book book = bookDao.findById(BookId).orElseThrow(()-> new ResourceNotFoundException("Invalid Book id"));
		return new ApiResponse("Book Deleted With ID - "+ book.getBookId());
	}

	@Override
	public BookDTO addNewBook(Long CategoryId,BookDTO dto) {
		
		return null;
	}

	@Override
	public BookDTO getBookById(Long bookId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public BookDTO updateBookById(Long id, BookDTO dto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<BookDTO> getAllBooksByCategory(Long CategoryId) {
		List<Book> bookList = bookDao.findByCategory(CategoryId);cx 
		return null;
	}
	
	
}
