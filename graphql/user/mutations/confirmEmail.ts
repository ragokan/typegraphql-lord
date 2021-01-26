import { gql } from "apollo-boost";

export const confirmEmail = gql`
  mutation ConfirmEmail($token: String!) {
    status: confirmUser(token: $token)
  }
`;
