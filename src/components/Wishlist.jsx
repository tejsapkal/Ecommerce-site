import React from "react";

const Wishlist = ({ items = [], addToCart, removeFromWishlist }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">💖 Wishlist</h2>

      {items.length === 0 ? (
        <p className="text-gray-600">No items in wishlist.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded shadow text-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-contain mx-auto mb-2"/>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600 mb-3">₹{item.price}</p>

              <button
                onClick={() => addToCart(item)}
                className="bg-blue-500 text-white px-3 py-1 rounded mb-2">
                Add
              </button>

              <button
                onClick={() => removeFromWishlist(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
