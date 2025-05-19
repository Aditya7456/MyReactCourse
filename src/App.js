import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// let name = "Aditya";
function App() {
  const [mode,setMode] = useState('light'); // state variable which tell the dark mode is enabled or not

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
    }else{
      setMode('light');
    }
  }
  return (
    <>
    <Navbar title="Library" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm heading="Enter the text to anaylyze below"/> 
      {/* <About/> */}
    </div>
    {/* <Navbar title="Library" aboutText="About Library"/> */}
    </>
  );
}

export default App;
