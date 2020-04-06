//importing and combing book reducer

import { combineReducers} from 'redux';
import bookReducer from './bookReducer.js';





export const rootReducer =  combineReducers({
    books: bookReducer
})

export default rootReducer;