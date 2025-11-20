import React, { useState } from "react";
import LupaPesquisa from "../Components/lupaPesquisa";
import "./AcessoriosCelular.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Carrinho from "../Components/carrinho";
import CardCatalogo from "../Components/cardCatalogo";


const productsData = [
  { id: 1, name: "teste1", price: 45.0, description: "testando.", imageUrl: logo, stock: 10 },
  { id: 2, name: "teste2", price: 30.0, description: "testando.", imageUrl: logo, stock: 20 },
  { id: 3, name: "teste3", price: 20.0, description: "testando.", imageUrl: logo, stock: 5 },
  { id: 4, name: "teste4", price: 80.0, description: "testando.", imageUrl: logo, stock: 12 },
  { id: 5, name: "teste5", price: 80.0, description: "testando.", imageUrl: logo, stock: 8 },
  { id: 6, name: "teste6", price: 80.0, description: "testando.", imageUrl: logo, stock: 25 },
  { id: 7, name: "teste7", price: 80.0, description: "testando.", imageUrl: logo, stock: 11 },
];

const AcessorioCelular = () => {
  const navigate = useNavigate();
  
  const [cartItems, setCartItems] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState("");

  const handleGoBack = () => {
    navigate("/");
  };

  const handleFilter = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  
  const handleAddToCart = (productId, quantity) => {
    const productToAdd = productsData.find(p => p.id === productId);

    if (!productToAdd || quantity <= 0) return;

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...productToAdd, quantity }];
      }
    });
    console.log(`Produto ID ${productId} adicionado ${quantity} vezes ao carrinho!`);
  };

  
  const handleRemoveItem = (productId) => {
      setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  
  const handleDecreaseQuantity = (productId) => {
      setCartItems(prevItems => {
          return prevItems.flatMap(item => {
              if (item.id === productId) {
                  
                  if (item.quantity > 1) {
                      return { ...item, quantity: item.quantity - 1 };
                  } 
                  return []; 
              }
              return item;
          });
      });
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


            <LupaPesquisa onSearch={handleFilter} />


          
            <Carrinho 
                className="carrinho" 
                selectedItems={cartItems} 
                onRemoveItem={handleRemoveItem}
                onDecreaseQuantity={handleDecreaseQuantity}
                onAddProduct={handleAddToCart} 
            />


            <div className="product-list-grid">

              {filteredProducts.map((product) => (
                <CardCatalogo
                  key={product.id}
                  product={{...product, stock: productsData.find(p => p.id === product.id).stock}}
                  onAddProduct={handleAddToCart}
                />
              ))}


              {filteredProducts.length === 0 && searchTerm !== "" && (
                <p className="no-products-message">
                  Nenhum acessório encontrado com o termo "{searchTerm}".
                </p>
              )}
            </div>
          </main>
        </div>
      </footer>
    </>
  );
};

export default AcessorioCelular;