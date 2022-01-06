import React from 'react';
import People from './People';

function UserList() {
    const users = [
        {
            id:1,
            name: "Ravi",
            age: 34,
            profession:"Developer"
        },
        {
            id:2,
            name: "Sunil",
            age: 65,
            profession:"Enginear"
        },
        {
            id:3,
            name: "Kapil",
            age: 98,
            profession:"Carpenter"
        }
    ]
    const userList = users.map(item => <People user={item}/>)
    return (
        <div>
            {
                userList
            }
        </div>
    )
}

export default UserList;