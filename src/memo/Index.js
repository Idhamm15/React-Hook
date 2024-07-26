import React, {useState} from 'react'
import City from './City'

const Index = () => {
    const [counter, setCounter] = useState(0);
    const [city, setCity] = useState(['Jakarta', 'Bandung', 'Surabaya']);

    function increment() {
        setCounter(counter + 1);
    }
  return (
    <div>
        <h1 style={{ textAlign: 'center'}}>{counter}</h1>
        <div style={{textAlign: 'center'}}>
            <button onClick={increment}>Increment</button>
        </div>
        <hr/>

        <City cities={city}/>
    </div>
  )
}

export default Index