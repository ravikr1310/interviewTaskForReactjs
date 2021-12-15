import React,{useState} from 'react';
const Footer = () => {
    const [name, setName] = useState("Ravi");
    return <div>This is Footer Component:  {name}</div>
}

export default Footer;