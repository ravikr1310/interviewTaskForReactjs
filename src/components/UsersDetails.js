
import React,{useState} from'react';
import {} from 'react-router-dom';
function UsersDetails(props){
    const [data, setData] = useState(props.userdata);
    console.log("Hello Props: ",props)
    return(
        <div>
            <h3>Hi, this is user id:</h3>
        </div>
    )
}

export default UsersDetails;