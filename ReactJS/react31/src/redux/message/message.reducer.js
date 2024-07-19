//impor action types
import {GM,GE,GN} from './message.action'
let initialState={
    msg:"Hello...................."
}
let messageReducer = (state=initialState,action)=>{
        switch(action.type){
                case 'GM':
                    return { msg:"Good Morning"}
                case 'GN':
                    return {msg:"Good Night"}
                case 'GE':
                    return  {msg:"Good Evening"}
                default:
                    return state
        }
}
export default messageReducer