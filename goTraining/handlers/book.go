package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"
	"strings"

	"library-api/models"
	"library-api/utils"
)

// Global library instance (in production, this would be a database)
var Library = &models.Library{
	Books: []models.Book{
		{ID: 1, Title: "Go Programming", Author: "John Doe", Pages: 300, Price: 29.99, Available: true},
		{ID: 2, Title: "Web Development", Author: "Jane Smith", Pages: 450, Price: 39.99, Available: true},
		{ID: 3, Title: "Algorithms", Author: "Bob Johnson", Pages: 600, Price: 49.99, Available: false},
	},
}

// GetBooks handles GET /books - returns all books
func GetBooks(w http.ResponseWriter, r *http.Request) {
	utils.WriteSuccess(w, Library.Books)
}

// GetBook handles GET /books/{id} - returns a specific book
func GetBook(w http.ResponseWriter, r *http.Request) {
	// Extract ID from URL path
	path := strings.TrimPrefix(r.URL.Path, "/books/")
	id, err := strconv.Atoi(path)
	if err != nil {
		utils.WriteError(w, http.StatusBadRequest, "Invalid book ID")
		return
	}

	book, err := Library.FindBookByID(id)
	if err != nil {
		utils.WriteError(w, http.StatusNotFound, err.Error())
		return
	}

	utils.WriteSuccess(w, book)
}

// CreateBook handles POST /books - creates a new book
func CreateBook(w http.ResponseWriter, r *http.Request) {
	var book models.Book

	// Decode JSON from request body
	if err := json.NewDecoder(r.Body).Decode(&book); err != nil {
		utils.WriteError(w, http.StatusBadRequest, "Invalid JSON")
		return
	}

	// Simple validation
	if book.Title == "" || book.Author == "" {
		utils.WriteError(w, http.StatusBadRequest, "Title and Author are required")
		return
	}

	// Add to library (Library.AddBook handles ID assignment)
	Library.AddBook(book)

	// Return the created book
	utils.WriteCreated(w, book)
}

// BooksHandler routes requests based on method and path
func BooksHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		if r.URL.Path == "/books" {
			GetBooks(w, r)
		} else if strings.HasPrefix(r.URL.Path, "/books/") {
			GetBook(w, r)
		} else {
			utils.WriteError(w, http.StatusNotFound, "Route not found")
		}
	case http.MethodPost:
		if r.URL.Path == "/books" {
			CreateBook(w, r)
		} else {
			utils.WriteError(w, http.StatusNotFound, "Route not found")
		}
	default:
		utils.WriteError(w, http.StatusMethodNotAllowed, "Method not allowed")
	}
}
