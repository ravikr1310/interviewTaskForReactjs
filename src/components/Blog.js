import React from 'react';

function Blog(){
    const arr = ["Apple","Banana","Orange","Coconut"];

    return(
        <div>
            <ul>
                {arr.map((data)=> <li>{data}</li>)}
            </ul>
        </div>
    )
}

export default Blog;