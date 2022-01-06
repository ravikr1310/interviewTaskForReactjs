import React from 'react';

const UpdatedComponent = (OriginalComponent,incNumber) =>{
    class NewComponent extends React.Component{
        constructor(){
            super()
            this.state ={
                count: 0
            }
        }
        incrementCounter = () =>{
            this.setState(prevState => {
                return {
                    count: prevState.count + incNumber
                }            
            })
        }
        render(){
            console.log(">>>>>",this.props.name)
            return(
                <OriginalComponent count={this.state.count} incrementCounter={this.incrementCounter} {... this.props}/>
            )
        }
    }
    return NewComponent;
}

export default UpdatedComponent;