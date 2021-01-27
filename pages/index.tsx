import { GetServerSideProps } from "next";
import React from "react";
import LayoutComponent from "../components/LayoutComponent";

const Index: React.FC<IndexProps> = (props) => {
  return (
    <LayoutComponent>
      <h1>Hey</h1>
    </LayoutComponent>
  );
};

interface IndexProps {
  name: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} as IndexProps };
};

export default Index;
