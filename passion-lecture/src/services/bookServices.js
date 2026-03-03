import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const getBooks = () => {
  const books = apiClient.get('books')
  return books
}

export const getBookById = (id) => {
  const books = apiClient.get('books/' + id)
  return books
}

export const addBooks = (books) => {
  return apiClient.post('books/', books)
}
export const deleteBook = (id) => {
  const books = apiClient.delete('books/' + id)
  return books
}
