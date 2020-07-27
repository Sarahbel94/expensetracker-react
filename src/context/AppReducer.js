//a reducer specifies the applicatopn state changes in response to certain actions in our store

export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        // state.transactions.push(action.payload),
      }
    default:
      return state
  }
}
