package com.bookly.services;

import java.util.ArrayList;
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
import com.bookly.entities.Category;


public class BookServiceImpl implements BookService {

	@Autowired
	private BookDao bookDao;
	
	@Autowired 
	private CategoryDao categoryDao;
	
	@Autowired 
	private ModelMapper mapper;
	
	@Override
	public ApiResponse deleteBookById(Long BookId) {
		Book book = bookDao.findById(BookId).orElseThrow(()-> new ResourceNotFoundException("Invalid Book Id"));
		bookDao.delete(book);
		return new ApiResponse("Book Deleted With ID - "+ book.getBookId());
	}

	@Override
	public BookDTO addNewBook(Long CategoryId,BookDTO dto) {
		Category category = categoryDao.findById(CategoryId).orElseThrow(()-> new ResourceNotFoundException("Invalid Category Id"));
		Book book = mapper.map(dto, Book.class);
		book.setCategory(category);
		Book persistentBook = bookDao.save(book);
		return mapper.map(persistentBook, BookDTO.class);
	}

	@Override
	public BookDTO getBookById(Long bookId) {
		Book book = bookDao.findById(bookId).orElseThrow(()-> new ResourceNotFoundException("Invalid Book Id"));
		return mapper.map(book, BookDTO.class);
	}

	@Override
	public BookDTO updateBook(BookDTO dto) {
		Book book = mapper.map(dto, Book.class);
		Book updatedBook = bookDao.save(book);
		return mapper.map(updatedBook, BookDTO.class);
	}

	@Override
	public List<BookDTO> getAllBooksByCategory(Long CategoryId) {
		List<Book> bookList = bookDao.findByCategory(CategoryId);
		List<BookDTO> bookDtoList = new ArrayList<>();
		for (Book book : bookList) {
			BookDTO dto = mapper.map(book, BookDTO.class);
			bookDtoList.add(dto);
		}
		return bookDtoList;
	}
	
	
}
