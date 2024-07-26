import React from 'react'

const CityCall = ({ cities, addData }) => {
    console.log('City di render');
  return (
    <>
        <div style={{textAlign: 'center'}}>
            {cities.map((city, index) => {
                return (
                    <div key={index} style={{ textAlign: 'center' }}>
                        {city}
                    </div>
                )
            })}
            <br />
            <button onClick={addData}>Add</button>
        </div>
    </>
  )
}

export default React.memo(CityCall);
// export default City;