import logo from '../assets/logo.png';
import QuadradoLogo from '../Components/QuadradoLogo/QuadradoLogo';
import Carrossel from '../Components/Carrossel';
import './Home.css';
import Caixa from '../Components/caixaBoasCompras';
import BotaoCategoria from '../Components/botaoCategoria';
import CardsHome from '../Components/cardsHome';

export default function Home() {
    return (
        <section className='home-container'>
            <div className='home-wrapper'>

                {/* QUADRADO + LOGO */}
                <div className='logo-quadrado-wrapper'>
                    <QuadradoLogo />
                    <img src={logo} alt='logo' className='logo' />
                </div>

                {/* TEXTOS */}
                <p className='textLogo'>
                    Seja bem-vindo(a) á loja online!
                </p>

                <p className='textLogo2'>
                    Explore nossa coleção exclusiva de produtos tech, geek e muito mais!
                </p>

                {/* CAIXA */}
                <Caixa />

                {/* CARROSSEL — agora funciona */}
                <Carrossel />

                {/* CATEGORIAS */}
                <section className='sessao-categoria'>
                    <BotaoCategoria />
                </section>

                {/* CARDS */}
                <section className='sessao-cards'>
                    <CardsHome />
                </section>

            </div>
        </section>
    );
}

