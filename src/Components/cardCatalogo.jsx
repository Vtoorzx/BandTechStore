import React, { useState } from "react";
import logo from "../assets/logo.png";
import './cardCatalogo.css';


const CardCatalogo = ({ product, onAddProduct }) => {

    
    const mockProduct = product || {
        id: 'mock-001',
        name: 'Produto Padrão',
        description: 'Capinha protetora', 
        price: 100.00,
        imageUrl: logo, 
        stock: 16,
    };

    const [quantity, setQuantity] = useState(0);

   
    const handleDecreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    };

    const handleIncreaseQuantity = () => {
        
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    
    const handleAddToCart = () => {
        onAddProduct(mockProduct.id, quantity); 
        console.log(`Adicionado ${quantity}x de ${mockProduct.name} ao carrinho.`);
    };
    
    
    return (
        <article className="section-card">
            <div className="container-imagem">
                <div className="card-imagem">
                    
                    <img src={mockProduct.imageUrl} alt={`Imagem de ${mockProduct.name}`} />
                    
                    
                    <div className="info-produto1">
                        <h3 className="nome-produto">{mockProduct.name}</h3>
                        <p className="descricao-produto">
                            
                            {mockProduct.description} 
                        </p>
                    </div>
                </div>
            </div>

            
            <div className="info-produto2">
                
               
                <span className="preco-produto">
                    R$ {mockProduct.price.toFixed(2).replace('.', ',')}
                </span>

                
                <div className="quantidade-selector-container">
                    <button 
                        onClick={handleDecreaseQuantity} 
                        disabled={quantity <= 0}
                        className="btn-quantidade decrease"
                    >
                        -
                    </button>
                    <span className="quantidade-display">
                        {quantity}
                    </span>
                    <button 
                        onClick={handleIncreaseQuantity}
                        className="btn-quantidade increase"
                    >
                        +
                    </button>
                </div>

                
                <button 
                    onClick={handleAddToCart}
                    className="btn-add-carrinho"
                >
                    Levar para o Carrinho
                </button>
                
            </div>
        </article>
    );
};

export default CardCatalogo;