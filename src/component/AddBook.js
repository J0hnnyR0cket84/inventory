//importing components
import React, {  useState } from 'react';
import {connect} from 'react-redux';
import {addBook} from '../redux/actions/action'

//add book function, redux passing to comp
const AddBook = ({addBook}) => {
    const [title, setbookTitle] = useState('')
    const [description, setDescription] = useState('')
    const [pages, setPages] = useState('')
    const [image, setImage] = useState('')


    //submit function to add new book to store
    const handleSubmit = (e) => {
        e.preventDefault()
        const book = {
            id: Math.random(),
            title,
            description,
            pages,
            image
        }

        addBook(book)
    }

    //Addbook modal with event handlers
    return (
        <div>
            <button className="btn btn-primary mb-2" data-toggle="modal" data-target="#staticBackdrop">Add Equipment</button>
            <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <p>Add Equipment</p>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Equipment Name</label>
                            <input type="text" className="form-control" value={title} onChange={(e) => setbookTitle(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Equipment Checkout Date</label>
                            <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Equipment Return Date (Estimated)</label>
                            <input type="text" className="form-control" value={pages} onChange={(e) => setPages(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Equipment Image URL</label>
                            <input type="text" className="form-control" placeholder="Enter Image URL" value={image} onChange={(e) => setImage(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

//retrieves book obj from store to component
const mapStateToProps = (state) => ({
    books: state.books.currentBooks
})
//giving component access to redux actions
const mapDispatchToProps = dispatch => ({
    addBook: book => (dispatch(addBook(book)))
})

//exporting components
export default connect(mapStateToProps,mapDispatchToProps)(AddBook)
