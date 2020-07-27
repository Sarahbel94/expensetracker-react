import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

import { GlobalProvider } from './context/GlobalState'

import './App.css'

class App extends React.Component {
  state = {}
  render() {
    return (
      <GlobalProvider>
        <div className="App">
          <Header />
          <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
      </GlobalProvider>
    )
  }
}

export default App
