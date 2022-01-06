import React, { Component } from 'react';
import StudentDetails from './StudentDetails'

class Student extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: {
                name: this.props.name,
                age: 35,
                location: "Nimcha"
            }
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("Student props: ",props);
        console.log("Student State: ",state)
    }
    render() {
        return (
            <div>
                Hello {this.props.name}
                <StudentDetails detail={this.state.details} />
            </div>
        )
    }
}

export default Student;