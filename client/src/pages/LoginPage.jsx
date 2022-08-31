import React from "react";
import { useSearchParams } from "react-router-dom";

const LoginPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const accessToken = searchParams.get("__access_token");

  console.log(accessToken);

  return <div>You need an invite to access this website</div>;
};

export default LoginPage;
