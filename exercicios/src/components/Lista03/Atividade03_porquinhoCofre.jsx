// 5.25 - O porco: Faça um programa que leia o valor de um produto X e leia 
// a quantidade de moedas de um cofrinho que contenha: 
//  N moedas de 1 real; 
//  N moedas de 50 centavos; 
//  N moedas de 25 centavos; 
//  N moedas de 10 centavos; 
//  N moedas de 5 centavos; 
// O programa deverá verificar se o total de reais que contem no cofrinho é 
// o bastante para compra o produto X. 
// <Muleta da compreensão: Tem que ler o preço da coisa; tem que ler a 
// quantidade de cada moeda que tem no porco; calcular quantos pila tem no 
// porco; ver se cabe no “orçamento”>


import React, { useState } from 'react'

function Atividade03_porquinhoCofre() {
  const [resultado, setResultado] = useState('')

  function verificarCofrinho() {
    // Entrada de dados
    const produtoX = parseFloat(prompt("Digite o valor do produto: R$"))
    const moedas1 = parseInt(prompt("Quantidade de moedas de 1 real:"))
    const moedas50 = parseInt(prompt("Quantidade de moedas de 50 centavos:"))
    const moedas25 = parseInt(prompt("Quantidade de moedas de 25 centavos:"))
    const moedas10 = parseInt(prompt("Quantidade de moedas de 10 centavos:"))
    const moedas5 = parseInt(prompt("Quantidade de moedas de 5 centavos:"))

    // Cálculo do total no cofre
    const total = (moedas1 * 1) +
                  (moedas50 * 0.50) +
                  (moedas25 * 0.25) +
                  (moedas10 * 0.10) +
                  (moedas5 * 0.05);

    // Verifica se o total é suficiente
    if (total >= produtoX) {
      setResultado(`Você tem R$${total.toFixed(2)}. É suficiente para comprar o produto que custa R$${produtoX.toFixed(2)}.`);
    } else {
      setResultado(`Você tem R$${total.toFixed(2)}. Não é suficiente para comprar o produto que custa R$${produtoX.toFixed(2)}.`);
    }
  }

  return (
    <div className='porquinhoCofre'>
      <h3>Verifique seu Cofrinho</h3>
      <button onClick={verificarCofrinho}>Verificar</button>
      <p>Resultado: {resultado}</p>
    </div>
  );
}

export default Atividade03_porquinhoCofre;
