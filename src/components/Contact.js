import React, { useState } from 'react';

function Contact() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values,[name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    return (
        <div>
            <div></div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={inputs.username || " "}
                    onChange={handleChange}/>
                <input
                    type="text"
                    name="age"
                    value={inputs.age || " "}
                    onChange={handleChange}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Contact;