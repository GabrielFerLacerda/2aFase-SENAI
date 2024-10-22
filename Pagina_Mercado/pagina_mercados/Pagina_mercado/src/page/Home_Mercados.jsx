import React from 'react';
import './home_mercado.css';

function HomeMercados() {
  return (
    <div id="container_home" className="container mt-5">
      <div className="TituloHome text-start">
        <h1 className="titulo">SuperMercados</h1>
        <div className='sub-titulo'>
          <p className="visitas-mercado">Visitados Recentemente</p>
        </div>
      </div>

      {/* Carousel de cards */}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="false" data-bs-wrap="false">
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <div className="card cardMercado">
                  <div className='teste'>
                    <div className="imagemCard">
                      <img src="https://img.freepik.com/vector-premium/logotipo-supermercado_23-2148476401.jpg" alt="Mercado 1" />
                    </div>
                    <div className="info-mercado">
                      <p className="nome-mercado">Big by Carrefour</p>
                      <p className="detalhes-mercado">5.6 km • 146-156 min</p>
                    </div>
                  </div>
                  </div>
              </div>

              <div className="col-md-4">
                <div className="card cardMercado">
                  <div className="imagemCard">
                    <img src="https://img.freepik.com/vetores-premium/desenho-de-logotipo-bonito-e-unico-para-empresa-de-comercio-eletronico-e-varejo_1287271-11601.jpg" alt="Mercado 2" />
                  </div>
                  <div className="info-mercado">
                    <p className="nome-mercado">Nome do Mercado 2</p>
                    <p className="detalhes-mercado">3.2 km • 120-130 min</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card cardMercado">
                  <div className="imagemCard">
                    <img src="https://img.freepik.com/vetores-premium/modelo-de-logotipo-de-supermercado-com-carrinho-de-compras_852937-3737.jpg" alt="Mercado 3" />
                  </div>
                  <div className="info-mercado">
                    <p className="nome-mercado">Nome do Mercado 3</p>
                    <p className="detalhes-mercado">4.0 km • 130-140 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card cardMercado">
                  <div className="imagemCard">
                    <img src="https://t.ctcdn.com.br/QRPQ8RohuOwrxtsFfLaBI5tq2QE=/1200x675/smart/i579310.png" alt="Mercado Livre" />
                  </div>
                  <div className="info-mercado">
                    <p className="nome-mercado">Nome do Mercado 4</p>
                    <p className="detalhes-mercado">6.1 km • 150-160 min</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card cardMercado">
                  <div className="imagemCard">
                    <img src="https://img.freepik.com/vetores-gratis/modelo-de-logotipo-de-supermercado-de-carrinho-compras_23-2148470295.jpg?semt=ais_hybrid" alt="Mercado 5" />
                  </div>
                  <div className="info-mercado">
                    <p className="nome-mercado">Nome do Mercado 5</p>
                    <p className="detalhes-mercado">2.0 km • 140-150 min</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card cardMercado">
                  <div className="imagemCard">
                    <img src="https://img.freepik.com/vetores-premium/logotipo-do-supermercado_23-2148476403.jpg" alt="Mercado 6" />
                  </div>
                  <div className="info-mercado">
                    <p className="nome-mercado">Nome do Mercado 6</p>
                    <p className="detalhes-mercado">4.5 km • 160-170 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Botões de navegação */}
        <button className="btn-custom carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="btn-custom carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>

      </div>
    </div>
  );
}

export default HomeMercados;
