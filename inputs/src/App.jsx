import { useState } from 'react'
import './App.css'
import Atividade_DiaSemana from './assets/components/Atividades/Atividade_DiaSemana'
import Atividade_VerificarPares from './assets/components/Atividades/Atividade_VerificarPares'
import Atividade01_multa from './assets/components/Lista 02/Atividade01_multa'
import Maior from './assets/components/Maior'
import Menor from './assets/components/Menor'

function App() {

  return (
    <>
     {/* <Atividade_DiaSemana/>  */}
     <Atividade_VerificarPares/>
     <Atividade01_multa/>
    </>
  )
}

export default App
