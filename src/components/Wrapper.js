
import MyContext from '../context/MyContext'
import React, {useState} from 'react';

const Wrapper = () => {
  const [name, setName] = useState('Bob Smith')
  return (
    <MyContext value={{name, setName}}/>
  )
}

