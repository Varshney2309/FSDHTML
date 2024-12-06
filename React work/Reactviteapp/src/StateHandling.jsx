import React, { useState } from 'react'

function StateHandling() {
    const[count,setCount]=useState(20);
    function doIncrement(){
        // alert("hello");
        setCount(count+20)
    } 
  return (
    <div>
    <div>StateHandling
        <h2>Counter Value:{count}</h2>
    </div>
    <div>
        <button onClick={doIncrement}>Increment</button>
    </div>
    </div>

  )
}

export default StateHandling