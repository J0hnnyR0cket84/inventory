//Importing functions/libraries/css
import React,{useState} from 'react';
import BookList from '../BookList';
import './MyBooks.css';
import AddBook from '../AddBook'
import {connect } from  'react-redux';
import {deleteBooks} from '../../redux/actions/action';
import {addMember}from '../../redux/actions/action';
import {deleteMember} from '../../redux/actions/action';


//component that renders every component
//pass actions/props from redux
const MyBooks = ({books, deleteBooks, members, addMember, deleteMember}) => {
    const [member, setMember] = useState('')

    const addNewMember = () => {
            addMember(member)
            console.log(member)
    }

   
//returning the components
    return (
        <div className="container app-main">
                <h3 className="text-center pt-5 pb-5">Welcome to the Inventory Management App!</h3>
                <div className="row">
                    <input type="text" className="form-control" value={member} onChange={(e) => setMember(e.target.value)} placeholder="Add an Inventory Item"/>
                    <button className="btn btn-primary mt-1" onClick={() => addNewMember()}>Add Equipment User</button>
                </div>
                <ul>
                    {members && members.map((item, i) => <li key={i}>{item} <span onClick={() => deleteMember(i)}>x</span></li>)}
                </ul>
                <AddBook/>
                <button className="btn btn-danger" onClick={() => deleteBooks()}>Erase All Equipment Users</button>
                <BookList books={books}/>                
        </div>        
    )
}

//Giving component access to store/actions
const mapStateToProps = (state) => ({
    books: state.books.currentBooks,
    members: state.books.members
})

const mapDispatchToProps = dispatch => ({
    deleteBooks: book => (dispatch(deleteBooks())),
    addMember: text => (dispatch(addMember(text))),
    deleteMember: text => dispatch(deleteMember(text))
})


//exporting mybooks and bridging props
export default connect(mapStateToProps,mapDispatchToProps)(MyBooks);