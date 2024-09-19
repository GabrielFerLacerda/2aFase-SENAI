import React, { useState } from 'react';
import './Container.css'; // Certifique-se de importar o CSS

function Atividade01_vendaValor() {
  const [resultado, setResultado] = useState('');

  function vendas() {
    const produto = Number(prompt("Digite o valor do produto."));

    let valorVenda;
    if (produto < 20.00) {
      valorVenda = produto * 1.45; // 45% de lucro
    } else {
      valorVenda = produto * 1.30; // 30% de lucro
    }

    setResultado(`O valor de venda deve ser: R$${valorVenda.toFixed(2)}`);
  }

  return (
    <div className='notaValor'>
      <h3>Calculadora de Venda</h3>
      <button onClick={vendas}>Calcular valor</button>
      <p>Resultado: {resultado}</p>
    </div>
  );
}

export default Atividade01_vendaValor;
