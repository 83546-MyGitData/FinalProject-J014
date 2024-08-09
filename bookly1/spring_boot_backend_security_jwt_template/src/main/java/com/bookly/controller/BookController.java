package com.bookly.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookly.dto.BookDTO;
import com.bookly.services.BookService;


@RestController
@Validated
@RequestMapping("/books")
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	
	@PostMapping(value = "/{categoryId}")
	public ResponseEntity<?> addNewBook(@RequestBody @Valid BookDTO dto, @PathVariable Long categoryId){
		return ResponseEntity.status(HttpStatus.CREATED).body(bookService.addNewBook(categoryId, dto));
	}
	
	@GetMapping(value = "/{categoryId}")
	public ResponseEntity<?> getAllBooks(@PathVariable Long categoryId){
		return ResponseEntity.ok(bookService.getAllBooksByCategory(categoryId));
	}
	
	@GetMapping
	public ResponseEntity<?> getAllBooks(){
		return ResponseEntity.ok(bookService.getAllBooks());
	}
	
	@DeleteMapping(value = "/{bookId}")
	public ResponseEntity<?> deleteBookById(@PathVariable Long bookId){
		return ResponseEntity.ok(bookService.deleteBookById(bookId));
	}
	
	@PutMapping(value = "/{bookId}")
	public ResponseEntity<?> updateBookById(@PathVariable Long bookId, @RequestBody BookDTO dto){
		BookDTO book = bookService.getBookById(bookId);
		book.setTitle(dto.getTitle());
		book.setAuthor(dto.getAuthor());
		book.setDescription(dto.getDescription());
		book.setPrice(dto.getPrice());
		book.setPublication(dto.getPublication());
		return ResponseEntity.ok(bookService.updateBook(book));
	}
}
