import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Message from "./Message/Message"
import Navbar from './Navbar/Navbar'
let App = ()=>{

    return <div>
                <h1>App Component</h1>
                <hr />
              {  /*  <Message/> */}
               <button className="btn btn-warning">Test</button>
            </div>
}

export default App