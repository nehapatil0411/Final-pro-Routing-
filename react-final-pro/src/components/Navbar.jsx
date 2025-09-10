
import React, { useState } from "react";
import { NavLink } from "react-router";
import Login from "./Login";

const Navbar = () => {
  const [isAuth, setisAuth] = useState(localStorage.getItem("token"));

  const data = [
    { id: 1, path: "/", text: "Home" },
    { id: 2, path: "/Product", text: "Product" },
    { id: 3, path: "/AddProduct", text: "AddProduct" },
    { id: 4, path: "/Edit", text: "Edit" },
  ];

  return (
    <div className="container">
      <nav className=" p-3 d-flex justify-content-between bg-warning">
        {data.map((el) => (
          <div key={el.id}>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "white",
                      backgroundColor: "black",
                      padding: "10px",
                      textDecoration: "none",
                      borderRadius: "10px",
                    }
                  : {
                      color: "black",
                      backgroundColor: "white",
                      padding: "10px",
                      textDecoration: "none",
                      borderRadius: "10px",
                    }
              }
              to={el.path}
            >
              {el.text}
            </NavLink>
          </div>
        ))}
        <div>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "white",
                    backgroundColor: "black",
                    padding: "10px",
                    textDecoration: "none",
                    borderRadius: "10px",
                  }
                : {
                    color: "black",
                    backgroundColor: "white",
                    padding: "10px",
                    textDecoration: "none",
                    borderRadius: "10px",
                  }
            }
            to={"/login"}
          >
            {!isAuth ? "Login" : "Logout"}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
