import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './Navbar/Navbar'

let App = ()=>{

    return <div>
            <BrowserRouter>
                 <Navbar/>
            <Routes>
                <Route path="/index" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>
            
            </Routes>
            </BrowserRouter>
            </div>
}

export default App