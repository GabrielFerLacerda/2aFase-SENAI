import { useState } from "react"
import "./Medias.css"

function Medias() {
 
    const [resultado, setResultado] = useState()
    function calcularMedia(){
        let nota1 = Number(prompt("Digite o 1º numero: "))
        let nota2 = Number(prompt("Digite o 2º numero: "))
        let media = (nota1 + nota2)/2
        setResultado(media)

    }
  return (
   <div className="Media-container">
        
        <h2>Exercicio para calcular media de 2 números</h2>
        <button onClick={calcularMedia}>Calcular</button>
     <div className="Media-container">
        Media: {resultado}
     </div>
   </div>


  )
}

export default Medias