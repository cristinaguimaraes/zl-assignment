import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './BookList.css'
import { fetchBookList } from '../data/fetchMockServer'
import { booksList } from '../store/actions'
import { Navbar, List } from '../components'

 class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      offset:'',
      count: '',
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    fetchBookList(this.state.offset, this.state.count)
    .then((data) => data.json())
    .then(data => this.props.setBooksList(data))
    event.preventDefault();
  }

  render() {
    return (
      <div className='bookList'>
        <Navbar/>
        <form onSubmit={this.handleSubmit} className = 'formBookList'>
          <label>
            Number of Items to Skip:
            <input name='offset' type='text' value={this.state.id} onChange={this.handleChange} />
          </label>
          <label>
            Number of Items to Return:
            <input name='count' type='text' value={this.state.title} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit'/>
        </form>
        <List bookList={this.props.bookList} ></List>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bookList: state.bookList
})

const mapDispatchToProps = (dispatch) => ({
  setBooksList: (books) => dispatch(booksList(books)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookList))
