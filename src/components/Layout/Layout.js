import {Outlet, Link} from 'react-router-dom';

function Layout(){
    return(
        <div>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Layout;