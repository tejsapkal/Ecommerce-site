import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function ProductList({ products, addToCart, addToWishlist, wishlist }) {
  return (
    <div className="mt-12 bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-center text-purple-600 mb-8">
                🛒 Explore Our Products
              </h2>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))]">
        {products.map((product) => {
          const isWishlisted = wishlist.some((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              className="bg-white p-3 rounded-lg shadow"  >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[150px] object-cover rounded mb-2" />

              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-base">{product.name}</h2>
                <button
                  onClick={() => addToWishlist(product)}
                  className={`text-xl ${
                    isWishlisted ? "text-red-500" : "text-gray-400"
                  }`} >
                  {isWishlisted ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>

              <p className="text-gray-600 mb-2">
                ₹{product.price.toLocaleString("en-IN")}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="bg-purple-600 text-white px-3 py-1 rounded  transition-all duration-200
             hover:bg-purple-700 hover:scale-105  text-sm w-full" >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
