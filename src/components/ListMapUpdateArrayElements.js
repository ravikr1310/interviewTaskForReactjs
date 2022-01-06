import React,{useState} from 'react';

function TechnologiesList(){
    const [tech , setTech] = useState(["Html","CSS","Javascript","ReactJs","Material UI"]);
    const [inputvalue, setInputvalue] = useState("");
    const additem = () =>{
        //1st approach
        // setTech([...tech,inputvalue])

        //2nd approach
        let oldvalue = [...tech]
        oldvalue.push(inputvalue)
        setTech(oldvalue);
    }
    const handleInput = (value) =>{
        setInputvalue(value);
    }
    return (
        <div>
            <ul>
                {
                    tech.map((item,key) => <li key={key}>{item}</li>)
                }
                    <lable>Technologies Name:</lable>
                    <input type="text" 
                        value={inputvalue} 
                        onChange={(e) => handleInput(e.target.value)}/>
                    <button onClick={() => additem()}>Submit</button>
            </ul>
        </div>
    )
}

export default TechnologiesList;