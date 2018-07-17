import React, { Component } from 'react'
import './Book.css'
import { Image } from 'react-bootstrap'

export default class Book extends Component {

  render () {
    let condition
    if (this.props.book.id) {
      condition = (
        <div className='book'>
          <h2 className= 'titleBookDetail'>Book Detail</h2>
          <div>
            <Image src={this.props.book.img_url} alt='171x180'/>
            <p>Title: {this.props.book.title}</p>
            <p>Author: {this.props.book.author}</p>
            <p>Price: {this.props.book.price} €</p>
          </div>
        </div>
      )
    }
    return (
      <div>
        {condition}
      </div>
    )
  }
}
