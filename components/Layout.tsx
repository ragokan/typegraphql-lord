import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

type Props = {
  children?: ReactNode;
  title?: string;
};

const LayoutComponent = ({ children, title = "Typegraphql Lord" }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout className="layout">
        <Header>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["0"]}>
            <Menu.Item key="0">
              <Link href="/">Typegraphql Lord</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }} className="header-divider">
          <div className="site-layout-content">
            <div className="container-fluid">{children}</div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Lords use Typescript!</Footer>
      </Layout>
    </div>
  );
};

export default LayoutComponent;
