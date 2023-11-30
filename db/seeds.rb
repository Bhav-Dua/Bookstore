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

users_data = [
  {
    username: "Mike",
    password: "123",
    password_confirmation: "123",
  },
  {
    username: "Tyler",
    password: "123",
    password_confirmation: "123",
  },
  {
    username: "John",
    password: "123",
    password_confirmation: "123",
  },
  {
    username: "Kronos",
    password: "123",
    password_confirmation: "123",
  }
]

books_data.each do |book_data|
  Book.create(book_data)
end

users_data.each do |user_data|
  User.create(user_data)
end

puts "Seeding completed! Books created."

def find_user(username)
  User.find_by(username: username)
end

def find_book(title)
  Book.find_by(title: title)
end

mike = find_user("Mike")
tyler = find_user("Tyler")
john = find_user("John")
kronos = find_user("Kronos")

book1 = find_book("To Kill a Mockingbird")
book2 = find_book("1984")

Review.create!(
  user: mike,
  book: book1,
  content: "Engaging and thought-provoking!",
  rating: 4
)

Review.create!(
  user: mike,
  book: book2,
  content: "A classic that resonates with the current world.",
  rating: 5
)

book2 = find_book("1984")
book3 = find_book("The Great Gatsby")

Review.create!(
  user: tyler,
  book: book2,
  content: "A chilling portrayal of a surveillance society.",
  rating: 4
)

Review.create!(
  user: tyler,
  book: book3,
  content: "An intriguing glimpse into the 1920s lifestyle.",
  rating: 4
)

book1 = find_book("To Kill a Mockingbird")
book4 = find_book("Pride and Prejudice")

Review.create!(
  user: john,
  book: book1,
  content: "A masterpiece that addresses important societal issues.",
  rating: 5
)

Review.create!(
  user: john,
  book: book4,
  content: "A classic romance with timeless themes.",
  rating: 4
)

book3 = find_book("The Great Gatsby")
book4 = find_book("Pride and Prejudice")
book5 = find_book("The Catcher in the Rye")

Review.create!(
  user: kronos,
  book: book3,
  content: "A captivating portrayal of the Jazz Age.",
  rating: 5
)

Review.create!(
  user: kronos,
  book: book4,
  content: "An interesting exploration of societal norms.",
  rating: 3
)

Review.create!(
  user: kronos,
  book: book5,
  content: "A compelling coming-of-age story.",
  rating: 4
)

puts "Seeding completed! Reviews created."