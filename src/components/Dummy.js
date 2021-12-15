import React,{memo} from 'react';

function Dummy(){
    console.log(">>>>>>>>>>>");
    return(
        <div>Please dont rerender me!</div>
    )
}

export default memo(Dummy);