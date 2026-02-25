import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: false,
  Headers: {
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
