import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Navbar extends Component {
  render() {
    return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <a href="#" className='navbar-brand'>Routing Ex</a>
                  <div className='ml-auto'>
                    <ul className='navbar-nav'>
                    <li><Link to="/index" className='nav-link'>Home</Link></li>
                    <li><Link to="/about" className='nav-link'>About</Link></li>
                    <li><Link to="/services" className='nav-link'>Services</Link></li>
                    <li><Link to="/contact" className='nav-link'>Contact</Link></li>
                    <li><a href='/login' className='nav-link'>Login</a></li>
                    </ul>
                  </div>
            </nav>
  }
}

export default Navbar