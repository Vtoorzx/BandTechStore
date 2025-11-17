import React from "react";
import './lupaPesquisa.css';
const LupaPesquisa = ({onSearch}) => {
    const handleInputChange = (event) =>{
        const searchItem = event.target.value.toLawerCase();
        onSearch(searchItem);
    }

    return(
        <div className="search-div">
            <input
                type="text"
                placeholder="🔍 Pesquisar produtos"
                onChange={handleInputChange}
                className="Lupa-input"
            />
        </div>
    );
}

export default LupaPesquisa;