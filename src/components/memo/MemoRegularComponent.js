import React, { Component, memo } from 'react';

function MemoRegularComponent({name}) {
    console.log("Memo000000000000")
    return (
        <div>
            Regular Component {name}
        </div>
    )
}


export default memo(MemoRegularComponent);