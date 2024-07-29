import React, { useState } from 'react';

const City = ({ cities }) => {
    console.log('City di render');

    const [city, setCity] = useState(['Jakarta', 'Bandung', 'Malang']);
    const [currentCity, setCurrentCity] = useState(0);



    function gantiCity() {
        // setCity((prevCity)=> (city.length + 1))
        setCurrentCity((prevCity) => (prevCity + 1) % city.length);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <button onClick={gantiCity}>Ganti City</button>
            <br />
            {city[currentCity]} {/* Menampilkan elemen di indeks kedua */}
        </div>
    );
}

export default React.memo(City);
// export default City;
