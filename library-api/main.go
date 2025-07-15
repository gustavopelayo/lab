package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

type Book struct {
	ID        int       `json:"id"`
	Title     string    `json:"title"`
	Author    string    `json:"author"`
	Price     float64   `json:"price"`
	CreatedAt time.Time `json:"created_at"`
}

var db *sql.DB

func main() {
	// Connect to MySQL
	var err error
	db, err = sql.Open("mysql", "root:@tcp(localhost:3306)/library_api")
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}
	defer db.Close()

	if err = db.Ping(); err != nil {
		log.Fatal("Failed to ping database:", err)
	}

	fmt.Println("Connected to MySQL database!")

	http.HandleFunc("/hello", helloHandler)
	http.HandleFunc("/books", booksHandler)
	http.HandleFunc("/books/", bookHandler)

	fmt.Println("Server starting on http://localhost:8080")
	fmt.Println("Try: http://localhost:8080/books")
	http.ListenAndServe(":8080", nil)
}

func booksHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// Query all books from database
	rows, err := db.Query("SELECT id, title, author, price, created_at FROM books")
	if err != nil {
		http.Error(w, "Database error", http.StatusInternalServerError)
		return
	}
	defer rows.Close()
	var books []Book

	// Loop through each row
	for rows.Next() {
		var book Book
		err := rows.Scan(&book.ID, &book.Title, &book.Author, &book.Price, &book.CreatedAt)
		if err != nil {
			http.Error(w, "Scan error", http.StatusInternalServerError)
			return
		}
		books = append(books, book)
	}

	json.NewEncoder(w).Encode(books)
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	response := map[string]string{"message": "Hello! Connected to MySQL!", "status": "success"}
	json.NewEncoder(w).Encode(response)
}
func bookHandler(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")
	id := r.URL.Path[len("/books/"):]
	var book Book
	err := db.QueryRow("SELECT id, title, author, price, created_at FROM books WHERE id = ?", id).Scan(&book.ID, &book.Title, &book.Author, &book.Price, &book.CreatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "Book not found", http.StatusNotFound)
		} else {
			http.Error(w, "Database error", http.StatusInternalServerError)
		}
		return
	}
	json.NewEncoder(w).Encode(book)

}
