import React from 'react'
import { useState } from "react"

function Atividade02() {
    const [resultado, setResultado] = useState('')

    function verificarNumero() {
       
        let verificando = Number(prompt("Digite algum número"))

       
        if (verificando > 0 && verificando % 2 === 0) {
            alert("O número é par e positivo.")
        } else if (verificando > 0 && verificando % 2 !== 0) {
            
            alert("O número é positivo, mas não é par.")
        } else if (verificando <= 0 && verificando % 2 === 0) {
           
            alert("O número não é positivo, mas é par.")
        } else if (verificando <= 0 && verificando % 2 !== 0) {
            
            alert("O número não é positivo e não é par.")
        }
    }

    return (
        <div>
            <h2>Verificação se é um número positivo e se é par</h2>
            <button onClick={verificarNumero}>Verificar</button>
        </div>
    )
}

export default Atividade02
