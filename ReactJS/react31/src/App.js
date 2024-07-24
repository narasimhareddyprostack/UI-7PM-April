import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Home from './Components/Home'
import Users from './Components/Users/Users'
import Navbar from './Components/Navbar/Navbar'
import {store} from './redux/store'
import { Provider } from 'react-redux'
const App = () => {
  return <>
            <Provider store={store}>
                <Router>
                    <Navbar/>   
                    <Switch>
                    <Route path="/home"  component={Home} />
                    <Route path="/users"  component={Users} />
                    </Switch>
                </Router>
              </Provider>
        </>
}

export default App