import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { setBooks } from '../features/books/booksSlice';

function BookForm() {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.inventory);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    genre: '',
    isbn: '',
    img: '',
    published_year: 0,
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleFormData(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(r => {
      if (r.ok) {
        r.json().then(addBook);
        history.push('/');
      } else {
        r.json().then(r => setErrors(r.errors));
      }
    });
  }

  function addBook(newBook) {
    const updatedBooks = [...books, newBook];
    dispatch(setBooks(updatedBooks));
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='field'>
        <label htmlFor='title'>Title </label>
        <input
          type='text'
          id='title'
          name='title'
          value={formData.title}
          onChange={handleFormData}
        />
      </div>
      <div className='field'>
        <label htmlFor='author'>Author </label>
        <input
          type='text'
          id='author'
          name='author'
          value={formData.author}
          onChange={handleFormData}
        />
      </div>
      <div className='field'>
        <label htmlFor='genre'>Genre </label>
        <input
          type='text'
          id='genre'
          name='genre'
          value={formData.genre}
          onChange={handleFormData}
        />
      </div>
      <div className='field'>
        <label htmlFor='isbn'>ISBN </label>
        <input type='text' id='isbn' name='isbn' value={formData.isbn} onChange={handleFormData} />
      </div>
      <div className='field'>
        <label htmlFor='img'>Image Url </label>
        <input type='text' id='img' name='img' value={formData.img} onChange={handleFormData} />
      </div>
      <div className='field'>
        <label htmlFor='published_year'>Published Year </label>
        <input
          type='number'
          id='published_year'
          name='published_year'
          value={formData.published_year}
          onChange={handleFormData}
        />
      </div>
      <div className='field'>
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          name='description'
          value={formData.description}
          onChange={handleFormData}
          rows={5}
          cols={50}
        />
      </div>
      {errors.map(error => (
        <p>{error}</p>
      ))}
      <button className='Submit-button' type='submit'>
        Submit
      </button>
    </form>
  );
}

export default BookForm;
