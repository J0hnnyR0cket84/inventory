import React, { Component } from 'react';
// import {connect} from 'react-redux';
import BookItem from '../component/BookItem'

//Book list mapping with props
export class BookList extends Component {
    render() {
        console.log(this.props.books)
        return (
            <div className="row">
               {
                   this.props.books && this.props.books.map((book,item )=> {
                       return(
                        <BookItem book={book} key={item}/>
                       )
                   })
               }
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//   return{
//       books: state
//   }
// }



export default BookList


