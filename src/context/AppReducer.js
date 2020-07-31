export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        transactions: state.transactions.filter((e) => e.id !== action.payload),
      }
    case 'ADD_TRANSACTION':
      const stateTransactions = [...state.transactions]
      return {
        transactions: [...stateTransactions, action.payload],
      }
    case 'INITIAL_TRANSACTIONS':
      return {
        transactions: [...action.payload],
      }
    default:
      return state
  }
}
