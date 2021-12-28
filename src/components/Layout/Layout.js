import {Outlet, Link} from 'react-router-dom';

function Layout(){
    const ids = 111;
    return(
        <>
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to={"/user/"+ids}>User</Link>
            <Outlet/>
        </>
    )
}

export default Layout;