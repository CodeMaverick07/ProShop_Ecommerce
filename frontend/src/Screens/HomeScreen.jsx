import React from "react";
import Product from "../components/Product";
import { useState, useEffect } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="mt-16">
      <div className="grid  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-cols-4 mx-12 px-4 md:mx-0 md:px-0">
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
