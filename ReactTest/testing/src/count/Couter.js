import React, { useState } from "react";

const Counter = () => {
    const [count, setValue] = useState(0);

    const increase = () => {
        setValue(count + 1);
    };

    const decrease = () => {
        setValue(count - 1);
    };

    return (
        <>
            <div className="count">{count}</div>
            <button onClick={increase} className="plusButton">
                +
            </button>
            <button onClick={decrease} className="minusButton">
                -
            </button>
        </>
    );
};

export default Counter;