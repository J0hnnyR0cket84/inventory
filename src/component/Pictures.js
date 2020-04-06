import React, { Component } from 'react';
import {connect} from 'react-redux'


//Background component
export class Pictures extends Component {
    render() {
        return <img src={`${this.props.image}`} style={{width:'100%', height:'350px'}}  className="card-img-top" alt="book"/>
    }
}

const mapStateToProps = (state) => {
    return{
        books: state
    }
  }

export default connect(mapStateToProps) (Pictures)
