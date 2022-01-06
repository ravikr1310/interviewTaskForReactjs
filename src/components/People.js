import React from 'react';

function People({user}){
    return (
            <h3>My Name is {user.name}. I am {user.age} years old. By profession i am {user.profession}</h3>
    )
}

export default People;