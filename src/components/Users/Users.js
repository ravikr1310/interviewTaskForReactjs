import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';

function Users(props) {
    const [data, setData] = useState(props.userdata);
    const [count,setCount] = useState(0);
    
    const handleModal = (value) =>{
        debugger;
        // setCount(value);
        // alert(count);
        setCount(previousState => {
            return { ...previousState, id: value }
          });
    }
    
    return (
        <div>
            <h2>This is Users Details Page.</h2>
            <ul>
                {data.map((item) => (
                    <div>
                        <li><Link to={item.name} onClick={() => handleModal(item.id)}>{item.name}</Link></li>
                        {
                            count === item.id && <Modal/>
                        }
                    </div>))}
            </ul>
        </div>
    )
}
export default Users;