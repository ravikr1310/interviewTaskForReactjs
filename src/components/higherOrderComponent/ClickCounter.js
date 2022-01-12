import React,{Component} from 'react';
import UpdatedComponent from './HighOrderComponent'

class ClickCounter extends Component{
    render(){
        return (
            <div>
                <button onClick={this.props.incrementCounter}>Click Counter : {this.props.count}</button>            
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter,30);