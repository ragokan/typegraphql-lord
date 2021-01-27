import { Menu } from "antd";
import Link from "next/link";
import React from "react";

const GuestLinks: React.FC<GuestLinksProps> = () => (
  <>
    <Menu.Item key="/auth/login">
      <Link href="/auth/login">Login</Link>
    </Menu.Item>

    <Menu.Item key="/auth/register">
      <Link href="/auth/register">Register</Link>
    </Menu.Item>
  </>
);

interface GuestLinksProps {}

export default GuestLinks;
