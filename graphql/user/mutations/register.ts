import { gql } from "apollo-boost";

export const registerMutation = gql`
  mutation Register($data: RegisterInput!) {
    user: registerUser(data: $data) {
      id
      email
      firstName
      lastName
      name
    }
  }
`;
