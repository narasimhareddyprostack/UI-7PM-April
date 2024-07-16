import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
const ProductAdmin = () => {

 let [products,setProducts]= useState([])
 
 useEffect(()=>{
    getProducts();
 },[]);

 let getProducts = ()=>{
  Axios.get('http://127.0.0.1:5000/api/products')
  .then((response)=>{
      setProducts(response.data)
  })
  .catch(()=>{})
 }

 let deleteProduct = (p_Id)=>{
  let url = `http://127.0.0.1:5000/api/products/${p_Id}`
  Axios.delete(url)
  .then((resp)=>{
      getProducts()
  })
  .catch((err)=>{
    console.log(err)
  })
 }
  return (
    <div>
      <div className="container mt-5">
      <div className="row">
      <div className="col-md-8">
         <Link to="/create" class="btn btn-success">Create a Product</Link>
      </div>
      </div>
      <div className="row">
      <pre>{JSON.stringify(products)}</pre>
          <div className="col">
              <table className='table'>
                <thead>
                  <tr>
                    <th>S No</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                  products.length > 0 ? <>
                  {
                       products.map((product,index)=>{
                        return <tr key={index}>
                                  <td>{index+1}</td>
                                  <td><img src={product.image} height={"60px"}  alt="" /></td>
                                  <td>{product.name}</td>
                                  <td>{product.price}</td>
                                  <td>{product.qty}</td>
                                  <td>
                                    <Link to={`/update-product/${product._id}`} className='btn btn-warning mr-2'>Update</Link>
                                    <button onClick={deleteProduct.bind(null,product._id)} className='btn btn-danger'>Delete</button>
                                  </td>
                               </tr>
                       }) 

                  }
                  </>:<><h3>No Data</h3></>
                }
                </tbody>
              </table>
          </div>
      </div>
      </div>

      

    </div>
  )
}

export default ProductAdmin