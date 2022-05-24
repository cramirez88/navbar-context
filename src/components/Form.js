import { useContext } from "react"
import MyContext from "../context/MyContext"



const Form = () => {
  const {name, setName} = useContext(MyContext)
  return (
    <div>
      <label>Your Name</label>
      <input onChange={(e) => {setName(e.target.value)}} value={name}></input>
    </div>
  )
}

export default Form


