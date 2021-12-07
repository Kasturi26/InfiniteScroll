import './App.css';
import Login from './Login.js';
import Home from './Home';
import { useState } from 'react';



function App() {
  const[isLogin,setLogin] =useState(false);

  const funcLogin =login=>{
    console.log(login);
    setLogin(login);
  }
  return (
    <div className="App">
    {  isLogin ? <Home/> : <Login funcLogin={funcLogin}/>}
    </div>
  );
}

export default App;
