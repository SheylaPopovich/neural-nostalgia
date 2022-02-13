import { gql } from "@apollo/client";

export const GET_ME = gql`
  query {
    me {
      _id
      username
      email
    }
  }
`;

export const GET_ALL_USERS = gql`
  query {
    users {
      _id
      username
    }
  }
`;