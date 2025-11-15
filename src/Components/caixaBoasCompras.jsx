import "./caixaBoasCompras.css";
import { FaShoppingBag } from "react-icons/fa";

export default function Caixa() {
  return (
    <div className="container-caixa">
      <div className="fundoCaixa">
        <FaShoppingBag
          size={25}
          color="#1e90ff"
          style={{ marginRight: "1px",
            
           }}
        />
        <h3 className="textoCaixa">Acesse nossos produtos e boas compras!</h3>
      </div>
    </div>
  );
}