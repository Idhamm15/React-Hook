import React from 'react';
import UseRef from './UseRef/UseRef';
import UseReducerCounter from './UseReducer/UseReducerCounter';
import Counter from './state/Counter';
import UseStateObject from './UseStateObject/UseStateObject';
import Card from './useStateArrray/Card';
import './App.css';
import CardProps from './props/CardProps';
import Parent from './useContext/Parent';
import Index from './memo/Index';
import IndexCall from './useCallback/IndexCall';
import CustomHooks from './customHooks/CustomHooks';


// Implementasi UseContext
export const namaContext = React.createContext()

function App() {
  return (
    // <div>
      
      // {/* Implementasi Props */}
      // {/* <CardProps/> */}

      // {/* Implementasi State */}
      // {/* <Counter/> */}

      // {/* Implementasi UseState dengan Object */}
      // {/* <UseStateObject/> */}

      // {/* Implementasi Usestate dengan Array */}
      // {/* <Card/> */}

      // {/* Implementasi UseRef */}
      // <UseRef/>

      // {/* Implementasi UseReducer */}
      // {/* <UseReducerCounter/> */}


    // </div>



    
    // Implementasi UseContext
    // <namaContext.Provider 
    //   value={{firstname: 'Cristiano', lastname: 'Ronaldo' }}
    // >
    // <Parent/>   
    // </namaContext.Provider>


    // Implementasi Memo
    <Index/>

    // Implementasi UseCallback
    // <IndexCall/>


    // Implementasi CustomHooks
    // <CustomHooks/>

  );
}

export default App;
