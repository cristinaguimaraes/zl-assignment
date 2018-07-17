import React, { Component } from 'react';
import './List.css'

export default class List extends Component {
  render () {
    let condition
    if (this.props.bookList.length) {
      condition = (
        <div className='list'>
          <h2 className= 'titleListBooks'>List of Books</h2>
          {this.props.bookList.map((book, index) => {
            return (
              <div key={index} className ='listElement'>
                <p>Title: {book.title}</p>
                <p>Link: <a href={book.link} > {book.link}</a></p>
              </div>
            )
          })}
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
