import React,{Component} from 'react';

class StudentDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: "Hello World"
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log(props);
        console.log(state);
        return null;
    }
    render(){
        return(
            <div>Hello {this.props.detail.name}</div>
        )
    }
}

export default StudentDetails;