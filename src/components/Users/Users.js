import React, { useState, useContext,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import UserContext from '../../GlobalVariable';

function Users(props) {
    const [count, setCount] = useState(0);
    const user = useContext(UserContext);
    const [userdetails, setUserdetails] = useState({});
    const [isvisible, setIsvisible] = useState(false);
    const [userfound, setUserfound] = useState({});

    const handleModal = (value) => {
        //debugger
        // setIsvisible(true);
        setUserdetails(previousState => {
            return {...previousState,value: value}
        });        
        setUserfound(value);
        setIsvisible(true)
    }
    // useEffect(() => {
    //     handleModal();
    //   }, [props]);
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
            {isvisible && 
                <Modal userfound={userfound} isvisible={isvisible}/>}
        </div>
    )
}
export default Users;