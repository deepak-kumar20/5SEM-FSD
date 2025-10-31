import { useState } from "react";
import React from "react";

function StateHandling() {
const [counter, setCounter] = useState(20);

function IncrementCounterValue() {
    setCounter(counter + 2);
}
    
return (
    <div>
        <h2>Counter Value: {counter}</h2>
        <button onClick={IncrementCounterValue}>Increment Counter</button>
        <button onClick={() => setCounter(counter - 2)}>Decrement Counter</button>
    </div>
);
}

export default StateHandling;
