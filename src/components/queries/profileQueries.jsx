import { gql } from '@apollo/client'

const GET_PROFILES = gql`
  query getClients {
    clients {
      id
      name
      email
      address
    }
  }
`

export { GET_PROFILES }
