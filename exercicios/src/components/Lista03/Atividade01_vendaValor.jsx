// Um comerciante comprou um produto e quer vendê-lo com lucro de 
// 45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
// será de 30%. Faça um programa que entre com o valor do produto e mostre 
// o valor de venda.





import React from 'react'
const [resultado, setResultado] = useState('')

function Atividade01_vendaValor() {

  let valoVendaTrinta
  let valorVendaQuarenta
  let produto

    function vendas() {
      
      produto = Number(prompt("Digite o valor do produto."))
      
    }

    
    

    


  return (
    <div>
      <h2>Comercio</h2>
      <button onClick={vendas}>Fazer comparação para venda.</button>

    </div>
  )
}

export default Atividade01_vendaValor
