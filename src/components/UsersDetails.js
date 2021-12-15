
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function UsersDetails(props) {
    const [data, setData] = useState(props.userdata);
    const users = [
        { id: 1, name: "Sumit", email: "sumit@gmail.com" },
        { id: 2, name: "Deepak", email: "deepak@gmail.com" },
        { id: 3, name: "Raja", email: "raja@gmail.com" },
        { id: 4, name: "Zalim", email: "zalim@gmail.com" },
        { id: 5, name: "Roshan", email: "roshan@gmail.com" },
        { id: 6, name: "Pinky", email: "pinki@gmail.com" },
        { id: 7, name: "Payal", email: "payal@gmail.com" },
    ]
    return (
        <div>
            <ul>
                {
                    users.map((item) => <div><li><Link to={"/user/" + item.id}>{item.name}</Link></li></div>)
                }
            </ul>
        </div>
    )
}

export default UsersDetails;