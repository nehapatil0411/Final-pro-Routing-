import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import Products from "../components/Products";
import AddProduct from "../components/AddProduct";
import Edit from "../components/Edit";
import Login from "../components/Login";
import Description from "../components/Description";
import AuthenticationPage from "../components/AuthenticationPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Product"
          element={
            <AuthenticationPage>
              <Products />
            </AuthenticationPage>
          }
        />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="*"
          element={
            <h1 className="text-center mt-5 text-danger">
              404 Page not found !
            </h1>
          }
        />
        <Route path="/description/:id" element={<Description />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;