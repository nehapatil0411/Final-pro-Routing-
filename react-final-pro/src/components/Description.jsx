import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { toast } from 'react-toastify';
import ProductCard from './ProductCard';
import { useParams } from 'react-router';

const Description = () => {
    const [fetchedData, setfetchData] = useState([]);
  const [loading, setloading] = useState(false);

  const {id} = useParams()
 

  const fetchedDataFromServer = async () => {
    setloading(true);
    try {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      setfetchData(res.data);
      toast.success("Data Fetched Successful !", {
        position: "bottom-right",
      });
      setloading(false);
    } catch (error) {
      console.log(error);
      toast.error("Data not Found!", {
        position: "bottom-right",
      });
    }
  };

  useEffect(() => {
    fetchedDataFromServer();
  }, []);

  return (
    <div className='container mt-5 p-5' style={{border:"2px solid black"}}>
        <div className="row">
            <div className="col-5" style={{borderRight:"2px solid black"}}>
                <img src={fetchedData.image} alt="" height={"500px"}/>
            </div>
            <div className="col-6 ps-5 align-content-center">
                <h2>{fetchedData.title}</h2> 
                <h4>{fetchedData.category}</h4><br />
                <p>{fetchedData.description}</p>
                <h3>${fetchedData.price}</h3>
                <button className='btn btn-outline-primary mt-5'>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Description