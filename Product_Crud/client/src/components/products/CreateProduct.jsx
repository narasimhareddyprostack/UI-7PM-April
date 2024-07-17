import React, { useState } from 'react'
import {Navigate} from 'react-router-dom'
import Axios from 'axios'
const CreateProduct = () => {
  let [product,setProduct]=useState({name:"","image":"",price:"",qty:"",info:""})
  let [isCreated,setCreated] = useState(false)
  let changeInput = (event)=>{
    setProduct({ ...product, [event.target.name]:event.target.value})
  }
  
  let changeImage = (event)=>{
    let imageFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.addEventListener('load',()=>{
        if(reader.result){
            setProduct({...product,image:reader.result})
        }
    })
  }
  let sumbitHandler = (event)=>{
    event.preventDefault();
    let url = 'http://127.0.0.1:5000/api/products/'
    Axios.post(url,product)
    .then((response)=>{
        console.log(response)
        setCreated(true)
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  return <>
       <div className="container mt-5">
       <pre>{JSON.stringify(product)}</pre>
       {
        isCreated ? <><Navigate to="/admin"/></>:<>
          <div className="row">
        <div className="col-md-5">
        <div className="card">
            <div className="card-header bg-primary text-white">
            <h3>New Product</h3>
            </div>
            <div className="card-body">
            <form onSubmit={sumbitHandler}>
                <div className='form-group'>
                    <input name="name" onChange={changeInput} placeholder='Product Name' type="text" className='form-control' />
                </div>
                <div className='form-group'>
                    <input name="image" onChange={changeImage} type="file" className='form-control' />
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
        </>
       }
     
       </div>
        </>
}

export default CreateProduct