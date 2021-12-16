
import './App.css';
import { BrowserRouter, HashRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import { useState ,useEffect} from 'react';
import UsersDetails from './components/UsersDetails';
function App(props) {
  const [data, setData] = useState("Evc Venture");
  const users = [
    { id: 1, name: "Sumit", email: "sumit@gmail.com" },
    { id: 2, name: "Deepak", email: "deepak@gmail.com" },
    { id: 3, name: "Raja", email: "raja@gmail.com" },
    { id: 4, name: "Zalim", email: "zalim@gmail.com" },
    { id: 5, name: "Roshan", email: "roshan@gmail.com" },
    { id: 6, name: "Sudip", email: "sudip@gmail.com" },
    { id: 7, name: "Sigma", email: "sigma@gmail.com" },
  ]
  useEffect(() => {
    setData(users);
  },[]);
  const ids = 12;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home data={data} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/:id" element={<UsersDetails data={users} />} />
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
            <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </MemoryRouter> */}
    </div>
  );
}

export default App;
