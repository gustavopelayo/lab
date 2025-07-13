package models

// Member represents a library member
type Member struct {
	ID            int    `json:"id"`
	Name          string `json:"name"`
	Email         string `json:"email"`
	JoinDate      string `json:"join_date"`
	BooksBorrowed []int  `json:"books_borrowed"` // Book IDs
}

// AddBorrowedBook adds a book ID to the member's borrowed list
func (m *Member) AddBorrowedBook(bookID int) {
	m.BooksBorrowed = append(m.BooksBorrowed, bookID)
}

// RemoveBorrowedBook removes a book ID from the member's borrowed list
func (m *Member) RemoveBorrowedBook(bookID int) {
	for i, id := range m.BooksBorrowed {
		if id == bookID {
			m.BooksBorrowed = append(m.BooksBorrowed[:i], m.BooksBorrowed[i+1:]...)
			break
		}
	}
}
