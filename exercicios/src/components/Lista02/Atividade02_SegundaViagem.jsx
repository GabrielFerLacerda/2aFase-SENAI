import { useState } from "react"
import "./Container.css"

function Atividade02_SegundaViagem() {
    const [resultado, setResultado] = useState('')
    const [distancia, setDistancia] = useState('')

    const velocidadeDaLuz = 299792 // Velocidade da luz em km/s
    const minuto = 60 // 60 segundos
    const horas = 3600 // 60 minutos * 60 segundos
    const dias = 86400 // 24 horas * 60 minutos * 60 segundos
    const meses = 2628000 // Aproximadamente 30.44 dias * 24 horas * 60 minutos * 60 segundos
    const anos = 31557600 // Aproximadamente 365,25 dias * 24 horas* 60 minutos * 60 segundos

    function calculo_Tempo() {
        const quilometragem = Number(distancia)
        const tempoEstimado = quilometragem / velocidadeDaLuz // tempo em segundos

        if (tempoEstimado >= anos) {
            const transformarAnos = tempoEstimado / anos
            setResultado(`Tempo estimado em anos: ${transformarAnos.toFixed(2)}`)
        } else if (tempoEstimado >= meses) {
            const transformarMeses = tempoEstimado / meses
            setResultado(`Tempo estimado em meses: ${transformarMeses.toFixed(2)}`)
        } else if (tempoEstimado >= dias) {
            const transformarDias = tempoEstimado / dias
            setResultado(`Tempo estimado em dias: ${transformarDias.toFixed(2)}`)
        } else if (tempoEstimado >= horas) {
            const transformarHoras = tempoEstimado / horas
            setResultado(`Tempo estimado em horas: ${transformarHoras.toFixed(2)}`)
        } else if (tempoEstimado >= minuto) {
            const transformarMinutos = tempoEstimado / minuto
            setResultado(`Tempo estimado em minutos: ${transformarMinutos.toFixed(2)}`)
        } else {
            setResultado(`Tempo estimado em segundos: ${tempoEstimado.toFixed(2)}`)
        }
    }

    return (
        <div className="viagem_Tempo-container">
            <h3>Calcule o tempo que irá durar a sua viagem pela distância.</h3>
            <input 
                type="number" 
                value={distancia} 
                onChange={(e) => setDistancia(e.target.value)} 
                placeholder="Digite a distância em km" 
            />
            <button onClick={calculo_Tempo}>Calcular</button>
            <p>Resultado: {resultado}</p>
        </div>
    )
}

export default Atividade02_SegundaViagem
