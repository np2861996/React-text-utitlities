import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,  {  useState } from "react";
import Alert from './components/Alert';
import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = ( message, type ) => {

    setAlert({

      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)

  }

  const toggleMode = () =>{

    if(mode === 'light'){

      setMode('dark');
      document.body.style.backgroundColor = '#1d2a35';
      showAlert("dark Mode","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode","success");
    }

  }

  return (
   <>
    <BrowserRouter>
      <Navbar title='Text Utilities' aboutText='About Text Utilities' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Routes>
          <Route index element={<div className="container"><TextForm showAlert={showAlert} heading="Enter The Text" mode={mode} /></div>} />
          <Route path="/about" element={<div className="container" ><About mode={mode} /></div>} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
