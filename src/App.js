
import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/PageNotFound/NotFound';
import Users from './components/Users/Users';

function App() {
  const users = [
    { id: 1, name: "Sumit", email: "sumit@gmail.com" },
    { id: 2, name: "Deepak", email: "deepak@gmail.com" },
    { id: 3, name: "Raja", email: "raja@gmail.com" },
    { id: 4, name: "Zalim", email: "zalim@gmail.com" },
    { id: 5, name: "Roshan", email: "roshan@gmail.com" },
    { id: 6, name: "Sudip", email: "sudip@gmail.com" },
    { id: 7, name: "Sigma", email: "sigma@gmail.com" },
  ]
  return (
    <div>
      <Router>
      <Layout />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<Users userdata={users}/>}/>
          <Route path="*" exact element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
