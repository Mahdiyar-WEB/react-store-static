import axios from "axios";

const http = () => {
  axios.defaults.baseURL = "http://localhost:5000/api";

  const login = async (userDetails) => {
    return await axios.post("/user/login", userDetails);
  };
  const register = async (userDetails) => {
    return await axios.post("/user/register", userDetails);
  };

  return { login, register };
};

export default http;
