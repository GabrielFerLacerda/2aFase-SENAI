import { useState } from "react"
import "./Container.css"

function Atividade01_Viagem() {

    const [resultado, setResultado] = useState('')
    let velocidadeDaLuz = 299792

    function calculo_Tempo(){
        let quilometragem = Number(prompt("Digite a distancia em km: "))
        let tempoEstimado = quilometragem / velocidadeDaLuz 
        setResultado("tempo estimado em segundos: " + tempoEstimado)
    }


  return (
    <div className="viagem_Tempo-container" >
      <h3>Calcule o tempo que irá durar a sua viagem pela distancia.</h3>
      <button onClick={calculo_Tempo}>Calcular</button>
      <p>Resultado: {resultado}</p>
    </div>
  )
}

export default Atividade01_Viagem
