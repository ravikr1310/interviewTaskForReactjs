import React,{Component} from 'react';
import UpdatedComponent from './HighOrderComponent';

class HoverCounter extends Component{    
    render(){
        return (
            <div>
                <button onMouseOver={this.props.incrementCounter}>Click Counter : {this.props.count} {this.props.name}</button>
            
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter,4);