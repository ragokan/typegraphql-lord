import { gql } from "apollo-boost";

export const loginMutation = gql`
  mutation Login($data: LoginInput!) {
    user: loginUser(data: $data) {
      id
      email
      firstName
      lastName
    }
  }
`;
