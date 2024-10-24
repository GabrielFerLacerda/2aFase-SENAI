import React from 'react';
import './home_mercado.css';

const mercadosVisitados = [
  { nome: 'Big by Carrefour', distancia: '5.6 km', tempo: '146-156 min', img: 'image1.png' },
  { nome: 'Nome do Mercado 2', distancia: '3.2 km', tempo: '120-130 min', img: 'image2.avif' },
  { nome: 'Nome do Mercado 3', distancia: '4.0 km', tempo: '130-140 min', img: 'image3.avif' },
  { nome: 'Nome do Mercado 4', distancia: '6.1 km', tempo: '150-160 min', img: 'image4.jpg' },
  { nome: 'Nome do Mercado 5', distancia: '2.0 km', tempo: '140-150 min', img: 'image5.avif' },
  { nome: 'Nome do Mercado 6', distancia: '4.5 km', tempo: '160-170 min', img: 'image6.avif' },
];

function HomeMercados() {
  const slidesVisitados = [];
  const slidesPerto = [];

  for (let i = 0; i < mercadosVisitados.length; i += 3) {
    slidesVisitados.push(mercadosVisitados.slice(i, i + 3));
    slidesPerto.push(mercadosVisitados.slice(i, i + 3)); // Aqui você pode alterar os dados se quiser diferentes
  }

  return (
    <div id="container_home" className="container mt-5">
      <div className="TituloHome text-start">
        <h1 className="titulo">SuperMercados</h1>
        <div className='sub-titulo'>
          <p className="visitas-mercado">Visitados Recentemente</p>
        </div>
      </div>

      {/* Carousel de mercados visitados */}
      <div id="carouselVisitados" className="carousel slide" data-bs-ride="false" data-bs-wrap="false">
        <div className="carousel-inner">
          {slidesVisitados.map((slide, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="row">
                {slide.map((mercado, idx) => (
                  <div className="col-md-4" key={idx}>
                    <div className="cardMercado">
                      <div className='cardContent'>
                        <div className="imagemCard">
                          <img src={mercado.img} alt={`Mercado ${idx + 1}`} />
                        </div>
                        <div className="info-mercado">
                          <p className="nome-mercado">{mercado.nome}</p>
                          <p className="detalhes-mercado">{mercado.distancia} • {mercado.tempo}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <button className="btn-custom carousel-control-prev" type="button" data-bs-target="#carouselVisitados" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="btn-custom carousel-control-next" type="button" data-bs-target="#carouselVisitados" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      <div className='sub-titulo2'>
        <p>Perto de você</p>
      </div>

      {/* Carousel de mercados perto de você */}
      <div id="carouselPerto" className="carousel slide" data-bs-ride="false" data-bs-wrap="false">
        <div className="carousel-inner">
          {slidesPerto.map((slide, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="row">
                {slide.map((mercado, idx) => (
                  <div className="col-md-4" key={idx}>
                    <div className="cardMercado">
                      <div className='cardContent'>
                        <div className="imagemCard">
                          <img src={mercado.img} alt={`Mercado ${idx + 1}`} />
                        </div>
                        <div className="info-mercado">
                          <p className="nome-mercado">{mercado.nome}</p>
                          <p className="detalhes-mercado">{mercado.distancia} • {mercado.tempo}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <button className="btn-custom carousel-control-prev" type="button" data-bs-target="#carouselPerto" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="btn-custom carousel-control-next" type="button" data-bs-target="#carouselPerto" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      <div id="carouselPerto2" className="carousel slide" data-bs-ride="false" data-bs-wrap="false">
        <div className="carousel-inner">
          {slidesPerto.map((slide, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="row">
                {slide.map((mercado, idx) => (
                  <div className="col-md-4" key={idx}>
                    <div className="cardMercado">
                      <div className='cardContent'>
                        <div className="imagemCard">
                          <img src={mercado.img} alt={`Mercado ${idx + 1}`} />
                        </div>
                        <div className="info-mercado">
                          <p className="nome-mercado">{mercado.nome}</p>
                          <p className="detalhes-mercado">{mercado.distancia} • {mercado.tempo}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <button className="btn-custom carousel-control-prev" type="button" data-bs-target="#carouselPerto2" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="btn-custom carousel-control-next" type="button" data-bs-target="#carouselPerto2" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>



    </div>
  );
}

export default HomeMercados;
