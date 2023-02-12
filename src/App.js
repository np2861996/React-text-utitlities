import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,  {  useState } from "react";
//import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () =>{

    if(mode === 'light'){

      setMode('dark');
      document.body.style.backgroundColor = '#1d2a35';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }

  return (
   <>
       
   <Navbar title='Text Utilities' aboutText='About Text Utilities' mode={mode} toggleMode={toggleMode} />
   <div className="container">
        <TextForm heading="Enter The Text" mode={mode} />
   </div>

    {/* <div className="container" >
      <About />
  </div>*/}
   </>
  );
}

export default App;
