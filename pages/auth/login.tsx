import Layout from "../../components/LayoutComponent";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import { AlertComponent } from "../../components/AlertComponent";
import { useRouter } from "next/router";
import { useLoginMutation } from "../../generated/apolloComponents";

interface LoginFormTypes {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [doLogin, { error, data }] = useLoginMutation();
  const router = useRouter();

  const onFinish = async ({ email, password }: LoginFormTypes) => {
    try {
      await doLogin({ variables: { data: { email, password } } });
      router.push("/");
      localStorage.setItem("isLogged", "E = mc2");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title="Login">
      <div className="titleHolder">
        <h2>Login</h2>
      </div>
      {error?.message && <AlertComponent message="Invalid credentials!" />}
      <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item name="email" rules={[{ required: true, message: "Please enter a valid email!" }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "Please enter a valid password!", min: 5 }]}>
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
    </Layout>
  );
};

export default LoginPage;
