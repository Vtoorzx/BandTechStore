import React from "react";
import logo from "../assets/logo.png";
import './cardCatalogo.css';

const cardCatalogo = () =>{
    return(
        <article className="section-card">
            <div className="container-imagem">

            <div className="card-imagem">
                <img src={logo} alt="imagem" />
                <div className="info-produto1">
                    <p className="descricao-produto">Capinha protetor impacto</p>

                    <p className="preco1"> R$ 40,90</p>

                    <p> Quantidade</p>

                    <button>Adicionar ao carrinho</button>

                </div>
            </div>

            <div className="card-imagem2">
                <img src={logo} alt="imagem" />
            </div>
            
            <div className="card-imagem2">
                <img src={logo} alt="imagem" />
            </div>

            <div className="card-imagem2">
                <img src={logo} alt="imagem" />
            </div>

            <div className="card-imagem2">
                <img src={logo} alt="imagem" />
            </div>

            <div className="card-imagem2">
                <img src={logo} alt="imagem" />
            </div>
            </div>           
        </article>
    );
}

export default cardCatalogo;