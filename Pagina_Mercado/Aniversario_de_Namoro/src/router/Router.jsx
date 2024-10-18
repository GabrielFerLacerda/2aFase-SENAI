import { createBrowserRouter } from "react-router-dom"; 
import HeroSection from "../documents/Page/HeroSection";
import Text from "../documents/Page/Historia";

const router = createBrowserRouter([
    {path: "/", element: <HeroSection/>},
    {path: "/text", element: <Text/>},
    
    
])

export default router;
