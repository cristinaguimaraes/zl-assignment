import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { Button } from 'react-bootstrap'

export default class Home extends Component {

  render() {
    return (
      <div className='Home'>
        <h1 className= 'Title'>Library</h1>
        <Button className='LinkButton' bsStyle ='success' bsSize='large'>
          <Link to='/BookList'>Book List</Link>
        </Button>
        <Button className='LinkButton' bsStyle ='success' bsSize='large'>
          <Link to='/BookDetail'>Book Detail</Link>
        </Button>
        <Button className='LinkButton' bsStyle ='success' bsSize='large'>
          <Link to='/CreateBook'>Create Book </Link>
        </Button>
      </div>
    )
  }
}
