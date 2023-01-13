import { gql } from '@apollo/client';

const ADD_USER = gql`
  mutation AddClient(
    $name: String!
    $userName: String!
    $email: String!
    $address: String!
  ) {
    addClient(
      name: $name
      userName: $userName
      email: $email
      address: $address
    ) {
      id
      name
      userName
      email
      address
    }
  }
`;


const UPDATE_USER = gql`
  mutation UpdateProject(
    $id: ID!
    $title: String!
    $body: String!
    $status: ProjectStatusUpdate!
  ) {
    updateProject(
      id: $id
      title: $title
      body: $body
      status: $status
    ) {
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

export { ADD_USER, UPDATE_USER };