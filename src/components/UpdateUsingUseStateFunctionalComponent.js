import React,{useState} from 'react';

function UpdateArrayUsingUseState(){
    const arr = ["Kranti","Kanchan","Shila","Bindu","Kiran"]
    const [user, setUser] = useState(arr);
    const [inputvalue, setInputvalue] = useState("");
    
    const handleChange = (value) =>{
        setInputvalue(value)
    }
    const handleSubmit = () =>{
        /**
         * 1st Approach
         */
        // setUser([...user,inputvalue])

        /**
         * 2nd Approach
         */
        const newval = [...user];
        newval.push(inputvalue);
        setUser(newval)
    }
    return (
        <div>
            <div>
                <ul>
                    {
                        user.map((item,id) => <li key={id}>{item}</li>)
                    }
                    <input type="text" value={inputvalue} onChange={(event) => handleChange(event.target.value)}/>
                    <button onClick={() => handleSubmit()}>Submit</button>
                </ul>
            </div>
        </div>    
    )
}
export default UpdateArrayUsingUseState;