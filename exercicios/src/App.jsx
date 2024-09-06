import './App.css'
import Atividade01 from './components/Lista01/Atividade01-Positivo'
import Atividade02 from './components/Lista01/Atividade02-ParPositivo'
import Atividade03 from './components/Lista01/Atividade03'
import Atividade01_Viagem from './components/Lista02/Atividade01_Viagem'
import Atividade02_SegundaViagem from './components/Lista02/Atividade02_SegundaViagem'


function App() {
 

  return (
    <div className='App-container'>
      {/* <Atividade01 />
      <Atividade02/>
      <Atividade03/> */}

      <Atividade01_Viagem/>
      <Atividade02_SegundaViagem/>

    </div>
  )
}

export default App
