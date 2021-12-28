import GlobalStyle from '../../GlobalVariable';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

function Modal(props){
    const [isClose, setClose] = useState(props.isvisible);
    const handleClose = (value) =>{
        debugger
        setClose(value);
        console.log("child data: ",props.handleModal(value));
    }
    
    return(
        <div className="modal">
            <div className="dialog"><a href="#" onClick={()=>handleClose(false)}>Close</a></div>
            <h1>User Name: {props.userfound.name}</h1>
            <h2>User Email Id: {props.userfound.email}</h2>
            <h3>user Id: {props.userfound.id}</h3>
        </div>
    )
}

export default Modal;