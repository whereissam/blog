export const provider = (state = {}, action) => {
  switch (action.type) {
    case 'ACCOUNT_LOADED':
      return {
        ...state,
        connection: action.connection
      }

    default:
      return state
  }
}