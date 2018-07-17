import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './BookDetail.css'
import { fetchBookDetail } from '../data/fetchMockServer'
import { bookDetail } from '../store/actions'
import { Navbar, Book} from '../components'


class BookDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id:'',
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    if (this.state.id) {
      fetchBookDetail(this.state.id)
      .then(data => data.json())
      .then(data => this.props.setBookDetail(data))
      event.preventDefault()
    }
  }

  render() {
    return (
      <div className='bookDetail'>
        <Navbar/>
        <form onSubmit={this.handleSubmit} className = 'formBookDetail'>
          <label>
            Book ID:
            <input name='id' type='text' value={this.state.id} onChange={this.handleChange}/>
          </label>
          <input type='submit' value='Submit'/>
        </form>
        <Book book={this.props.book}></Book>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  book: state.bookDetail
})

const mapDispatchToProps = (dispatch) => ({
  setBookDetail: (book) => dispatch(bookDetail(book)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookDetail))
