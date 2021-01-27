import React from "react";
import { Result, Button } from "antd";
import Link from "next/link";
import LayoutComponent from "../../components/LayoutComponent";

const RegisterSuccess: React.FC<RegisterSuccessProps> = () => {
  return (
    <>
      <LayoutComponent title="Registered Successfully!">
        <div>
          <Result
            status="success"
            title="Successfully Registered!"
            subTitle="Please check the mail that we sent you!"
            extra={[
              <Button key="goMainPage">
                <Link href="/">Go Main Page</Link>
              </Button>,
            ]}
          />
        </div>
      </LayoutComponent>
    </>
  );
};

interface RegisterSuccessProps {}

export default RegisterSuccess;
