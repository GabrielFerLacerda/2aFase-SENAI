import { useState } from 'react'
import './App.css'
import Maior from './assets/components/Maior'
import Menor from './assets/components/Menor'

function App() {
  const [inputIdade, setInputIdade] = useState(0)
  const [maior, setMaior] = useState(false)
  const [menor, setMenor] = useState(false)

    function processarIdade(){
      if(inputIdade >= 18){
        setMaior(true)
        setMenor(false)
        //menor de idade
      }else{
        setMenor(true)
        setMaior(false)
      }

    }

  return (
    <>
      <h1>Inputs</h1>
      
      idade:
      <input type="number" className='formularios'
      value={inputIdade}
      onChange={(event) => {setInputIdade(event.target.value)}}
      />
      <button onClick={processarIdade}>Processar idade</button>
      {/* {inputIdade} */}
      { maior && <Maior />}
      { menor && <Menor />}
    </>
  )
}

export default App