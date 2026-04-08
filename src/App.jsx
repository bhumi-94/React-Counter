import React, { useState } from 'react'

const App = () => {

  let [Counter,SetCounter] = useState(0);

  function Increment(){
    SetCounter(Counter+1)
    
  }
  function Decrement(){
    SetCounter(Counter-1)
  }
  return (
    <>
      <h1 className='div'>{Counter}</h1>  
      <button onClick={Increment} className='btn'>Increment</button> 
      <button onClick={Decrement} className='btn'>Decrement</button>

    </>
  )
}

export default App