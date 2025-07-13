package models

import "fmt"

// Library represents the library with books and members
type Library struct {
	Books   []Book   `json:"books"`
	Members []Member `json:"members"`
}

// AddBook adds a new book to the library
func (l *Library) AddBook(book Book) {
	// Auto-assign ID
	book.ID = len(l.Books) + 1
	book.Available = true
	l.Books = append(l.Books, book)
}

// FindBookByID finds a book by its ID
func (l *Library) FindBookByID(id int) (*Book, error) {
	for i := range l.Books {
		if l.Books[i].ID == id {
			return &l.Books[i], nil
		}
	}
	return nil, fmt.Errorf("book with ID %d not found", id)
}

// GetAvailableBooks returns all available books
func (l *Library) GetAvailableBooks() []Book {
	var available []Book
	for _, book := range l.Books {
		if book.Available {
			available = append(available, book)
		}
	}
	return available
}

// GetBooksByPriceRange returns books within a price range
func (l *Library) GetBooksByPriceRange(min, max float64) []Book {
	var books []Book
	for _, book := range l.Books {
		if book.Price >= min && book.Price <= max {
			books = append(books, book)
		}
	}
	return books
}
