import logo from '../assets/logo.png';
import QuadradoLogo from '../Components/QuadradoLogo/QuadradoLogo';
import Carrossel from '../Components/Carrossel';
import './Home.css';
import Caixa from '../Components/caixaBoasCompras';
import BotaoCategoria from '../Components/botaoCategoria';
import CardsHome from '../Components/cardsHome';
import { Navigate } from 'react-router-dom';

export default function Home() {
    
    return (
        
        <section className='home-container'>
            <div className='home-wrapper'>

                
                <div className='logo-quadrado-wrapper'>
                    <QuadradoLogo />
                    <img src={logo} alt='logo' className='logo' />
                </div>

                
                <p className='textLogo'>
                    Seja bem-vindo(a) á loja online!
                </p>

                <p className='textLogo2'>
                    Explore nossa coleção exclusiva de produtos tech, geek e muito mais!
                </p>

               
                <Caixa />

                
                <Carrossel />

                
                <section className='sessao-categoria'>
                    <BotaoCategoria />
                </section>

                
                <section className='sessao-cards'>
                    <CardsHome />
                </section>

            </div>
        </section>
    );
}

