import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode enable or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#00008B';
      document.title = "textutils - Dark mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "textutils - light mode";
    }
  }
  return (
    <>
        <Navbar tittle="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}
        <Alert />
        <div>
          <TextForm heading="enter the text to analyze below" mode={mode} />    
          {/* <About/>  */}
        </div>
    </>
  );
}
export default App;
