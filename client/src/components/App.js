import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { useDispatch } from 'react-redux';
import { login } from '../features/user/userSlice';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm';

function App() {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((r) => dispatch(login(r)));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/books')
      .then((r) => r.json())
      .then(setBooks);
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path='/signup'>
          <SignUpForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
