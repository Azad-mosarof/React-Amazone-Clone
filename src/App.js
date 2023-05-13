import './App.css';
import Header from './Header';
import Suggestion from './Suggestion';
import Home from './Home';
import Checkout from './Checkout';
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    //will run only once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser)

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">

        <Routes >

          <Route path="/" element={
            <div>
              <Header />
              <Suggestion />
              <Home />
              <Footer/>
            </div>
          }/>

          <Route path="/checkout" element={
            <div>
              <Header />
              <Suggestion />
              <Checkout/>
              <Footer/>
            </div> 
          }/>

          <Route path="/login" element={
            <Login/>
          }/>

        </Routes >

      </div>
    </Router>

  );
}

export default App;
