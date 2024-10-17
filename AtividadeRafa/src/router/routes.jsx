import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Contato from "../pages/Contato"
import Generica from "../pages/Generica"
import Final from "../pages/Final"
import Numeros712 from "../exerciciosPages/Numeros712"
import Exercicios from "../pages/Exercicios"
import Numeros713 from "../exerciciosPages/Numeros713"



const router = createBrowserRouter([
    {path: "/home", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/numeros712", element: <Numeros712 />},
    {path: "/exercicios", element: <Exercicios />},
    {path: "/numeros713", element: <Numeros713 />},
    
])

export default router;
