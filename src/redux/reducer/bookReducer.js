//importing type comp

import {ADD_BOOK} from '../types/actionTypes';
import {DELETE_BOOK} from '../types/actionTypes';
import {DELETE_ALL} from '../types/actionTypes';
import {ADD_MEMBER} from '../types/actionTypes';
import {DELETE_MEMBER} from '../types/actionTypes';


//initial state of book and members
const initState = {
    currentBooks: [],
    members:[]
}

//reducers
const rootReducer = (state = initState, action) => {
switch(action.type){
    case ADD_BOOK: 
    return{
        ...state,
        currentBooks:[...state.currentBooks, action.payload]
    }
    case DELETE_BOOK: 
    const newState = state.currentBooks.filter((item) => item.id !== action.payload)
    return{
        ...state,
        currentBooks:newState
    }
   
    case DELETE_ALL:
        return {
            state,
            currentBooks:[]
        }   
    case ADD_MEMBER: 
        return {
            ...state,
            members:[...state.members, action.payload]
        }

    case DELETE_MEMBER: 
    const newMember = state.members.filter((item, i) => i !== action.payload)
        return {
            ...state,
            members: newMember
        }
    default: return state
}


}

//export to root for 
export default rootReducer;

