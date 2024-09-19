import React, { useState } from 'react';

function Atividade02_notasEscola() {
  const [resultado, setResultado] = useState('');

  function notas() {
    // Entrada de dados
    const nota1 = Number(prompt("Digite a primeira nota:"));
    const nota2 = Number(prompt("Digite a segunda nota:"));

    // Calculo da média
    const media = (nota1 + nota2) / 2;

    
    let conceito;
    if (media > 9.0 && media <= 10.0) {
      conceito = 'A';
    } else if (media > 7.5 && media <= 9.0) {
      conceito = 'B';
    } else if (media > 6.0 && media <= 7.5) {
      conceito = 'C';
    } else if (media > 4.0 && media <= 6.0) {
      conceito = 'D';
    } else {
      conceito = 'E';
    }

    setResultado(`Notas: ${nota1}, ${nota2}. Média: ${media.toFixed(2)}. Conceito: ${conceito}`);
  }

  return (
    <div className='notasEscola'>
      <h3>Analisar suas notas.</h3>
      <button onClick={notas}>Veja suas possíveis notas</button>
      <p>Resultado: {resultado}</p>
    </div>
  );
}

export default Atividade02_notasEscola;
