import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Layout, Menu } from "antd";
import { useRouter } from "next/router";
import GuestLinks from "./GuestLinks";
import UserLinks from "./UserLinks";
const { Header, Content, Footer } = Layout;

interface Props {
  children?: ReactNode;
  title?: string;
}

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

            {/* {isLogged ? <UserLinks /> : <GuestLinks />} */}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }} className="header-divider">
          <div className="site-layout-content">
            <div className="container-fluid">
              <div className="block">
                <div className="container-fluid">{children}</div>
              </div>
            </div>
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
