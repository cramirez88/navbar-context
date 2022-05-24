// Creating a context object
import MyContext from './context/MyContext';
import NavBar from './components/NavBar'
import React, {useState} from 'react';

// Context.Provider is how we provide the context info from our context to the child
// useContext is how we access our context in components

function App() {
const [name, setName] = useState('Bob Smith')
  return (
    <MyContext.Provider value={{name, setName}}>
       <NavBar />
    </MyContext.Provider>
   
  );
}

export default App;
