import React from 'react';

class ControlledComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            comments: "",
            topic: ""
        }
    }
    handleUserName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleComment = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    hancleLanguage = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }
    formSubmit = () =>{
        alert(`${this.state.name} ${this.state.comments} ${this.state.topic}`)
    }
    render() {
        return (
            <div>
                <h1>Comtrolled Component</h1>
                <form onSubmit={this.formSubmit}>
                    <div>
                        <lable>User Name</lable>
                        <input type="text" value={this.state.name} onChange={this.handleUserName} />
                    </div>
                    <div>
                        <lable>Type Coments</lable>
                        <textarea value={this.state.comments} onChange={this.handleComment}></textarea>
                    </div>
                    <div>
                        <lable>Select Language</lable>
                        <select value={this.state.topic} onChange={this.hancleLanguage}>
                            <option value="Hindi">Hindi</option>
                            <option value="English">English</option>
                        </select>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default ControlledComponent;