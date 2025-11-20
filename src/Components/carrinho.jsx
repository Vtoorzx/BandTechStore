
import React, { useState } from 'react';
import './carrinho.css'; 


const Carrinho = ({ selectedItems = [], onRemoveItem, onDecreaseQuantity, onAddProduct }) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState('carrinho');'payment'
    
    
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        telefone: '',
        endereco: '', 
        formaEntrega: 'retirada', 
        observacoes: '',
        formaPagamento: 'pix' 
    });

    const toggleSidebar = () => {
        setIsOpen(prevIsOpen => {
            if (prevIsOpen) {
                
                setStep('carrinho'); 
            }
            return !prevIsOpen;
        });
    };

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleGoToCheckout = () => {
        if (selectedItems.length > 0) {
            setStep('checkout');
        }
    };
    
    const handleGoToPayment = (e) => {
        e.preventDefault(); 
        
        if (formData.nome && formData.telefone) {
             setStep('payment');
        } else {
             alert('Por favor, preencha seu Nome e Telefone para continuar.');
        }
    };

    const handleGoBackToCart = () => {
        setStep('carrinho');
    };
    
    const handleGoBackToCheckout = () => {
        setStep('checkout');
    };
    
  
    const handleSendOrderViaWhatsApp = () => {
       
        const pedidoDetalhes = itemsToDisplay.map(item => 
            `- ${item.name} (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`
        ).join('\n');

        
        const messageBody = `



Nome: ${formData.nome} ${formData.sobrenome}
Telefone: ${formData.telefone}


${pedidoDetalhes}
Total Geral: R$ ${totalFormated}


Forma de Entrega: ${formData.formaEntrega === 'retirada' ? 'Retirada no Local' : 'Entrega a Domicílio'}
Endereço: ${formData.endereco || 'Não informado (Retirada)'}
Observações: ${formData.observacoes || 'Nenhuma'}
Forma de Pagamento: ${formData.formaPagamento.toUpperCase()}


`.trim();

        
        const whatsappNumber = '5581920014196'; 
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageBody)}`;

        window.open(whatsappLink, '_blank');
        
         
    };


    const itemsToDisplay = selectedItems;
    const totalQuantity = itemsToDisplay.reduce((acc, item) => acc + item.quantity, 0);
    const total = itemsToDisplay.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const totalFormated = total.toFixed(2).replace('.', ',');


    
    const renderSidebarContent = () => {
        if (step === 'carrinho') {
            
            return (
                <>
                    <header className="sidebar-header">
                        <h2>🛒 Seu Carrinho</h2>
                        <button onClick={toggleSidebar} className="close-button">
                            &times;
                        </button>
                    </header>
                    
                    <div className="sidebar-content">
                        {itemsToDisplay.length === 0 ? (
                            <p>Seu carrinho está vazio.</p>
                        ) : (
                            <ul className="item-list">
                                {itemsToDisplay.map(item => (
                                    <li key={item.id} className="item-card">
                                        <div className="item-details-container">
                                            <span className="item-name">{item.name}</span>
                                            <div className="item-quantity-control">
                                                <button 
                                                    onClick={() => onDecreaseQuantity(item.id)}
                                                    className="btn-carrinho-control minus"
                                                >
                                                    -
                                                </button>
                                                <span className="item-quantity">{item.quantity}</span>
                                                <button 
                                                    onClick={() => onAddProduct(item.id, 1)} 
                                                    className="btn-carrinho-control plus"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="item-price-and-remove">
                                            <span className="item-price">
                                                R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                                            </span>
                                            <button 
                                                onClick={() => onRemoveItem(item.id)}
                                                className="btn-carrinho-control remove"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="sidebar-footer">
                        <div className="total-info">
                            <span>Total:</span>
                            <span className="total-value">R$ {totalFormated}</span>
                        </div>
                        
                        <button 
                            className="btn-finalizar-compra"
                            disabled={itemsToDisplay.length === 0}
                            onClick={handleGoToCheckout} 
                        >
                            Finalizar Compra
                        </button>
                    </div>
                </>
            );
        } 
        
        else if (step === 'checkout') {
            return (
                
                <form onSubmit={handleGoToPayment}> 
                    <header className="sidebar-header">
                        <button type="button" onClick={handleGoBackToCart} className="back-button">
                            &larr; Voltar
                        </button>
                        <h2>Detalhes da Entrega</h2>
                        <button type="button" onClick={toggleSidebar} className="close-button">
                            &times;
                        </button>
                    </header>
                    
                    <div className="sidebar-content checkout-details">
                        
                        <h3>👤 Seus Dados</h3>
                        <div className="form-group">
                            <label htmlFor="nome">Nome *</label>
                            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sobrenome">Sobrenome</label>
                            <input type="text" id="sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone (DDD) *</label>
                            <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleInputChange} required />
                        </div>

                        <h3>🚚 Forma de Entrega</h3>
                        <div className="delivery-options">
                            <label>
                                <input type="radio" name="formaEntrega" value="retirada" checked={formData.formaEntrega === 'retirada'} onChange={handleInputChange} />
                                Retirada no Local (Grátis)
                            </label>
                            <label>
                                <input type="radio" name="formaEntrega" value="entrega" checked={formData.formaEntrega === 'entrega'} onChange={handleInputChange} />
                                Entrega a Domicílio
                            </label>
                        </div>
                        
                        {formData.formaEntrega === 'entrega' && (
                            <div className="form-group">
                                <label htmlFor="endereco">Endereço Completo *</label>
                                <input type="text" id="endereco" name="endereco" value={formData.endereco} onChange={handleInputChange} required={formData.formaEntrega === 'entrega'} />
                            </div>
                        )}

                        <h3>📝 Observações</h3>
                        <textarea 
                            name="observacoes"
                            value={formData.observacoes}
                            onChange={handleInputChange}
                            placeholder="Ex: Deixar na portaria, ligar antes de entregar..." 
                            rows="3"
                        ></textarea>
                        
                        <h3>📦 Resumo do Pedido</h3>
                        <div className="order-summary-box">
                            <p>Total de Itens: {totalQuantity}</p>
                            <p>Valor dos Produtos: R$ {totalFormated}</p>
                        </div>
                    </div>

                    <div className="sidebar-footer">
                        <div className="total-info">
                            <span>Valor a Pagar:</span>
                            <span className="total-value">R$ {totalFormated}</span> 
                        </div>
                        
                        <button 
                            type="submit" o formulário
                            className="btn-finalizar-compra"
                        >
                            Continuar →
                        </button>
                    </div>
                </form>
            );
        }
        
        else if (step === 'payment') {
            return (
                
                <>
                    <header className="sidebar-header">
                        <button onClick={handleGoBackToCheckout} className="back-button">
                            &larr; Voltar
                        </button>
                        <h2>Pagamento e Confirmação</h2>
                        <button onClick={toggleSidebar} className="close-button">
                            &times;
                        </button>
                    </header>
                    
                    <div className="sidebar-content checkout-details">
                        
                        <h3>💰 Forma de Pagamento</h3>
                        <div className="payment-options">
                            <label>
                                <input type="radio" name="formaPagamento" value="pix" checked={formData.formaPagamento === 'pix'} onChange={handleInputChange} />
                                PIX
                            </label>
                            <label>
                                <input type="radio" name="formaPagamento" value="dinheiro" checked={formData.formaPagamento === 'dinheiro'} onChange={handleInputChange} />
                                Dinheiro (Levar troco para R$ X)
                            </label>
                            <label>
                                <input type="radio" name="formaPagamento" value="cartao" checked={formData.formaPagamento === 'cartao'} onChange={handleInputChange} />
                                Cartão (Crédito/Débito)
                            </label>
                        </div>

                        <h3>✨ Resumo Final</h3>
                        <div className="order-summary-box">
                            <p>Cliente: {formData.nome}</p>
                            <p>Entrega: {formData.formaEntrega === 'retirada' ? 'Retirada' : 'Entrega'}</p>
                            <p>Pagamento: {formData.formaPagamento.toUpperCase()}</p>
                            <p>Total de Itens: {totalQuantity}</p>
                        </div>
                    </div>

                    <div className="sidebar-footer">
                        <div className="total-info">
                            <span>Total Final:</span>
                            <span className="total-value">R$ {totalFormated}</span>
                        </div>
                        
                        <button 
                            className="btn-finalizar-compra whatsapp-button"
                            onClick={handleSendOrderViaWhatsApp} 
                        >
                            Enviar Pedido via WhatsApp 💬
                        </button>
                    </div>
                </>
            );
        }
    };


    return (
        <div className="carrinho-main-container">
            <button 
                onClick={toggleSidebar} 
                className="carrinho-toggle-button"
            >
                🛒 Carrinho ({totalQuantity}) 
            </button>
            
            {isOpen && (
                <div 
                    className="sidebar-overlay" 
                    onClick={toggleSidebar} 
                ></div>
            )}
            
            <div className={`carrinho-sidebar ${isOpen ? 'open' : ''}`}>
                {renderSidebarContent()} 
            </div>
        </div>
    );
};

export default Carrinho;