import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './components/products/Home'
import ProductList from './components/products/ProductList'
import ProductAdmin from './components/products/ProductAdmin'
import Test from './components/products/Test'
import CreateProduct from './components/products/CreateProduct'
import UpdateProduct from './components/products/UpdateProduct'
const App = () => {
  return (
    <div>
    <Router>
            <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/admin" element={<ProductAdmin/>}/>
      <Route path="/test" element={<Test/>}/>
      <Route path="/create" element={<CreateProduct/>}/>
      <Route path="/updateproduct/:id" element={<UpdateProduct/>}/>
    </Routes>
    </Router>
    </div>
  )
}

export default App