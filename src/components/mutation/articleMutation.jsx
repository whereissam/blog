import { gql } from '@apollo/client';

const ADD_ARTICLE = gql`
  mutation AddProject(
    $title: String!
    $body: String!
    $status: ProjectStatus!
    $clientId: ID!
    $clientAddress : String!
  ) {
    addProject(
      title: $title
      body: $body
      status: $status
      clientId: $clientId
      clientAddress: $clientAddress
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

const DELETE_ARTICLE = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

const UPDATE_ARTICLE = gql`
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

export { ADD_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE };