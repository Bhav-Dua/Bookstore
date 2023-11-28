import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { useDispatch } from 'react-redux';
import { login } from '../features/user/userSlice';
import { useState, useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        dispatch(login(r.json()));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/books')
      .then((r) => r.json())
      .then(setBooks);
  }, []);

  return <div className="App"></div>;
}

export default App;
