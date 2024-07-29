import React, {useState} from 'react'
import City from './City'

const Index = () => {
  // Memo di gunakan untuk memoize seluruh component
  // UseMemo merupakan hook yang digunakan untuk memoize nilai yang dihitung. 
  // useMemo memastikan bahwa nilai yang dihitung hanya akan dihitung ulang jika salah satu dependensi berubah.
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