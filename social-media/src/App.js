import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Agendamento from './Components/Agendamento';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="agendamento" element={<Agendamento />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
