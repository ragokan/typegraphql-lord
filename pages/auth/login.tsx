import Layout from "../../components/Layout";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";

interface LoginFormTypes {
  email: string;
  password: string;
}

const LoginPage = () => {
  const onFinish = ({ email, password }: LoginFormTypes) => console.log({ email, password });
  return (
    <Layout title="Login">
      <div className="block">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Login</h2>
          </div>
          <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item name="email" rules={[{ required: true, message: "Please enter a valid email!" }]}>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "Please enter a valid password!" }]}>
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Login
              </Button>
              <br />
              or <Link href="/auth/register">Register Now!</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
