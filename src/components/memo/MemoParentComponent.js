import React,{Component} from 'react';
import MemoRegularComponent from './MemoRegularComponent';

class MemoParentComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "Memo Testing"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "Update Memo"
            })
        },2000)
    }
    render(){
        return(
            <div>
                Parent Component
                <MemoRegularComponent name={this.state.name}/>
            </div>
        )
    }
}

export default MemoParentComponent;