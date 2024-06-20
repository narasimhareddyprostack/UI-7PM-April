import React from 'react'
import Message from './Message'
class App extends React.Component{

    render(){
        return <div>
                    <h1>App Component!</h1>
                    <hr/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
    }
}
export default App