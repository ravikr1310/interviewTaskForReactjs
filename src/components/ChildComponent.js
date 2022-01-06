import React,{useEffect,useState} from 'react';

function ChildComponent(props){
    const [child, setChild] = useState("Child Component");
    // console.log(props)
    // useEffect(() =>{
    //     props.handler(child)
    // },[]);
    return(
        <div>
            <button onClick={props.handler}>Hello</button>
        </div>
    )
}

export default ChildComponent;