import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// let name = "Aditya";
function App() {
  return (
    <>
    <Navbar aboutText="About"/>
    <div className="container my-3">
      <TextForm heading="Enter the text to anaylyze below"/> 
    </div>
    {/* <Navbar title="Library" aboutText="About Library"/> */}
    </>
  );
}

export default App;
