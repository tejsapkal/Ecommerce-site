import React, { useState } from "react";

const Cart = ({ cart = [], setCart, placeOrder }) => {
  const [buyerInfo, setBuyerInfo] = useState({ name: "", address: "", phone: "" });

  const updateQuantity = (id, delta) => {
    setCart(
      cart.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handlePlaceOrder = () => {
    const { name, address, phone } = buyerInfo;

    if (!name || !address || !phone) {
      alert("Please fill in all delivery details.");
      return;
    }

    placeOrder(cart);
    setCart([]);
    setBuyerInfo({ name: "", address: "", phone: "" });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="border-b py-4 flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 py-1 bg-gray-200 rounded">
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 py-1 bg-gray-200 rounded">
                    +
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p>Total: ₹{item.price * item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm mt-2">
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right font-semibold text-lg mt-4">
            Cart Total: ₹{total}
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">🚚 Delivery Details</h3>
            <input
              type="text"
              placeholder="Name"
              value={buyerInfo.name}
              onChange={(e) => setBuyerInfo({ ...buyerInfo, name: e.target.value })}
              className="w-full border p-2 rounded mb-2"/>
            <input
              type="text"
              placeholder="Address"
              value={buyerInfo.address}
              onChange={(e) => setBuyerInfo({ ...buyerInfo, address: e.target.value })}
              className="w-full border p-2 rounded mb-2" />
            <input
              type="text"
              placeholder="Phone"
              value={buyerInfo.phone}
              onChange={(e) => setBuyerInfo({ ...buyerInfo, phone: e.target.value })}
              className="w-full border p-2 rounded mb-4" />
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
              ✅ Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
