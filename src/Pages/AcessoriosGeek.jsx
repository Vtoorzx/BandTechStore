import React, { useState } from "react";
import LupaPesquisa from "../Components/lupaPesquisa";
import "./AcessoriosGeek.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Carrinho from "../Components/carrinho";
import CardCatalogo from "../Components/cardCatalogo";

import bonecoGoku from "../assets/bonecoGoku.jpeg";
import bonecoMario from "../assets/bonecoMario.jpeg";
import canecaDeadPool from "../assets/CanecaDeadPool.jpeg";
import canecaJason from "../assets/CanecaJason.jpeg";
import canecaNaruto from "../assets/CanecaNaruto.jpeg";
import canecaStarWars from "../assets/CanecaStarWars.jpeg";


const productsData = [
  { id: 1, name: "Boneco do Goku", price: 45.0, description: "Boneco do Goku", imageUrl: bonecoGoku, stock: 10 },
  { id: 2, name: "Boneco do Mario", price: 45.0, description: "Boneco do Mario", imageUrl: bonecoMario, stock: 10 },
  { id: 3, name: "Caneca do DeadPool", price: 45.0, description: "Caneca do DeadPool", imageUrl: canecaDeadPool, stock: 10 },
  { id: 4, name: "Caneca do Jason", price: 45.0, description: "Caneca do Jason", imageUrl: canecaJason, stock: 10 },
  { id: 5, name: "Caneca do Naruto", price: 45.0, description: "Caneca do Naruto", imageUrl: canecaNaruto, stock: 10 },
  { id: 6, name: "Caneca do StarWars", price: 45.0, description: "Caneca do StarWars", imageUrl: canecaStarWars, stock: 10 },
];

const AcessoriosGeek = () => {
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
    const productToAdd = productsData.find((p) => p.id === productId);
    if (!productToAdd || quantity <= 0) return;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...productToAdd, quantity }];
      }
    });
  };

  
  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  
  const handleDecreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.flatMap((item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return [];
        }
        return item;
      })
    );
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

      
      <main className="content-products">
        
        <div className="div-botao-voltar">
          <button className="botao-voltar" onClick={handleGoBack}>
            Voltar
          </button>

          <div className="div-texto-acessorios">
            <p className="texto-acessorios">Acessórios Geek</p>
          </div>
        </div>

        
        <LupaPesquisa onSearch={handleFilter} />

        
        <Carrinho
          selectedItems={cartItems}
          onRemoveItem={handleRemoveItem}
          onDecreaseQuantity={handleDecreaseQuantity}
          onAddProduct={handleAddToCart}
        />

        
        <div className="product-list-grid">
          {filteredProducts.map((product) => (
            <CardCatalogo
              key={product.id}
              product={{ ...product, stock: product.stock }}
              onAddProduct={handleAddToCart}
            />
          ))}

          
          {filteredProducts.length === 0 && searchTerm !== "" && (
            <p className="no-products-message">
              Nenhum produto encontrado para "{searchTerm}".
            </p>
          )}
        </div>
      </main>

      
      <footer className="container-footer">
        <div className="div-footer">
          <p>© 2025 BandTechStore</p>
        </div>
      </footer>
    </>
  );
};

export default AcessoriosGeek;
