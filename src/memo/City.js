import React from 'react'

const City = ({ cities }) => {
    console.log('City di render');
  return (
    <>
        {cities.map((city, index) => {
            return (
                <div key={index} style={{ textAlign: 'center' }}>
                    {city}
                </div>
            )
        })}
    </>
  )
}

export default React.memo(City);
// export default City;