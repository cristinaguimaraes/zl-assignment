const api = 'http://private-5593e1-zlassignment.apiary-mock.com'

export const fetchBookList = (offset, count) => {
  if (offset && count) return fetch(`${api}/v1/items?offset=${offset}&count=${count}`)
  if (offset) return fetch(`${api}/v1/items?offset=${offset}`)
  if (count) return fetch(`${api}/v1/items?count=${count}`)
  else return fetch(`${api}/v1/items`)
}

export const fetchBookDetail= (id) => {
  return fetch(`${api}/v1/items/${id}`)
}

export const fetchPostBook = (book) => {
  const params = {
    method:'POST',
    body:JSON.stringify(book),
  }
  return fetch(`${api}/v1/items`, params)
}
