import { createStore,applyMiddleware } from "redux";
import {userReducer} from './User/user.reducer'
import {composeWithDevTools} from '@redux-devtools/extension'
import {thunk} from 'redux-thunk'
import {logger} from 'redux-logger'

let store = createStore(userReducer,composeWithDevTools(applyMiddleware(thunk,logger)))

export {store};