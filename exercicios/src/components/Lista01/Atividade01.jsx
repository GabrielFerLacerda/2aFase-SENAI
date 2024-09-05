import { useState } from "react";

function Atividade01() {
    
    const [resultado, setResultado] = useState('')
    

    
    function numero() {
        let numero = Number(prompt("Digite um numero para verificação: "))

        if(numero > 0){
            alert("O numero é positivo")
        }else if(numero < 0){
            alert("O numero é negativo")
        }else {
            alert("O numero é nulo")
        }
    }

    return (
        <center>
        <div className="Media-container">
            <h2>Verificação se é um número positivo, negativo ou nulo</h2>
            <button onClick={numero}>Verificar</button>
        </div>
        </center>
    )
}

export default Atividade01;
