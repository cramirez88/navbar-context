import React, { useContext} from 'react'
import MyContext from '../context/MyContext'


const NavBar = () => {
  const {name} = useContext(MyContext)
  return (
    <div style={{backgroundColor: 'lightblue', height: '20px', textAlign: 'end', paddingRight: '10px'}}>
      Hi {name}!
    </div>
  )
}

export default NavBar
