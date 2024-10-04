import React, { useState } from 'react';

function Atividade01_multa() {
  const [dias, setDias] = useState('');
  const [valorTotal, setValorTotal] = useState(null);

  const calcularValor = () => {
    if (dias === '' || isNaN(dias)) {
      alert('Por favor, insira um número válido de dias.');
      return;
    }

    const diasNum = Number(dias);
    let valorDiaria;

    // Define o valor da diária com base no número de dias
    if (diasNum <= 5) {
      valorDiaria = 100;
    } else if (diasNum <= 10) {
      valorDiaria = 90;
    } else {
      valorDiaria = 80;
    }

    const valorBruto = valorDiaria * diasNum;
    
    // Aplicando os descontos
    const descontoEmocional = valorBruto * 0.10; // 10%
    const valorComDescontoEmocional = valorBruto - descontoEmocional;

    const descontoAssociacao = valorComDescontoEmocional * 0.15; // 15%
    const valorComDescontoAssociacao = valorComDescontoEmocional - descontoAssociacao;

    // Adicionando a multa
    const multa = 150;
    const valorFinal = valorComDescontoAssociacao + multa;

    setValorTotal(valorFinal);
  };

  return (
    <div>
      <h2>Cálculo da Conta do Mano Juca</h2>
      <input
        type="number"
        value={dias}
        onChange={(e) => setDias(e.target.value)} // Mantém o valor como string
        placeholder="Número de dias"
      />
      <button onClick={calcularValor}>Calcular</button>
      
      {valorTotal !== null && (
        <div>
          <h3>Valor Final da Conta: R$ {valorTotal.toFixed(2)}</h3>
          <p>Composição:</p>
          <ul>
            <li>Valor bruto: R$ {(valorDiaria * Number(dias)).toFixed(2)}</li>
            <li>Desconto emocional (10%): R$ {((valorDiaria * Number(dias)) * 0.10).toFixed(2)}</li>
            <li>Valor após desconto emocional: R$ {((valorDiaria * Number(dias)) - ((valorDiaria * Number(dias)) * 0.10)).toFixed(2)}</li>
            <li>Desconto associação (15%): R$ {(((valorDiaria * Number(dias)) - ((valorDiaria * Number(dias)) * 0.10)) * 0.15).toFixed(2)}</li>
            <li>Valor após desconto associação: R$ {(((valorDiaria * Number(dias)) - ((valorDiaria * Number(dias)) * 0.10)) - (((valorDiaria * Number(dias)) - ((valorDiaria * Number(dias)) * 0.10)) * 0.15)).toFixed(2)}</li>
            <li>Multa: R$ 150.00</li>
            <li>Valor final: R$ {valorTotal.toFixed(2)}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Atividade01_multa;
