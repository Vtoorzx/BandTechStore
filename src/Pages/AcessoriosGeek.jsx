import React from "react";
import "./AcessoriosGeek.css";

// IMPORTS CORRETOS DE ACORDO COM OS NOMES DAS SUAS PASTAS/ARQUIVOS
import bonecoGoku from "../assets/boneco-goku.jpeg";
import bonecoMario from "../assets/boneco-mario.jpeg";
import canecaDeadpool from "../assets/caneca-deadpool.jpeg";
import canecaJason from "../assets/caneca-jason.jpeg";
import canecaNaruto from "../assets/caneca-naruto.jpeg";
import canecaStarwars from "../assets/caneca-starwars.jpeg";
import canecaVikings from "../assets/caneca-vikings.jpeg";

export default function AcessoriosGeek() {
  return (
    <div className="geek-container">

      <h1 className="geek-title">Acessórios Geek</h1>

      <div className="geek-grid">

        {/* GOKU */}
        <div className="geek-item">
          <img src={bonecoGoku} alt="Boneco Goku" />
          <p>Boneco Goku</p>
        </div>

        {/* MARIO */}
        <div className="geek-item">
          <img src={bonecoMario} alt="Boneco Mario" />
          <p>Boneco Mario</p>
        </div>

        {/* CANECA DEADPOOL */}
        <div className="geek-item">
          <img src={canecaDeadpool} alt="Caneca Deadpool" />
          <p>Caneca Deadpool</p>
        </div>

        {/* CANECA JASON */}
        <div className="geek-item">
          <img src={canecaJason} alt="Caneca Jason" />
          <p>Caneca Jason</p>
        </div>

        {/* CANECA NARUTO */}
        <div className="geek-item">
          <img src={canecaNaruto} alt="Caneca Naruto" />
          <p>Caneca Naruto</p>
        </div>

        {/* CANECA STAR WARS */}
        <div className="geek-item">
          <img src={canecaStarwars} alt="Caneca Star Wars" />
          <p>Caneca Star Wars</p>
        </div>

        {/* CANECA VIKINGS */}
        <div className="geek-item">
          <img src={canecaVikings} alt="Caneca Vikings" />
          <p>Caneca Vikings</p>
        </div>

      </div>
    </div>
  );
}
