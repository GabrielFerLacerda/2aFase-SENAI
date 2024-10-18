import React from 'react'
import Navbar from '../componets/Navbar'
import './historia.css'

export default function text() {
  return (
    <div>
    <Navbar />
    <div className="historia-container">
      <div className="historia-content">
        <h1>Nossa História</h1>
        <p>
          A nossa historia se iniciou quando quando uma garota de olhos verdes e 
        </p>
        <p>
          Desde aquele dia, construímos uma relação baseada em amor, respeito e compreensão. Cada dia que passamos juntos foi um novo capítulo da nossa história, cheio de aventuras, desafios e muitos momentos inesquecíveis.
        </p>
        <p>
          Hoje, celebramos tudo o que vivemos até aqui, e olhamos para o futuro com a certeza de que muitos mais momentos incríveis estão por vir.
        </p>
        <p>
          Vamos continuar escrevendo essa história, lado a lado, sempre juntos.
        </p>
      </div>

      <div className="historia-image">
        <img src="path/to/your-image.png" alt="Imagem de nós dois" />
      </div>
    </div>
  </div>
  )
}