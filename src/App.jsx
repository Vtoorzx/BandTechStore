import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ESTA É A PRIMEIRA PÁGINA */}
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}
