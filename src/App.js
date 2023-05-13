import './App.css';
import Header from './Header';
import Suggestion from './Suggestion';
import Home from './Home';
import Checkout from './Checkout';
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <Suggestion />

        <Routes >
          <Route path="/" element={<Home />}/>

          <Route path="/checkout" element={<Checkout/> }/>
        </Routes >

        <Footer/>

      </div>
    </Router>

  );
}

export default App;
