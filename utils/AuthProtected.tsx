import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const AuthProtected = ({ children }: Props) => {
  const user = true;

  return <>{user ? children : "You have to login!"}</>;
};
