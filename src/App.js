
import './App.css';
import { BrowserRouter, HashRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import { useState } from 'react';
import UsersContainer from './components/UsersContainer';
import UsersDetails from './components/UsersDetails';
function App(props) {
  const [data, setData] = useState("Evc Venture");
  console.log("Hello",props)
  const ids = 12;
  return (
    <div>
      <UsersContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home data={data} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/:id" element={<UsersDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home data={data}/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </HashRouter>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home data={data}/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/users" element={<UsersContainer/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </MemoryRouter> */}
    </div>
  );
}

export default App;
