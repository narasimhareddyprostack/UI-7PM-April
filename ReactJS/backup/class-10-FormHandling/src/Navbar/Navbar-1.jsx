import React, { Component } from 'react'
class Navbar extends Component {
  render() {
    return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <a href="#" className='navbar-brand'>User Data</a>
                  <div className='ml-auto'>
                    <ul className='navbar-nav'>
                    <li><a href="/index" className='nav-link'>Home</a></li>
                    <li><a href="/about" className='nav-link'>About</a></li>
                    <li><a href="/about" className='nav-link'>Services</a></li>
                    </ul>
                  </div>
            </nav>
  }
}

export default Navbar