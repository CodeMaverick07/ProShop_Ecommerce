import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import products from "../products";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);

  return (
    <div className="mt-16 flex justify-center  ">
      <div className="w-1/2 md:w-full h-full rounded-md">
        <div className="">
          <button className="my-8 flex justify-center items-center text-lg w-20 h-10 rounded-lg hover:bg-gray-400 text-black  bg-slate-200 md:ml-12 ">
            <Link to="/">
              <p className="m-1">Go Back</p>
            </Link>
          </button>
          <div className="my-8 md:mx-12 flex justify-between md:flex-col md:justify-start font-mont text-gray-700">
            <div className="rounded-md">
              <img
                src={product.image}
                alt=""
                className="h-72 w-80 md:h-72 md:w-72"
              />
            </div>
            <div className="md:flex text-gray-700 my-3 flex-col ">
              <div>
                <div className="text-4xl mb-2 ">
                  <span>{product.name}</span>
                </div>
              </div>
              <div className="md:flex">
                <div className="text-lg mb-2">{product.price}</div>
                <hr className="border my-3 md:hidden" />
                <div className="p-1">
                  <Rating
                    rating={product.rating}
                    noReview={product.numReviews}
                  />
                </div>
              </div>

              <hr className="border my-3 md:hidden " />
              <div className="w-48 md:hidden">
                <p className="font-bold mb-1 ">Description:</p>
                <p>{product.description}</p>
              </div>
            </div>
            <div className=" md:my-3 border-2 border-gray-200 text-gray-500 h-56 w-48 md:w-72 shadow-xl font-mont">
              <div className="flex justify-start ml-2 ">
                <div className="flex text-lg my-5">
                  <p>Price:</p>
                  <p className="ml-3 font-bold">{product.price}</p>
                </div>
              </div>
              <hr className="border" />
              <div className="flex text-lg justify-start ml-2 items-center my-5">
                <p>status:</p>
                <p className="ml-2 font-bold">
                  {product.countInStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
              <hr className="border" />
              <div className="flex items-center my-5 justify-center ">
                <button className="flex justify-center items-center font-mont text-lg w-28 h-12 rounded-md hover:bg-gray-600 text-black bg-slate-400 ">
                  <p className="m-1">Add To Cart</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
