
import './App.css';
import './Assets/my-sass.scss';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/PageNotFound/NotFound';
import Users from './components/Users/Users';

function App() {
  
  const test = "Ravi Kumar";
  return (
    <div>
      
        <h1>CSS Pre-process</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Apple</a>
              <a href="#">Mango</a>
            </li>
          </ul>
        </nav>
        <div className='container'>
          This extends and inheritance
        </div>
        <Router>
          <Layout />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/:ids" element={<Users />} />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
