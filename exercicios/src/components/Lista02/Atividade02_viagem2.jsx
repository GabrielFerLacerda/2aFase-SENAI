import { useState } from "react"
import "./Container.css"

function Atividade01_Viagem() {

    const [resultado, setResultado] = useState('')
    let velocidadeDaLuz = 299792
    let minuto = 60
    let horas = 60
    let dias = 24
    let meses = 31

    function calculo_Tempo(){
        let quilometragem = parseFloat(prompt("Digite a distancia em km: "))
        let tempoEstimado = quilometragem / velocidadeDaLuz
         

            if(tempoEstimado >= minuto){
                let transformacaoMinutos = tempoEstimado / minuto
                setResultado("tempo estimado em minutos: " + transformacaoMinutos)

            }else if(transformarMinutos >= horas){
                let transformarHoras = transformarMinutos / horas
                setResultado("tempo estimado em Horas: " + transformarHoras)

            }else if(transformarHoras >= dias){
                let transformarDias = transformarHoras / dias
                setResultado("tempo estimado em Dias: " + transformarDias)

            }else if(transformarDias >= meses){
                let transformarMeses = transformarDias / meses
                setResultado("tempo estimado em Meses: " + transformarMeses)
            }else if(tempoEstimado < minuto){
                setResultado("tempo estimado em segundos: " + tempoEstimado)

            }
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
