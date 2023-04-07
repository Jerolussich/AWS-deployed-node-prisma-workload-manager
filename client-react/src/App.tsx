import React, {useEffect, useState} from 'react'

import HoursworkedTable from './components/HoursworkedTable'
import Navbar from './components/Navbar'
import './App.css';
import Login from './components/Login';
import Register from './components/Register';


function App() {

  const [currentForm, setCurrentForm] = useState("login");

  const toggleform = (formName :any) => {
    setCurrentForm(formName);
  }
  
  return (
    <>
      <Navbar/>
      <h1>Welcome</h1>
    </>
  )
}

export default App
