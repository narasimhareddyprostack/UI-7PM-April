import {Link,BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './Navbar/Navbar'
let App = ()=>{
    return <>
            <Router>
                <Navbar/>
            <Switch>
                <Route path="/index" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
            
            </Router>
           </>
}

export default App