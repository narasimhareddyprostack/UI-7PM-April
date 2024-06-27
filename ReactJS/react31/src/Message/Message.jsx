import './message.css'
let Message = ()=>{
    let msg="GM"
    let tag_Styles={color:'pink', backgroundColor:'green'}
    return <div>
            <h1 style={{color:'red', backgroundColor:'yellow'}}>Message Component</h1>

            <h2 style={tag_Styles}>Welcome to React World!</h2>
            
            <h3 style={tag_Styles}></h3>
            
            <h4 className='msgStyles'>{msg}</h4>

            </div>
}

export default Message