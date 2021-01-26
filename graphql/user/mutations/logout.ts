import { gql } from "apollo-boost";

export const logout = gql`
  mutation Logout {
    logoutUser
  }
`;
