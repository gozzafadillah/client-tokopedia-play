import { useState } from "react";
import UserAPI from "../apis/User.api";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await UserAPI.login({
      username: data.username,
      password: data.password,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email"
          value={data.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />
        <input type="submit" value="Login" id="login" />
      </form>
    </div>
  );
};

export default Login;
