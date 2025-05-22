import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// let name = "Aditya";
function App() {
  const [mode,setMode] = useState('light'); // state variable which tell the dark mode is enabled or not.
  const [alert,setAlert] = useState(null); // state variable to set the alert message.

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls) =>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-' + cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#052947';
      showAlert("Dark mode enabled successfully!","success");
      setInterval(() => {
        document.title = "Library - Dark Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Library - Light Mode";
      }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor='white ';
      showAlert("Light mode enabled successfully!","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextHelper" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} onClose={() => setAlert(null)}/>
    <div className="container my-3">
      <Routes>
        {/* /user --> component 1
        /user/home --> component 2 */}
        <Route exact path="/about" element={<About mode={mode}/>} />
        <Route exact path="/" element={ <TextForm heading="Try TextHelper - Count Words and Characters, Copy Text, Clear Text" mode={mode} showAlert={showAlert}/>} />  
  
      </Routes> 
    </div>
    {/* <Navbar title="Library" aboutText="About Library"/> */}
    </Router>
    </>
  );
}

export default App;
