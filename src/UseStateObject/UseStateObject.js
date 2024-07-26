import React, {useState} from 'react'

function UseStateObject() {
    const [pesan, setPesan] = useState({pesan1 : "Saya belum belajar ReactJS", pesan2: "Saya belum belajar Javascript"})

    function updatePesan1(){
        setPesan({...pesan, pesan1: "Saya sudah belajar ReactJS"});
        console.log(pesan);
    }

    function updatePesan2(){
        setPesan({...pesan, pesan2: "Saya sudah belajar Javascript"});
        console.log(pesan);
    }
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>{pesan.pesan1}</h1>
        <h1 style={{textAlign: 'center'}}>{pesan.pesan2}</h1>
        <div style={{textAlign: 'center'}}>
            <button onClick={updatePesan1}>Update Pesan 1</button>
            {' '}
            <button onClick={updatePesan2}>Update Pesan 2</button>
        </div>
    </div>
  )
}

export default UseStateObject