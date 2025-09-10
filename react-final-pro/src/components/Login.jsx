
import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isAuth, setisAuth] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setisAuth(null);
    location.reload();
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = { email: email, password: password };
    console.log(userData);

    try {
      const res = await axios.post("https://reqres.in/api/login", userData, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": " reqres-free-v1",
        },
      });
      localStorage.setItem("token", res.data.token);
      setemail("");
      setpassword("");
      setisAuth(localStorage.getItem("token"));
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return isAuth ? (
    <div className="container m-5 align-center">
      <h1>Login Successful.....!</h1>
      <button className="btn btn-danger" onClick={() => handleLogout()}>
        Logout
      </button>
    </div>
  ) : (
    <div className="container mt-5">
      <div>
        <h1>Login</h1>
        <form action="" onSubmit={handleLogin}>
          <label htmlFor="">Email</label> <br />
          <input
            className="m-2 w-50"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <input
            className="m-2 w-50"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />{" "}
          <br />
          <input type="submit" className="m-2 mt-4 btn btn-primary" />
        </form>
        <p className="text-danger">*Login to view a Products</p>

        <p>
          <strong>Default Email :- </strong>eve.holt@reqres.in
        </p>
      </div>
    </div>
  );
};

export default Login;
