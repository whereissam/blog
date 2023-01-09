export const provider = (state = {}, action) => {
  switch (action.type) {
    case 'ACCOUNT_LOADED':
      return {
        ...state,
        connection: action.connection
      }
    case 'PROVIDER_LOADED':
      console.log(action)
      return {
        ...state,
        account: action.address
      }

    default:
      return state
  }
}