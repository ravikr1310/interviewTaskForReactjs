import React from 'react';

const UpdatedComponent = (OriginalComponent,intNum) =>{
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
                    count: prevState.count + intNum
                }            
            })
        }
        render(){
            console.log(">>>>>",this.props.count)
            return(
                <OriginalComponent count={this.state.count} incrementCounter={this.incrementCounter} {... this.props}/>
            )
        }
    }
    return NewComponent;
}

export default UpdatedComponent;