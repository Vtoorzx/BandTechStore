import "./cardsHome.css";
import { FaShoppingBag } from "react-icons/fa";
import { MdBolt } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";




export default function CardsHome(){
    return(
        <footer className="footerCards">

            <div className="divCards1">
                <FaShoppingBag size={25} color="#1e90ff"/>
                <h4>Variedade</h4>
                <p>Diversos produtos</p>
            </div>

            <div className="divCards2">
                <MdBolt size={30} color="#1e90ff"/>
                <h4>Rápidez</h4>
                <p>Atendimento ágil</p>
            </div>

            <div className="divCards3">
                <FaShieldAlt size={30} color="#1e90ff" />
                <h4>Segurança</h4>
                <p>Compra garantida</p>
            </div>

            <div className="divCards4">
                <FaTruck size={30} color="#1e90ff"/>
                <h4>Entrega</h4>
                <p>Enviamos para você</p>
                
            </div>
  
        </footer>
    );
        
}