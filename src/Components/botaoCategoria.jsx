import "./botaoCategoria.css";
import { Link } from 'react-router-dom';

export default function BotaoCategoria(){
    const botoes = [
        
        {nome: 'Acessorios para celular', path: '/AcessorioCelular'},
    ];

    
    const rotaAcessorios = botoes[0].path;
    const nomeAcessorios = botoes[0].nome;
    
    return(
        <div className="sectionBotao">
           
            <Link
                to={rotaAcessorios} 
                className="botao1"
            >
                {nomeAcessorios} 
            </Link>
        
            
        <button type="submit" className="botao2">Acessório para informática</button>
        <button type="submit" className="botao3">Robótica</button>
        <button type="submit" className="botao4">Moda geek</button>
        <button type="submit" className="botao5">Produts geek</button>
        <button type="submit" className="botao6">Creative Lab 3D</button>
        <button type="submit" className="botao7">Crie sua própria camisa</button>
        </div>
    );
}
