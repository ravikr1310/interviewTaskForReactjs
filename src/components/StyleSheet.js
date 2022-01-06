import React from 'react';
import './MyStyle.css';

function StyleSheet(props){
    let className = props.primary? 'primary':"";
    return(
        <h1 className={`${className} font-xl font-style`}>Inline Style</h1>
    )
}

export default StyleSheet;