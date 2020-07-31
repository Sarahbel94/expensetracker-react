import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'
import { getTransactions, remove, create, handleError } from '../Api'

const initialState = {
  transactions: [],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    fetchTransactions()
  }, [])

  async function fetchTransactions() {
    await getTransactions()
      .then((resp) => {
        dispatch({
          type: 'INITIAL_TRANSACTIONS',
          payload: resp.data,
        })
      })
      .catch((error) => {
        handleError(error)
      })
  }

  async function deleteTransaction(id) {
    await remove(id)
      .then(() => {
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id,
        })
      })
      .catch((error) => {
        handleError(error)
      })
  }

  async function addTransaction(transaction) {
    await create(transaction)
      .then((resp) =>
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: resp.data,
        })
      )
      .catch((error) => handleError(error))
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
