import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Layout, Menu } from "antd";
import { useRouter } from "next/router";
const { Header, Content, Footer } = Layout;

type Props = {
  children?: ReactNode;
  title?: string;
};

const LayoutComponent = ({ children, title }: Props) => {
  const { route } = useRouter();

  return (
    <div>
      <Head>
        <title>{title ? "Typegraphql Lord | " + title : "Typegraphql Lord"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout className="mainLayout">
        <Header>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={[route]} className="menu-top">
            <Menu.Item key="/" className="menu-item-left-float">
              <Link href="/">Typegraphql Lord</Link>
            </Menu.Item>

            <Menu.Item key="/auth/login">
              <Link href="/auth/login">Login</Link>
            </Menu.Item>

            <Menu.Item key="/auth/register">
              <Link href="/auth/register">Register</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }} className="header-divider">
          <div className="site-layout-content">
            <div className="container-fluid">{children}</div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }} className="footer">
          Lords use Typescript!
        </Footer>
      </Layout>
    </div>
  );
};

export default LayoutComponent;
