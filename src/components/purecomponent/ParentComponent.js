import React, { Component } from 'react';
import PureComp from './PureComponent';
import RegularComponent from './RegularComponent';

class ParentComponent extends Component {
    constructor(){
        super()
        this.state = {
            name: "Kiran"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "Kiran"
            }) 
        },2000)
    }
    render() {
        console.log("********** Parent component")
        return (
            <>
                <div>Parent Component</div>
                <RegularComponent name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </>
        )
    }
}

export default ParentComponent;