import React from 'react'
import './home_mercado.css'

function HomeMercados() {
  return (
    <div id="container_home">
      <div className="TituloHome">
        <h1 className="titulo">SuperMercados</h1>
        <p className="sub-titulo" >Visitados recentementes</p>
      </div>

      <div id="container_cards">
        <div className="cardMercado">
          <div className="imagemCard">
          </div>
        </div>


      </div>
    </div>
  );
}

export default HomeMercados;
