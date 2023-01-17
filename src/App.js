
import './App.css';
import CounterFunction from './Components/CounterFunction';
import Counterclass from './Components/Counterclass';
import User from './Components/User'
import Employee from './Components/Employee'
import { useState } from 'react';

function App() {
const [username,Setusername]=useState('Sajad')
const [age,Setage]=useState('21')
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} className="App">
      <header className="App-header">
        <CounterFunction />
        <Counterclass />
        <User username={username} age={age}/>
        <Employee />
      </header>
    </div>
  );
  }


export default App;
