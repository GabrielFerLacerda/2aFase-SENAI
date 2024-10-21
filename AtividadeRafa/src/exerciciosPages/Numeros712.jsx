import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function Numeros712() {
    const [inputNumero, setInputNumero] = useState('')
    const [contagem, setContagem] = useState(0)
    const [valido, setValido] = useState('')

    function lerNumero() {
        const numero = Number(inputNumero)
        if (numero > 100 && numero < 200) {
            setContagem(contagem + 1)
        }
        setInputNumero('')
    }

    function mostrarResultado() {
        if (contagem > 0) {
            setValido(`Números na faixa de 100 a 200: ${contagem}`)
        } else {
            setValido('Nenhum número válido foi inserido.')
        }
    }

    return (
        <div>
            <Navbar />
            <h1>Exercícios 7.12</h1>

            <input 
                type="text" 
                value={inputNumero}
                onChange={(event) => setInputNumero(event.target.value)}
            />

            <button onClick={lerNumero}>Ler</button>
            <button onClick={mostrarResultado}>RESULTADO</button>

            {valido && 
                <div>
                    <p>{valido}</p>
                </div>
            }
        </div>
    );
}

export default Numeros712;
