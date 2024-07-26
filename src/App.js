import React from 'react';
import UseRef from './UseRef/UseRef';
import UseReducerCounter from './UseReducer/UseReducerCounter';
import Counter from './state/Counter';
import UseStateObject from './UseStateObject/UseStateObject';
import Card from './useStateArrray/Card';
import './App.css';
import CardProps from './props/CardProps';

function App() {
  return (
    <div>
      {/* Implementasi Props */}
      {/* <CardProps/> */}

      {/* Implementasi State */}
      {/* <Counter/> */}

      {/* Implementasi UseState dengan Object */}
      {/* <UseStateObject/> */}

      {/* Implementasi Usestate dengan Array */}
      {/* <Card/> */}

      {/* Implementasi UseRef */}
      {/* <UseRef/> */}

      {/* Implementasi Use Reducer */}
      <UseReducerCounter/>


    </div>
  );
}

export default App;
