import { Alert } from "antd";
import React from "react";

export const AlertComponent: React.FC<{ message?: string; type?: "error" | "success" }> = ({
  message = "An error happened, please try again",
  type = "error",
}) => <Alert message={message} type={type} closable className="alert-5" />;
