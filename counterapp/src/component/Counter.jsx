import React, { useState } from 'react';
import "./Counter.css";

const Counter = () => {

  let [start, setStart] = useState(1);

  const decreament = () => {

    if (start > 0) {

      setStart(start - 1)
    }
  }
  const increament = (e) => {
    if (start == 999) {
      alert("reached Max value")
    }
    if ((start >= 0) && (start < 1000)) {
      setStart(start + 1)
    }
  }

  const handleChange = (e) => {

    setStart("");

    if (start < 1000) {
      start = e.target.value;
      setStart(+start)
    }

    if (start >= 1000) {
      alert("Entered value is greater than Max Value")
    }

  }

  return (
    <>

      <div className='main'>

        <div className='container'>

          <div className='decr'><button onClick={decreament}>-</button></div>
          <div className='inp'><input type="numeric" value={start} onChange={handleChange} /></div>
          <div className='inc'><button onClick={increament}>+</button></div>

        </div>

      </div>

    </>
  )
}

export default Counter
