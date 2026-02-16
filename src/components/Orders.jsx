import React from "react";

const Orders = ({ orders = [] }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>

      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map((order, index) => {
          const total = order.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );

          return (
            <div key={index} className="mb-6 border p-4 rounded">
              <h3 className="font-semibold mb-2">Order #{index + 1}</h3>

              {order.map((item) => (
                <div key={item.id} className="mb-2">
                  <p className="font-semibold">{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.price * item.quantity}</p>
                  <hr className="my-2" />
                </div>
              ))}

              <p className="text-right font-semibold mt-2">Total: ₹{total}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Orders;
