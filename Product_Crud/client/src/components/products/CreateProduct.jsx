import React, { useState } from 'react'

const CreateProduct = () => {
  let [product,setProduct]=useState({name:"","image":"",price:"",qty:"",info:""})
  let changeInput = (event)=>{
    setProduct({ ...product, [event.target.name]:event.target.value})
  }
  return <>
       <div className="container mt-5">
       <pre>{JSON.stringify(product)}</pre>
       <div className="row">
        <div className="col-md-5">
        <div className="card">
            <div className="card-header bg-primary text-white">
            <h3>New Product</h3>
            </div>
            <div className="card-body">
            <form >
                <div className='form-group'>
                    <input name="name" onChange={changeInput} placeholder='Product Name' type="text" className='form-control' />
                </div>
                <div className='form-group'>
                    <input name="image" type="file" className='form-control' />
                </div>
                <div className='form-group'>
                    <input name="price" onChange={changeInput} placeholder='Price' type="number" className='form-control' />
                </div>
                <div className='form-group'>
                    <input  name="qty" onChange={changeInput} placeholder='QTY' type="number" className='form-control' />
                </div>
                <div className='form-group'>
                    <input name="info" onChange={changeInput} placeholder='Additional Info' type="text" className='form-control' />
                </div>
                <input type="submit" value="Create Product" className='btn btn-primary'/>
            </form>
            </div>
        </div>
           
        </div>
       </div>
       </div>
        </>
}

export default CreateProduct