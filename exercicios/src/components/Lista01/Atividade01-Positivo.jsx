import { useState } from "react";

function Atividade01() {
    
    const [resultado, setResultado] = useState('')
    

    
    function numero() {
        let numero = Number(prompt("Digite um numero para verificação: "))

        if(numero > 0){
            setResultado("Positivo")
            
        }else if(numero < 0){
            setResultado("Negativo")
        }else {
            setResultado("Nulo")
        }
    }

    return (
        
        <div className="Positivo-container">
            <h2>Verificação se é um número positivo, negativo ou nulo</h2>
            <button onClick={numero}>Verificar</button>
            <p>Sinal:{resultado}</p>
        </div>
        
    )
}

export default Atividade01;
