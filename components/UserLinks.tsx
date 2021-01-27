import { Menu } from "antd";
import Link from "next/link";
import React from "react";

const UserLinks: React.FC<UserLinksProps> = () => (
  <>
    <Menu.Item key="/post/create">
      <Link href="/post/create">Create Post</Link>
    </Menu.Item>

    <Menu.Item key="/auth/logout">
      <Link href="/auth/logout">Logout</Link>
    </Menu.Item>
  </>
);

interface UserLinksProps {}

export default UserLinks;
