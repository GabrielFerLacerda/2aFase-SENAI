import { useState } from "react"

function Exemplos() {

    const [resultado, setResultado] = useState(0)

    function aumentar(){
        setResultado(resultado + 1)
    }
    function diminuir(){
        setResultado(resultado - 1)
    }

    return (
        <div className="Media-container">
            <button onClick={diminuir}>-</button>
            {resultado}
            <button onClick={aumentar}>+</button>
        </div>
    )
}  export default Exemplos