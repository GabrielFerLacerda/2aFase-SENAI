import React from 'react';
import Navbar from '../componets/Navbar';
import './heroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <Navbar />

      <div className="hero-content">
        <div className="hero-text">
          <p>
            Este site é uma homenagem ao nosso amor, celebrando os dois anos incríveis que passamos juntos. Ao longo desse tempo, construímos uma história repleta de momentos especiais, risadas e aventuras que guardarei para sempre no meu coração. Cada dia ao seu lado me mostrou o verdadeiro significado da felicidade.
          </p>
          <p>
            Quero que você saiba o quanto sou grato por cada instante que compartilhamos. Neste espaço, preparei uma pequena surpresa para expressar todo o meu amor e carinho por você.
          </p>
          <p>
            Estou animado para continuar escrevendo nossa história e enfrentar todos os desafios juntos, sempre de mãos dadas. Vamos celebrar nosso amor e tudo o que está por vir!
          </p>
          <button className="hero-button">Faça a sua viagem agora! E se apaixone mais.</button>
        </div>

        {/* Aqui é a nova seção para a imagem */}
        <div className="hero-image">

        </div>
      </div>
    </div>
  );
}

export default HeroSection;
