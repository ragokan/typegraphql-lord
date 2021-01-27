import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { AlertComponent } from "../../../components/AlertComponent";
import LayoutComponent from "../../../components/LayoutComponent";
import { useConfirmEmailMutation } from "../../../generated/apolloComponents";

const ConfirmWithToken: React.FC<ConfirmWithTokenProps> = () => {
  const router = useRouter();
  const { token } = router.query;
  const [useConfirm, { error }] = useConfirmEmailMutation();

  useEffect(() => {
    const asyncHandler = async () => {
      try {
        const { data } = await useConfirm({ variables: { token: token as string } });
        if (data?.status) {
          localStorage.setItem("isLogged", "E = mc2");
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
    asyncHandler();
  }, [token, useConfirm]);

  return (
    <LayoutComponent title="Confirm Email">
      {error?.message && <AlertComponent message="Token is not valid, please get a new token!" />}
    </LayoutComponent>
  );
};

interface ConfirmWithTokenProps {}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} as ConfirmWithTokenProps };
};

export default ConfirmWithToken;
