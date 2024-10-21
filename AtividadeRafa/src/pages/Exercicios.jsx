import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

function Exercicios() {
  return (
    <div>
        <Navbar/>
        <Link to="/numeros712">Atividade 7.12</Link> <br></br>
        <Link to="/numeros713">Atividade 7.13</Link>
    </div>
  )
}

export default Exercicios
