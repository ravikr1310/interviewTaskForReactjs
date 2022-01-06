import React,{Component} from 'react';
import UpdatedComponent from './HighOrderComponent'

class ClickCounter extends Component{
    render(){
       // const {count} = this.props
        return (
            <div>
                <button onClick={this.props.incrementCounter}>Click Counter : {this.props.count} {this.props.name}</button>            
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter,5);