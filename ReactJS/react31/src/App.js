import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Home from './Components/Home'
import Users from './Components/Users'
import Navbar from './Components/Navbar/Navbar'
const App = () => {
  return <>
                <Router>
                    <Navbar/>   
                    <Switch>
                    <Route path="/home"  component={Home} />
                    <Route path="/users"  component={Users} />
                    </Switch>
                </Router>
        </>
}

export default App