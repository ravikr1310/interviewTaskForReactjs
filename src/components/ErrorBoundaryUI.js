import React,{useState} from 'react';

function ErrorBoundaryUi({heroname}){
    if(heroname === "Jocker"){
        throw new Error('Not a hero')
    }
    return (
        <div>
            {heroname}
        </div>    
    )
}
export default ErrorBoundaryUi;