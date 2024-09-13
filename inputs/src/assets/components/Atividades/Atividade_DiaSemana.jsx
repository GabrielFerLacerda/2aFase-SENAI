import React, { useState } from 'react'

function Atividade_DiaSemana() {
  const [numero, setNumero] = useState('')
  const [resultado, setResultado] = useState('')

  function diaSemana() {
    const num = parseInt(numero, 10)
    
    // Verifica se o número está no intervalo válido
    if (num >= 1 && num <= 7) {
      let dia = ''
      switch (num) {
        case 1:
          dia = 'Domingo'
          break;
        case 2:
          dia = 'Segunda-feira'
          break;
        case 3:
          dia = 'Terça-feira'
          break;
        case 4:
          dia = 'Quarta-feira'
          break;
        case 5:
          dia = 'Quinta-feira'
          break;
        case 6:
          dia = 'Sexta-feira'
          break;
        case 7:
          dia = 'Sábado'
          break;
        default:
          dia = 'Número inválido! Insira um número entre 1 e 7.'
          break;
      }
      setResultado(dia)
    } else {
      setResultado('Número inválido! Insira um número entre 1 e 7.')
    }
  }

  return (
    <div>
      <h3>Veja o dia da semana</h3>
      <input 
        type="number"
        value={numero}
        onChange={(event) => setNumero(event.target.value)}
        min="1"
        max="7"
      />
      <button onClick={diaSemana}>Processar dia da semana</button>
      {resultado && <p>{resultado}</p>}
    </div>
  )
}

export default Atividade_DiaSemana
