import React, { useState, useContext,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import UserContext from '../../GlobalVariable';

function Users(props) {
    const [count, setCount] = useState(0);
    const user = useContext(UserContext);
    const [userdetails, setUserdetails] = useState({});
    const [isvisible, setIsvisible] = useState(false);

    const handleModal = (value) => {
        debugger;
        // setIsvisible(true);
        setUserdetails(value);
        
    }
    useEffect(() => {
        handleModal();
      }, [props]);
    return (
        <div>
            <h2>This is Users Details Page.</h2>
            <ul>
                {
                    user.map((item) => (
                    <div>
                        <li><Link to={"/user/"+item.id} key={item.id} onClick={() => handleModal(item)}>{item.name}</Link></li>
                    </div>
                    
                ))}
            </ul>
            {/* <Modal handleModal={handleModal()}/> */}
        </div>
    )
}
export default Users;