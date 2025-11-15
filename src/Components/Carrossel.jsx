import React, { useState, useEffect } from "react";
import "./Carrossel.css";

const marcas = [
  "/marcas/arduino.png",
  "/marcas/flashforge.png",
  "/marcas/hmaston.png",
  "/marcas/piticas.png",
  "/marcas/reinoinabalavel.png",
];

export default function Carrossel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % marcas.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + marcas.length) % marcas.length);

 
useEffect(() => {
  
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % marcas.length);
  }, 3000);
  return () => clearInterval(interval); 
}, []); 

  return (
    <div className="carrossel-wrapper">
      <button className="carrossel-btn left" onClick={prev}>
        &#8249;
      </button>

      <div className="carrossel-track-container">
        <div
          className="carrossel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {marcas.map((marca, i) => (
            <div className="carrossel-item" key={i}>
              <img src={marca} alt={`Marca ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <button className="carrossel-btn right" onClick={next}>
        &#8250;
      </button>
    </div>
  );
}
