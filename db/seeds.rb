books_data = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel set in the American South during the 1930s that deals with serious issues such as racial injustice and moral growth.",
    genre: "Fiction",
    isbn: "9780061120084",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    published_year: 1960
  },
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel that explores the dangers of totalitarianism, surveillance, and manipulation of truth.",
    genre: "Science Fiction",
    isbn: "9780451524935",
    img: "https://cdn.kobo.com/book-images/d4f63841-0013-4af3-93c0-25753e39bc3f/1200/1200/False/lwlXcH74nTq35SM8wlBD3Q.jpg",
    published_year: 1949
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A novel depicting the lavish lifestyle and moral decay of the wealthy elite in the 1920s.",
    genre: "Fiction",
    isbn: "9780743273565",
    img: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
    published_year: 1925
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A classic novel exploring themes of love, class, and social expectations in 19th-century England.",
    genre: "Romance",
    isbn: "9780141439518",
    img: "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
    published_year: 1813
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "A coming-of-age novel narrated by a teenager named Holden Caulfield, who deals with alienation and identity.",
    genre: "Fiction",
    isbn: "9780316769488",
    img: "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
    published_year: 1951
  }
]

books_data.each do |book_data|
  Book.create(book_data)
end

puts "Seeding completed! Books created."