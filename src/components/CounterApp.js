import React, { useState } from 'react'

const CounterApp = () => {
    const [counter, setCounter] = useState(0);
  
    const incrementCounter = () =>{
        setCounter(counter+1);
        setCounter(prevCounter => prevCounter+1);
    }
  
  
  
  
    return (
    <div>
    <h1>Clicks {counter}</h1>
    <button onClick={incrementCounter}>Aumentar</button>
    </div>
  )
}

export default CounterApp