import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"Ravi Kumar"
        }
        this.handleUserName = this.handleUserName.bind(this);
    }
    handleUserName (){
        alert(`This is parent data ${this.state.name}`)
    }
    render(){
        return(
            <ChildComponent handler={this.handleUserName}/>
        )
    }
}

export default ParentComponent;