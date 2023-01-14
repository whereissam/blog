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
  mutation UpdateClient(
    $id: ID!
    $name: String!
    $userName: String!
    $email: String!
    $address: String!
  ) {
    updateClient(
      id: $id
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

export { ADD_USER, UPDATE_USER };