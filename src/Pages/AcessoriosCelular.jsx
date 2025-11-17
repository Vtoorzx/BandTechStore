import React, { useState } from "react";
import LupaPesquisa from "../Components/lupaPesquisa";
import "./AcessoriosCelular.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Carrinho from "../Components/carrinho";
import CardCatalogo from "../Components/cardCatalogo";


const productsData = [
  { id: 1, name: "capa", price: 45.0 },
  { id: 2, name: "pelicula", price: 30.0 },
  { id: 3, name: "fone de ouvido", price: 20.0 },
];

const AcessorioCelular = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <header className="container-header">
        <div className="div-logo">
          <img src={logo} alt="logo-header" className="logo-header" />
        </div>
      </header>

      <footer className="container-footer">
        <div className="div-footer">

            <div className="div-botao-voltar">
                <button className="botao-voltar" onClick={handleGoBack}>
                voltar
                </button>
                <div className="div-texto-acessorios">
                <p className="texto-acessorios">Acessórios para celular</p>
            </div>
            </div>

            

          <main className="content-products">
            
            {/* Campo de Pesquisa */}
            <LupaPesquisa onSearch={handleFilter} />

            {/* Carrinho aparece aqui */}
            <Carrinho className="carrinho" />

            {/* Lista de Produtos filtrados */}
            <div className="product-list-grid">
              {filteredProducts.length === 0 && searchTerm !== "" && (
                <p>
                  Nenhum acessório encontrado com o termo "{searchTerm}".
                </p>
              )}
            </div>

          </main>

        </div>
      </footer>

      <section>
        <div className="card-catalogo">
          <CardCatalogo/>
        </div>
      </section>
    </>

    
  );
};

export default AcessorioCelular;
