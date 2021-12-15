import React, { useState } from 'react';
import Dummy from './Dummy'

function Home(props) {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((c) => c + 1)
    }
    return (
        <div>
            <div>This is Home page.{props.data}</div>
            <Dummy/>
            {count}
            <button onClick={() => increment()}>Increment</button>
        </div>
    )
}

export default Home;