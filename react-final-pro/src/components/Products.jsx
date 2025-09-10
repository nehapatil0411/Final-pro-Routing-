import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { data } from "react-router";
import ProductCard from "./ProductCard";
import { toast } from "react-toastify";

const Products = () => {
  const [fetchedData, setfetchData] = useState([]);
  const [loading, setloading] = useState(false);
  const [filter, setfilter] = useState(null);
  const [search, setsearch] = useState(null);

  console.log(filter);
  const fetchedDataFromServer = async () => {
    setloading(true);
    try {
      const res =
        filter || search
          ? await axios.get("http://localhost:3000/products", {
              params: {
                category: filter,
                title_like: search,
              },
            })
          : await axios.get("http://localhost:3000/products");

      setfetchData(res.data);
      setloading(false);
      //       toast.success("Data Fetched Successful !", {
      //   position: "bottom-right",
      // });
    } catch (error) {
      console.log(error);
      toast.error("Data not Found!", {
        position: "bottom-right",
      });
    }
  };

  useEffect(() => {
    fetchedDataFromServer();
  }, [filter, search]);

  return (
    <div className="container mt-5">
      <h1>Products</h1>
      <div className="d-flex justify-content-end">
        <input
          type="text"
          placeholder="Search....."
          className="m-2 p-2"
          style={{ height: "40px", width: "300px" }}
          value={search || ""}
          onChange={(e) => setsearch(e.target.value)}
        />

        <select
          name=""
          className="m-2"
          style={{ height: "40px", width: "200px" }}
          onChange={(e) => setfilter(e.target.value)}
        >
          <option value="">Select category</option>
          <option value={"beauty"}>beauty</option>
          <option value={"fragrances"}>fragrances</option>
          <option value={"furniture"}>furniture </option>
          <option value={"groceries"}>groceries</option>
        </select>
      </div>

      <div className="d-flex justify-content-center flex-wrap">
        {loading ? (
          <h1 className="text-danger">Loading</h1>
        ) : (
          fetchedData.map((el) => <ProductCard key={el.id} {...el} />)
        )}
      </div>
    </div>
  );
};

export default Products;
Products;

