import React, { useEffect, useState } from 'react'

function UseEffectWork() {
    const[count,setCount]=useState(10);
    const[pointer,setPointer]=useState(100);
    function doIncrement(){
        setCount(count+20);
    }
    function doPointer(){
        setPointer(pointer-10);
    }
    useEffect(()=>{
        console.log("Component is rendered"+count);
        console.log("Component is rendered"+pointer);
    },[count,pointer])
  return (
    <div>
        Count Value:{count}
        <br></br>
        Pointer Value:{pointer}
        <div>
            <button onClick={doIncrement}>Increment</button>
            <button onClick={doPointer}>Pointer</button>
        </div>
    </div>
  )
}

export default UseEffectWork