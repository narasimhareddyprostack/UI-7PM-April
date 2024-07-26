import React, { useRef, useState } from 'react'

const Reg = () => {
    let buttonRef=useRef(null)
    let passwordRef=useRef(null);
    //let [terms,setTerms]  = useState(false)
    let tcHandler = (event)=>{
       
        //setTerms(event.target.checked)
        if(event.target.checked ==true){
                buttonRef.current.disabled = false
                passwordRef.current.type="text";
        }
        else{
            buttonRef.current.disabled = true;
            passwordRef.current.type="password";
        }
      
    }
 return <div className="container mt-5">
               {/* <pre>{JSON.stringify(terms)}</pre>  */} 
            <div className="row">
           
                <div className="col-md-4">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h4>Register Page</h4>
                    </div>
                    <div className="card-body">
                    <form>
                        <div className='form-group'>
                            <input type="text" placeholder='Email Id' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <input type="text" placeholder='Mobile' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <input ref={passwordRef} type="password" placeholder='Password' className='form-control' />
                        </div>
                        <div className='form-check'>
                        <input type="checkbox" className='form-check-input' onClick={tcHandler} /> 
                       <label htmlFor="">Please Accept Terms & Conditions</label>
                        </div>
                        
                        <input ref={buttonRef} type="submit" value={"Registration"} disabled className='btn btn-success' />
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
}

export default Reg