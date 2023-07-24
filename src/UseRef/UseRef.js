import React, { useState,useRef } from 'react'

const UseRef = () => {
  // UseRef digunakan untuk memanipulasi DOM secara manual di react.

//   const [state, setstate] = useState(0);
  const btnRef = useRef (0);

  function handlerState() {
    // setstate(state + 1);
    // btnRef.current += 1;
    console.log(btnRef.current);
    
  }

  console.log('Komponen dirender');
  
  return (
    <div>
        <button onClick={handlerState} ref={btnRef}>Button</button>
    </div>
  )
}

export default UseRef