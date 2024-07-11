import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to="/" className="navbar-brand">Logo</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/products" className="nav-link">Products</Link></li>
                    <li><Link to="/admin" className="nav-link">Admin</Link></li>
                    <li><a href="/test" className="nav-link">Test</a></li>
                </ul>
            </div>
         </nav>
}

export default Navbar