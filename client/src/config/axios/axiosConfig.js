import axios from "axios";

const getBaseUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "/api";
  } else {
    return "http://localhost:4000/api";
  }
};

const axiosInstance = axios.create({
  baseURL: getBaseUrl(),
});

export default axiosInstance;
