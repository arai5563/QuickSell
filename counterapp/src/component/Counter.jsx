import React, { useState } from 'react';
import "./Counter.css";

const Counter = () => {

    let [start,setStart] = useState(10);

    const decreament = () => {

         if(start > 0){

             setStart(start -1)
         }else{
             setStart(0)
         }
    }
    const increament =()=> {

      
       setStart(start + 1)
    }

  return (
    <>
    
    <div className='main'>
      
        <div className='container'>

        <div className='decr'><button onClick={decreament}>-</button></div>
        <div className='inp'><input type="number"  value={start} /></div>
        <div className='inc'><button onClick={increament}>+</button></div>

        </div>

    </div>
    
    </>
  )
}

export default Counter
