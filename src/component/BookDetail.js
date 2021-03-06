//importing components
import React from 'react';
import {connect} from 'react-redux';
import {deleteBook } from '../redux/actions/action'
import {Redirect} from 'react-router';

//Super component for book detail state
class bookDetail extends React.Component{
    constructor(){
        super()

        this.state = {
            deleteMode: 'false',
            redirect:'false'
        }
    }

    componentDidMount(){

    }

    deleteBookItem = () => {

    }

//renering book item
    render(){
        if(this.state.redirect){
            return <Redirect to="/"/>
        }
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img alt="detail" src='https://upload.wikimedia.org/wikipedia/en/b/b5/Book_cover_of_Kepnes%27s_2014_novel_%22You%22.png'/>
                    </div>
                    <div className="col-md-6">
                        <h3>The Harry Book</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                        <button className="btn btn-danger" onClick={() => this.deleteBookItem()}>Delete Book</button>
                    </div>
                </div>
            </div>
            
        )
    }
    }
    
const mapStateToProps = (state) => ({
    books: state.books.currentBooks
})

const mapDispatchToProps = dispatch => ({
    delete: book => (dispatch(deleteBook(book)))
})

export default connect(mapStateToProps, mapDispatchToProps)(bookDetail)