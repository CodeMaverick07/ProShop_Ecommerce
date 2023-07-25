import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="flex justify-center my-3">
      <div className="h-80 w-72 border-2 border-gray-300 shadow-xl">
        <Link to={`/product/${product._id}`}>
          <img className="p-4 rounded-lg" src={product.image} alt="" />
        </Link>

        <div className="pl-4 ">
          <Link to={`/product/${product._id}`}>
            <h3 className="text-lg font-mono">{product.name}</h3>
          </Link>
          <div className="flex text-xs">
            <Rating rating={product.rating} noReview={product.numReviews} />
          </div>
          <h1 className="text-xl font-bold font-mono">{product.price}</h1>
        </div>
      </div>
    </div>
  );
};

export default Product;
