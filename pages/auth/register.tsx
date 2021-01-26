import Layout from "../../components/Layout";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";

interface RegisterFormTypes {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

const RegisterPage = () => {
  const onFinish = ({ email, password, firstname, lastname }: RegisterFormTypes) =>
    console.log({ email, password, firstname, lastname });
  return (
    <Layout title="Register">
      <div className="block">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Register</h2>
          </div>

          <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item style={{ marginBottom: 0 }}>
              <Form.Item
                name="firstname"
                rules={[{ required: true, message: "Please enter your name." }]}
                style={{ display: "inline-block", width: "calc(50% - 8px)" }}
              >
                <Input placeholder="Name" type="text" />
              </Form.Item>
              <Form.Item
                name="lastname"
                rules={[{ required: true, message: "Please enter your surname." }]}
                style={{ display: "inline-block", width: "calc(50% - 8px)", margin: "0 8px" }}
              >
                <Input placeholder="Surname" type="text" />
              </Form.Item>
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true, message: "Please enter a valid email!" }]}>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "Please enter a valid password!" }]}>
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Register
              </Button>
              <br />
              or <Link href="/auth/login">Login Now!</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
