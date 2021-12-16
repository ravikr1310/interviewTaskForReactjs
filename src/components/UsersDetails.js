
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function UsersDetails(props) {
    const [data, setData] = useState(props.data);
    const [isfound, setIsFound] = useState(true);
    const todoItems = data.map((item) => <li><Link to={"/user/" + item.id} key={item.id}>{item.name}</Link></li>)
    return (
        <div>
            <h1>React Dynamic Routing</h1>
            <ul>
                {todoItems}
            </ul>
            <h3></h3>
        </div>
    )
}

export default UsersDetails;