import React, { useState } from 'react';

function Header() {
    const [fruits, sdfasdf] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const handerColor = () => {
        sdfasdf(previousState => {
            return {
                ...previousState, brand: "maruti"
            }
        });
    }
    return (
        <div>
            <ul>
                <li>{fruits.brand}</li>
                <li>{fruits.color}</li>
            </ul>
            <button type="button" onClick={() => handerColor()}>click me!</button>
        </div>
    )
}

export default Header;