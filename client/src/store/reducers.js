import { combineReducers } from 'redux'

const bookList = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_LIST':
      return [
        ...action.books
      ]
    default:
    return state
    }
  }

const bookDetail = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_BOOK_DETAIL':
      return {
        ...action.book,
      }
    default:
    return state
  }
}

  export default combineReducers({
    bookList,
    bookDetail
  })
