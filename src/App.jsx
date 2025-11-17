import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AcessorioCelular from './Pages/AcessoriosCelular.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/Home' element={<Home/>}/>
        <Route path='/AcessorioCelular' element={<AcessorioCelular/>}/>
        <Route path="/" element={<Home />} /> 

      </Routes>
    </BrowserRouter>
  );
}


