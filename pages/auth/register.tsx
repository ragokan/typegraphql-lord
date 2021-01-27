import Layout from "../../components/LayoutComponent";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRegisterMutation } from "../../generated/apolloComponents";
import { useRouter } from "next/router";
import { AlertComponent } from "../../components/AlertComponent";

interface RegisterFormTypes {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const RegisterPage = () => {
  const [doRegister, { error, data }] = useRegisterMutation();
  const router = useRouter();

  const onFinish = async ({ email, password, firstName, lastName }: RegisterFormTypes) => {
    try {
      await doRegister({ variables: { data: { email, password, firstName, lastName } } });
      router.push("/auth/registerSuccess");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="Register">
      <div className="titleHolder">
        <h2>Register</h2>
      </div>
      {error?.message && <AlertComponent message="Mail is probably in use, please try again." />}
      <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="firstName"
            rules={[{ required: true, message: "Please enter your name." }]}
            style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          >
            <Input placeholder="Name" type="text" />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[{ required: true, message: "Please enter your surname." }]}
            style={{ display: "inline-block", width: "calc(50% - 8px)", margin: "0 8px" }}
          >
            <Input placeholder="Surname" type="text" />
          </Form.Item>
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true, message: "Please enter a valid email!", type: "email" }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "Please enter a valid password!", min: 5 }]}>
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
    </Layout>
  );
};

export default RegisterPage;
