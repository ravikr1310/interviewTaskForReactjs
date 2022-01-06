import React from 'react';

class ConditionaalRendering extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn:false
        }
    }
    render(){

        /**
         * if/else
         */
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Hello Vishwash
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div>
        //             Hello Guest
        //         </div>
        //     )
        // }

        /*
            element varialble
        */
        // var message
        // if(this.state.isLoggedIn){
        //     message = <div>Hello Vishwash</div>
        // }else{
        //     message =  <div>Hello Guest</div>
        // }

        /**
         * ternory operator
         */
        // return(
        //     this.state.isLoggedIn ? <div>Hello Vishwash</div>:<div>Hello Guest</div>
        // )

        /**
         * short circuit operator
         */
        return this.state.isLoggedIn && <div>Hello Vishwash</div>
    }
}

export default ConditionaalRendering