import React, { useReducer } from 'react'

const UseReducerCounter = () => {
  //  useReducer adalah sebuah funtion yang mengelola sebuah state, sama dengan useState, tetapi lebih complex


  // Penggunaan UseReducer
  function reducer(state, action) {
    // ketika di INCREMENT
    // Jalankan action.type === INCREMENT
    if (action.type === "INCREMENT") {
      // return state + 1;  // parsing data biasa
      return state + action.value; //parsing data dengan declare atribut baru
    // ketika di DECREMENT
    // Jalankan action.type === DECREMENT
    } else if (action.type === "DECREMENT") {
      // return state - 1;
      return state - action.value; //parsing data dengan declare atribut baru
    }else {
        return 0;
    }
  }

  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{counter}</h1>
      <div style={{ textAlign: "center" }}>
        {/* Penambahan atribut baru yaitu 'value' */}
        <button onClick={() => dispatch({ type: "DECREMENT", value: 5 })}>
          Decrement
        </button>
        {/* Penambahan atribut baru yaitu 'value' */}
        <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
          Increment
        </button>
      </div>
    </div>
  );
}

export default UseReducerCounter