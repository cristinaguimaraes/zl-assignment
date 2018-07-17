
export const booksList = (books) => ({
  type: 'FETCH_BOOKS_LIST',
  books
})

export const bookDetail = (book) => ({
  type: 'FETCH_BOOK_DETAIL',
  book
})
