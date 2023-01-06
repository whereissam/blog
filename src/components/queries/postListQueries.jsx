import { gql } from '@apollo/client'

const GET_POST = gql`
  query getProjects {
    projects {
      id
      title
      body
    }
  }
`

const GET_PERSONAL_POST = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      title
      body
      status
      client {
        id
        name
        email
        address
      }
    }
  }
`;

export { GET_POST, GET_PERSONAL_POST }
