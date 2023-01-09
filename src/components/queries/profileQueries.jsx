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

const GET_PROFILE = gql`
  query getClient {
    client {
      id
      name
      email
      address
      project{
        title
        body
        status
      }
    }
  }
`

const GET_PROFILE_By_Address = gql`
  query getClientByAddress {
    clientSearchByAddress {
      id
      name
      email
      address
      project{
        title
        body
        status
      }
    }
  }
`

export { GET_PROFILES, GET_PROFILE, GET_PROFILE_By_Address }
