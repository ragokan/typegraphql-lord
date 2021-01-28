import React, { ReactNode, useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import { Button, Layout, Menu } from "antd";
import { useRouter } from "next/router";
import { GuestLinks, UserLinks } from "../utils/Links";
import { useLogoutMutation } from "../generated/apolloComponents";
import { AuthContext, AuthContextType } from "../context/AuthContext";
const { Header, Content, Footer } = Layout;

interface Props {
  children?: ReactNode;
  title?: string;
}

const LayoutComponent = ({ children, title }: Props) => {
  const router = useRouter();
  const [useLogout] = useLogoutMutation();
  const { isLogged } = useContext(AuthContext) as AuthContextType;

  const useLogoutFunction = async () => {
    try {
      const { data } = await useLogout();
      if (data.logoutUser) {
        localStorage.removeItem("isLogged");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Head>
        <title>{title ? "Typegraphql Lord | " + title : "Typegraphql Lord"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout className="mainLayout">
        <Header>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={[router.route]} className="menu-top">
            <Menu.Item key="/" className="menu-item-left-float">
              <Link href="/">Typegraphql Lord</Link>
            </Menu.Item>

            {isLogged
              ? UserLinks.map((link) => (
                  <Menu.Item key={link.key} className="menu-item-left-float">
                    <Link href={link.key}>{link.name}</Link>
                  </Menu.Item>
                ))
              : GuestLinks.map((link) => (
                  <Menu.Item key={link.key} className="menu-item-left-float">
                    <Link href={link.key}>{link.name}</Link>
                  </Menu.Item>
                ))}
            {isLogged && (
              <Menu.Item key="/user/logout" className="menu-item-left-float">
                <Button type="link" onClick={() => useLogoutFunction()}>
                  Logout
                </Button>
              </Menu.Item>
            )}
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
