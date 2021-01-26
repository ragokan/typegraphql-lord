import { gql } from "apollo-boost";

export const getUser = gql`
  query GetUser {
    user: getUser {
      id
      email
      name
      firstName
      lastName
    }
  }
`;
