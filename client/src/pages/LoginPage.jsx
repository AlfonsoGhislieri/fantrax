import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axiosInstance from "../config/axios/axiosConfig";

const LoginPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const accessToken = searchParams.get("__access_token");

  console.log(accessToken);

  const authenticateUser = async () => {
    const result = await axiosInstance.post("/users/authenticate_user", {
      access_token: accessToken,
    });
    return result.data;
  };

  useEffect(async () => {
    console.log(await authenticateUser());
  }, []);

  return <div>You need an invite to access this website</div>;
};

export default LoginPage;
