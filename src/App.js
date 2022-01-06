
import './App.css';
import './Assets/my-sass.scss';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/PageNotFound/NotFound';
import Users from './components/Users/Users';
import Count from './counter';
//import ParentComponent from './components/ParentComponent';
import ConditionaalRendering from './components/ConditionaalRendering'
import UserList from './components/UserLists';
import StyleSheet from './components/StyleSheet';
import ControlledComponent from './components/ControlledComponent';
import TechnologiesList from './components/ListMapUpdateArrayElements'
import UpdateArrayUsingUseState from './components/UpdateUsingUseStateFunctionalComponent'
import ErrorBoundaryUi from './components/ErrorBoundaryUI';
import ErrorBoundary from './components/ErrorBoundary';
import Student from './components/Student';
import ParentComponent from './components/purecomponent/ParentComponent';
import MemoParentComponent from './components/memo/MemoParentComponent';
import ClickCounter from './components/higherOrderComponent/ClickCounter';
import HoverCounter from './components/higherOrderComponent/HoverCounter';

function App() {

  const test = "Ravi Kumar";
  
  return (
    <>
    <ClickCounter name="Kapil deev"/>
    <HoverCounter name="Sunil"/>
    {/* <MemoParentComponent/> */}
    {/* <ParentComponent/> */}
    {/* <Student name="Kranti"/> */}
      {/* <ErrorBoundary>
        <ErrorBoundaryUi heroname="Batman" />
        <ErrorBoundaryUi heroname="Superman" />
        <ErrorBoundaryUi heroname="Jocker" />
      </ErrorBoundary> */}
      {/* <UpdateArrayUsingUseState/> */}
      {/* <TechnologiesList/> */}
      {/* <ControlledComponent/> */}
      {/* <StyleSheet primary={false}/> */}
      {/* <Count/>
        <ParentComponent/> */}
      {/* <ConditionaalRendering/> */}
      {/* <UserList/> */}
      {/* <h1>CSS Pre-process</h1>
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
        </div>*/}
        {/* <Router>
          <Layout />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/:ids" element={<Users />} />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
        </Router> */}
        
    </>
  );
}

export default App;
