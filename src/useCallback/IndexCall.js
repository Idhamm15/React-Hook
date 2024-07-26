import React, {useCallback, useState} from 'react'
import CityCall from './CityCall';

const IndexCall = () => {
    const [counter, setCounter] = useState(0);
    const [city, setCity] = useState(['Jakarta', 'Bandung', 'Surabaya']);

    function increment() {
        setCounter(counter + 1);
    }

    const addCity = useCallback(()=> {
        setCity((prev) => [...prev, "Kota Baru"])
    }, [city]);
  return (
    <div>
        <h1 style={{ textAlign: 'center'}}>{counter}</h1>
        <div style={{textAlign: 'center'}}>
            <button onClick={increment}>Increment</button>
        </div>
        <hr/>

        <CityCall addData={addCity} cities={city}/>
    </div>
  )
}

export default IndexCall;