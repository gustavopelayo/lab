package models

import "fmt"

// Book represents a book in the library
type Book struct {
	ID        int     `json:"id"`
	Title     string  `json:"title"`
	Author    string  `json:"author"`
	Pages     int     `json:"pages"`
	Price     float64 `json:"price"`
	Available bool    `json:"available"`
}

// GetSummary returns a formatted summary of the book
func (b Book) GetSummary() string {
	status := "Available"
	if !b.Available {
		status = "Borrowed"
	}
	return fmt.Sprintf("%s by %s - %d pages ($%.2f) [%s]",
		b.Title, b.Author, b.Pages, b.Price, status)
}

// Borrow marks the book as borrowed
func (b *Book) Borrow() error {
	if !b.Available {
		return fmt.Errorf("book is already borrowed")
	}
	b.Available = false
	return nil
}

// Return marks the book as available
func (b *Book) Return() {
	b.Available = true
}
