import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useGetUserQuery, User } from "../generated/apolloComponents";

export type AuthContextType = {
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  user: User;
  setUser: (user: User) => void;
};

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const { data, error, refetch } = useGetUserQuery();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    refetch();
  }, [isLogged]);

  useEffect(() => {
    if (!data) return;
    setUser(data.user as any);
    setIsLogged(true);
  }, [data]);

  useEffect(() => {
    if (!error) return;
    setUser(undefined);
    setIsLogged(false);
  }, [error]);

  const value = {
    isLogged,
    setIsLogged,
    user,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
