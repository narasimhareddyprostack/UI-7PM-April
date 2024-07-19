import React from 'react'
import Message from './components/Message/Message'
import store from './redux/store'
import {Provider} from 'react-redux'
import Counter from './components/Counter/Counter'
const App = () => {
 
    return <div>
            <Provider store={store}>
                <h1>App Component</h1>
                <hr />
                <Message/>
                <hr />
                <Counter/>
            </Provider>
            </div>
}

export default App