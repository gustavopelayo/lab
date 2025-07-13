package main

import (
	"fmt"
	"log"
	"net/http"

	"library-api/handlers"
	"library-api/utils"
)

// rootHandler handles the root endpoint
func rootHandler(w http.ResponseWriter, r *http.Request) {
	response := map[string]string{
		"message":   "Welcome to the Library API",
		"version":   "1.0",
		"endpoints": "/books (GET, POST), /books/{id} (GET)",
	}
	utils.WriteSuccess(w, response)
}

func main() {
	// Register routes
	http.HandleFunc("/", rootHandler)
	http.HandleFunc("/books", handlers.BooksHandler)
	http.HandleFunc("/books/", handlers.BooksHandler) // Handle /books/{id}

	fmt.Println("Library API Server starting on :8080...")
	fmt.Println("\nAvailable endpoints:")
	fmt.Println("  GET  /           - API info")
	fmt.Println("  GET  /books      - List all books")
	fmt.Println("  GET  /books/{id} - Get book by ID")
	fmt.Println("  POST /books      - Create new book")

	fmt.Println("\nTry these curl commands:")
	fmt.Println("  curl http://localhost:8080/")
	fmt.Println("  curl http://localhost:8080/books")
	fmt.Println("  curl http://localhost:8080/books/1")
	fmt.Println(`  curl -X POST http://localhost:8080/books -H "Content-Type: application/json" -d '{"title":"New Book","author":"Test Author","pages":200,"price":25.99}'`)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
