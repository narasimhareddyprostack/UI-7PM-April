import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  
    return  <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/index" className='navbar-brand'>Routing Ex</Link>
          <div className='ml-auto'>
        <ul className='navbar-nav'>
        <li><Link to="/index" className='nav-link'>Home</Link></li>
        <li><Link to="/about" className='nav-link'>About</Link></li>
        <li><Link to="/services" className='nav-link'>Services</Link></li>
        <li><Link to="/contact" className='nav-link'>Contact</Link></li>
        <li><Link to="/users" className='nav-link'>User</Link></li>
        <li><a href='/login' className='nav-link'>Login</a></li>
        </ul>
      </div>
</nav>
}

export default Navbar