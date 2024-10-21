import React from 'react'
import './home_mercado.css'

function HomeMercados() {
  return (
    <div id="container_home">
      <div className="TituloHome">
        <h1 className="titulo">SuperMercados</h1>
          <div className='sub-titulo'>
              <p className="visitas-mercado" >Visitados recentementes</p>
              <p className='ver-mais'>Ver mais</p>
          </div>
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
