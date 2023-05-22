import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Aos from "aos";
import 'aos/dist/aos.css';
import Home from "./pages/home/Home"
import Menu from "./pages/menu/Menu"
import { useEffect } from "react"

function App() {

  useEffect(() => {Aos.init({duration: 1000})},[])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
      </Routes>
    </Router>
  )
}

export default App
