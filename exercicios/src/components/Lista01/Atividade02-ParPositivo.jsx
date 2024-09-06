import "./Container.css"
import { useState } from 'react'

function Atividade02() {
    const [resultado, setResultado] = useState('')

    function verificarNumero() {
        const input = prompt("Digite algum número")
        const verificando = Number(input)

        if (isNaN(verificando)) {
            alert("Por favor, digite um número válido.")
            return
        }

        if (verificando > 0) {
            if (verificando % 2 === 0) {
                setResultado("Par e positivo")
            } else {
                setResultado("É positivo, mas não é par.")
            }


        } else if (verificando < 0) {
            if (verificando % 2 === 0) {
                setResultado("Não é positivo, mas é par.")
            } else {
                setResultado("Não é positivo e não é par.")
            }
        } else {
            setResultado("O número é zero, que é par e não é positivo.")
        }
    }

    return (
        
        <div className='Media-container'>
            <h2>Verificação se é um número positivo e se é par</h2>
            <button onClick={verificarNumero}>Verificar</button>
            <p>Resultado:{resultado}</p>
        </div>
        
    )
}

export default Atividade02;
