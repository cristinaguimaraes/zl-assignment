import React, { Component } from 'react'
import './Navbar.css'
import { Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'


export default class Navbar extends Component {
  render() {
    return (
      <Button className='NavButton' bsStyle ='success'>
        <Link to='/'>BACK</Link>
      </Button>
    )
  }
}
