import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axiosInstance from "../config/axios/axiosConfig";

const LoginPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [user, setUser] = useState();

  const authenticateUser = async (token) => {
    const result = await axiosInstance.post("/users/authenticate_user", {
      access_token: token,
    });

    if (result.data) {
      window.localStorage.setItem("fantrax_token", result.data.access_token);
      setUser(result.data.access_token);
    }
  };

  useEffect(() => {
    const token =
      window.localStorage.getItem("fantrax_token") ||
      searchParams.get("__access_token");

    const fetchUser = async () => {
      return await authenticateUser(token);
    };
    fetchUser();
  }, []);

  return <div>You need an invite to access this website</div>;
};

export default LoginPage;
