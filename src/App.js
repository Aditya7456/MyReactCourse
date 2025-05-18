import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// let name = "Aditya";
function App() {
  return (
    <>
    <Navbar aboutText="About"/>
    <div className="container my-3">
      <TextForm heading="Enter the text to anaylyze below"/> 
      {/* <About/> */}
    </div>
    {/* <Navbar title="Library" aboutText="About Library"/> */}
    </>
  );
}

export default App;
