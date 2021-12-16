import React,{memo} from 'react';

function Dummy(){
    return(
        <div>Please dont rerender me!</div>
    )
}

export default memo(Dummy);