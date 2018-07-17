
import React, { Component } from 'react'
import './CreateBookForm.css'
import { fetchPostBook } from '../data/fetchMockServer'
import { Navbar } from '../components'

export default class CreateBookForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id:'',
      title: '',
      author:'',
      img_url:'',
      price:''
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    const newBook= {
      ...this.state,
    }
    fetchPostBook(newBook)
    event.preventDefault()
  }

  render() {
    return (
      <div className='popup'>
        <Navbar/>
        <form onSubmit={this.handleSubmit} className = 'popup_inner'>
          <label>
            Book ID:
            <input name='id' type='text' value={this.state.id} onChange={this.handleChange} />
          </label>
          <label>
            Title:
            <input name='title' type='text' value={this.state.title} onChange={this.handleChange} />
          </label>
          <label>
            Author:
            <input name='author' type='text' value={this.state.author} onChange={this.handleChange} />
          </label>
          <label>
            Image:
            <input name='img_url' type='text' value={this.state.img_url} onChange={this.handleChange} />
          </label>
          <label>
            Price:
            <input name='price' type='text' value={this.state.price} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}
