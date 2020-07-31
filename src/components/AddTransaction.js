import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import { useForm } from 'react-hook-form'

const AddTransaction = () => {
  const { register, handleSubmit } = useForm()
  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = (e) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text: e.text,
      amount: +e.amount,
    }
    addTransaction(newTransaction)
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            name="text"
            type="text"
            defaultValue=""
            placeholder="Enter text..."
            ref={register({ required: true })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            name="amount"
            type="number"
            defaultValue={0}
            placeholder="Enter amount..."
            ref={register({ required: true })}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
