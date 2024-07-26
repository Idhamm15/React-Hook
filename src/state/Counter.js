import {useState} from 'react'

function Counter() {
    // let counter = 0;

    // Membuat state dengan useState
    const [counter, setCounter] = useState(0);


    const increment = () => {
        setCounter(counter + 1 );
        console.log(counter);
    }

    const decrement = () => {
        setCounter(counter - 1 );
        console.log(counter);
    }
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>{counter}</h1>
        <div style={{textAlign: 'center'}}>
            <button onClick={decrement}>Decrement</button>
            {' '}
            <button onClick={increment}>Increment</button>
        </div>
    </div>
  )
}

export default Counter