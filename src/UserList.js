import React,{useState} from 'react';

function UserList(){
    const [name, setName] = useState("");
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(name);
        alert(name);
    }
    return(
        <div>
            <ul>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <h1>{name}</h1>
                    <input type="submit"/>
                </form>
            </ul>
        </div>
    )
}

export default UserList;