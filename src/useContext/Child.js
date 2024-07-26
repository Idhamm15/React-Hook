import React, { useContext } from 'react'
import { namaContext } from '../App';

const Child = () => {
    const nama = useContext(namaContext)
  return (
    <div>
        <h1>{nama.firstname} - {nama.lastname}</h1>
    </div>
  )
}

export default Child;
