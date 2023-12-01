function HomePage() {
  const books = useSelector(state => state.books.inventory);
  const mostPopularBook = books.reduce((prevBook, currentBook) => {
    return prevBook.reviews.length > currentBook.reviews.length ? prevBook : currentBook;
  }, books[0]);

  let mostPopularBookCard;

  if (mostPopularBook) {
    mostPopularBookCard = (
      <BookCard
        id={mostPopularBook.id}
        title={mostPopularBook.title}
        author={mostPopularBook.author}
        img={mostPopularBook.img}
      />
    );
  } else {
    mostPopularBookCard = (
      <p style={{ color: '#ff0000', fontStyle: 'italic' }}>No book available</p>
    );
  }

  return (
    <div className='homepage'>
      <h1>Welcome to the BookStore!</h1>
      <h2>Your one stop shop for books and people's opinions on them</h2>
      <h3>Currently our most popular book is</h3>
      {mostPopularBookCard}
    </div>
  );
}

export default HomePage;
