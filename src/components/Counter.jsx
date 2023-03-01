import React, { useState } from 'react'

function Counter() {
    // let count=2
    const[count,setcount]=useState(1)
    function changeCount(){
        setcount(count+1)
    }
    function decreaseCount(){
        setcount(count-1)
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={changeCount}>+</button>
        <button onClick={decreaseCount}>-</button>
    </div>
  )
}

export default Counter