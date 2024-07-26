import React, { useState } from 'react'
import { useEffect } from 'react';
import UseFetch from './UseFetch';

const CustomHooks = () => {
    const [data] = UseFetch('https://jsonplaceholder.typicode.com/users')
    // console.log(data);
  return (
    <>
    {
        data && data.map((user) =>  <p key={user.id}>{user.name}</p>)
    }
    </>
  )
}

export default CustomHooks