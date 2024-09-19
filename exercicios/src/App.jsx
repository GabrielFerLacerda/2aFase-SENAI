import { useState } from 'react'
import './App.css'
import Atividade01_vendaValor from './components/Lista03/Atividade01_vendaValor'
import Atividade02_notasEscola from './components/Lista03/Atividade02_notasEscola'
import Atividade03_porquinhoCofre from './components/Lista03/Atividade03_porquinhoCofre'




function App() {

  const[count, setCount] = useState(0)

  return (
    <div className='App-container'>
    <Atividade01_vendaValor/>
    <Atividade02_notasEscola/>
    <Atividade03_porquinhoCofre/>
    </div>
  )
}

export default App
