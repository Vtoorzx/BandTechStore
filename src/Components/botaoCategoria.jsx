import "./botaoCategoria.css";
import { Link } from 'react-router-dom';

export default function BotaoCategoria() {

    const botoes = [
        { nome: 'Acessorios para celular', path: '/AcessorioCelular' },
        { nome: 'Produtos Geek', path: '/AcessorioGeek' },
        { nome: 'Acessórios para Informática', path: '/AcessoriosInformatica' },
        { nome: 'Robótica', path: '/Robotica' },
        { nome: 'Moda Geek', path: '/ModaGeek' },
        { nome: 'Creative Lab 3D', path: '/CreativeLab' },
        { nome: 'Crie sua própria camisa', path: '/PropriaCamisa' } 
    ];

    return (
        <div className="sectionBotao">

            
            <Link to={botoes[0].path} className="botao1">
                {botoes[0].nome}
            </Link>

           
            <Link to={botoes[2].path} className="botao2">
                {botoes[2].nome}
            </Link>

           
            <Link to={botoes[3].path} className="botao3">
                {botoes[3].nome}
            </Link>

           
            <Link to={botoes[4].path} className="botao4">
                {botoes[4].nome}
            </Link>

            
            <Link to={botoes[1].path} className="botao5">
                {botoes[1].nome}
            </Link>

            
            <Link to={botoes[5].path} className="botao6">
                {botoes[5].nome}
            </Link>

            
            <Link to={botoes[6].path} className="botao7">
                {botoes[6].nome}
            </Link>

        </div>
    );
}
