// import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/Text';
import {Routes, Route} from "react-router-dom"

function App() {

  // const [mode, setMode] = useState('light');

  // const toggleMode = () => {
  //   if(mode === 'light')
  //   {
  //     setMode('dark');
  //   }
  //   else
  //   {
  //     setMode('light');
  //   }
  // }

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Text/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
   </>
  );
}

export default App;
