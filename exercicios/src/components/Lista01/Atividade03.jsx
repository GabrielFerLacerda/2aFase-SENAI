import "./Container.css"
import React, { useState } from 'react'

function Atividade03() {
    const [resultado, setResultado] = useState('')

    function numero() {
        let salario = Number(prompt("Digite o salário: "))
        let emprestimo = Number(prompt("Digite o valor do empréstimo que quer pegar: "))
        let prestacoes = Number(prompt("Digite o número de prestações: "))

        if (salario <= 0 || emprestimo <= 0 || prestacoes <= 0) {
            setResultado("Os valores informados devem ser maiores que zero.")
            return
        }

        let porcentagemSalario = salario * 0.3
        let calculoPrestacoes = emprestimo / prestacoes

        if (calculoPrestacoes > porcentagemSalario) {
            setResultado("Empréstimo não pode ser concedido, pois a prestação ultrapassa 30% do salário.");
        } else {
            setResultado("Empréstimo concedido com sucesso!")
        }
    }

    return (
        <div className='Emprestimo-container'>
            <h2>Faça seu empréstimo!</h2>
            <button onClick={numero}>Emprestimo</button>
            <p>Resultado:{resultado}</p>
        </div>
    )
}

export default Atividade03
