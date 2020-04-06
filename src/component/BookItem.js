//imports
import React from 'react';
import {deleteBook } from '../redux/actions/action'
import {connect} from'react-redux';
import Pictures from '../component/Pictures'

//book item view and delete 
const BookItem = ({book, deleteBook}) => {
    return (
            <div className="col-md-4 mb-5 mt-3" key={book.id}>
                <div className="card" style={{width: "18rem"}}>
                    <Pictures image={book.image}/>
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text">{book.description}</p>
                        <p className='card-text'>pages: {book.pages}</p>
                        <a href="/" className="btn btn-primary">View Equipment</a>
                        <button className="btn btn-danger ml-4" onClick={() => deleteBook(book.id)}>Delete</button>
                    </div>
                </div>
            </div>
    )
}


const mapDispatchToProps = dispatch => ({
    deleteBook: book => (dispatch(deleteBook(book)))
})


export default connect(null,mapDispatchToProps)(BookItem);