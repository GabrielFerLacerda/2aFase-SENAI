import React, { useState } from 'react'

function Atividade_VerificarPares() {

    const [numero, setNumero] = useState('')
    const [mensagem, setMensagem] = useState('')

    function compararNumero() {
        if (numero % 2 === 0) {
            setMensagem("O número digitado é par")
        } else {
            setMensagem("O número digitado é ímpar")
        }
    }

    return (
        <div>
            <h2>No input abaixo, digite um número.</h2>
            <input 
                type="number"
                value={numero}
                onChange={(event) => setNumero(event.target.value)} 
            />
            <button onClick={compararNumero}>Verificar</button>
            {mensagem && <p>{mensagem}</p>}
        </div>
    )
}

export default Atividade_VerificarPares
