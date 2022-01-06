import React,{useState} from 'react';


/* 
    CLASS COMPONENT 
*/

// class Count extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             count: 0
//         }
//     }
//     handleCounter = () =>{
//         this.setState(prevState => ({
//             count: prevState.count + 1
//         }))
//     }
//     render(){ 
//         return (
//             <div>
//                 <h2>Count: {this.state.count}</h2>
//                 <button onClick={() => this.handleCounter()}>Counter</button>
//             </div>
//         )
//     }
// }


/*
    Function Component
*/
const Count = () =>{
    const [count, setCount] = useState(0);

    const handleCounter = () =>{
        setCount(count+1)
    }

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => handleCounter()}>Counter</button>
        </div>
    )
}
export default Count;