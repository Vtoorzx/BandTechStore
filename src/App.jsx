import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AcessorioCelular from './Pages/AcessoriosCelular.jsx';
import AcessorioGeek from './Pages/AcessoriosGeek.jsx';
import AcessoriosInformatica from './Pages/AcessoriosInfomatica.jsx';
import Robotica from './Pages/Robotica.jsx';
import ModaGeek from './Pages/ModaGeek.jsx';
import CreativeLab from './Pages/CreativeLab.jsx';
import PropriaCamisa from './Pages/PropriaCamisa.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/Home' element={<Home/>}/>
        <Route path='/AcessorioCelular' element={<AcessorioCelular/>}/>
        <Route path='/AcessorioGeek' element={<AcessorioGeek/>}/>
        <Route path='/AcessoriosInformatica' element={<AcessoriosInformatica/>}/>
        <Route path='/Robotica' element={<AcessoriosInformatica/>}/>
        <Route path='/ModaGeek' element={<ModaGeek/>}/>
        <Route path='CreativeLab' element={<CreativeLab/>}/>
        <Route path='PropriaCamisa' element={<PropriaCamisa/>}/>
        <Route path="/" element={<Home />} /> 

      </Routes>
    </BrowserRouter>
  );
}


