import React from 'react';
import UserList from '../../UserList';

function About(props){
    const goBack = ()=> {
        props.history.goBack();
      }
    return(
        <>
        <h2>This is About page.</h2>
        <UserList/>
        <button onClick={goBack.bind(this)}>Go Back</button>
        </>
    )
}
export default About;