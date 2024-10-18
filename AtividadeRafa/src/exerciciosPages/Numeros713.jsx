import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function Numeros713() {
  const [limiteInferior, setLimiteInferior] = useState('')
  const [limiteSuperior, setLimiteSuperior] = useState('')
  const [pares, setPares] = useState([])

  function calcularPares() {
    const lower = Number(limiteInferior)
    const upper = Number(limiteSuperior)

    // Verifica se os limites são válidos
    if (limiteInferior === '' || limiteSuperior === '' || lower >= upper) {
      setPares([])
      return
    }

    const numerosPares = []
    
    for (let i = lower + 1; i < upper; i++) {
      if (i % 2 === 0) {
        numerosPares.push(i)
      }
    }

    setPares(numerosPares)
  }

  return (
    <div>
      <Navbar />
      <h1>Exercicio 7.13</h1>
      <p>Digite dois limites para mostrar os números pares contidos entre eles.</p>
      <input
        type="number"
        value={limiteInferior}
        onChange={(event) => setLimiteInferior(event.target.value)}
        placeholder="Limite inferior"
      />
      <input
        type="number"
        value={limiteSuperior}
        onChange={(event) => setLimiteSuperior(event.target.value)}
        placeholder="Limite superior"
      />
      <button onClick={calcularPares}>Calcular Números Pares</button>
      <div>
        {pares.length > 0 && <p>Números pares: {pares.join(', ')}</p>}
      </div>
    </div>
  )
}

export default Numeros713;
