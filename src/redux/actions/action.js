//importing components
import {ADD_BOOK} from '../types/actionTypes'
import {DELETE_BOOK} from '../types/actionTypes';
import {DELETE_ALL} from '../types/actionTypes';
import {ADD_MEMBER} from '../types/actionTypes';
import {DELETE_MEMBER} from '../types/actionTypes';

//addbook action
export const addBook = (book) => {
    return{
        type: ADD_BOOK,
        payload: book
    }
}
//delete action
export const deleteBook = (book_id) => {
    return{
        type: DELETE_BOOK,
        payload: book_id
    }
}
//delete all books
export const deleteBooks = () => {
    return{
        type: DELETE_ALL,
        
    }
}
//add member
export const addMember= (text) => {
    return{
        type: ADD_MEMBER,
        payload: text
        
    }
}
//delete member
export const deleteMember = (text) => {
    return{
        type: DELETE_MEMBER,
        payload: text
    }
}