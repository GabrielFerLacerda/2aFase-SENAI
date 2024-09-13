import { useState } from 'react'
import './App.css'
import Atividade_DiaSemana from './assets/components/Atividades/Atividade_DiaSemana'
import Atividade_VerificarPares from './assets/components/Atividades/Atividade_VerificarPares'
import Maior from './assets/components/Maior'
import Menor from './assets/components/Menor'

function App() {

  return (
    <>
     {/* <Atividade_DiaSemana/>  */}
     <Atividade_VerificarPares/>
    </>
  )
}

export default App
