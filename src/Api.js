import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-type': 'application/json',
  },
})

const getTransactions = () => {
  return http.get('/transactions')
}

const create = (data) => {
  return http.post('/transactions', data)
}

const remove = (id) => {
  return http.delete(`/transactions/${id}`)
}

const handleError = (err) => {
  if (err.response) {
    if (err.response > 399 && err.response < 500) {
      alert('404 Not Found')
    }
    if (err.response > 499 && err.response < 600) {
      alert('Internal Server Error')
    }
  } else if (err.request) {
    alert('Network Error')
  } else {
    console.log(err)
  }
}

export { getTransactions, create, remove, handleError }
