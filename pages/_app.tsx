import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo";
import "antd/dist/antd.css";
import "../styles/global.css";
import AuthContextProvider from "../context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ApolloProvider>
  );
}
