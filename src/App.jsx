import React, { useState, useEffect } from "react";
import UsernameEntry from "./components/UsernameEntry";
import ProductList from "./components/ProductList";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import CategoryBar from "./components/CategoryBar";
import Footer from "./components/Footer";
import initialProducts from "./data/products";

export default function App() {
  const [username, setUsername] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  
{/* local storage */}
  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    const savedOrders = localStorage.getItem("orders");

    if (savedUser) {
      setUsername(JSON.parse(savedUser));
    }

    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  useEffect(() => {
    if (username) {
      localStorage.setItem("username", JSON.stringify(username));
    }
  }, [username]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const toggleWishlist = (product) => {
    const exists = wishlist.find((p) => p.id === product.id);
    exists
      ? setWishlist(wishlist.filter((i) => i.id !== product.id))
      : setWishlist([...wishlist, product]);
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const placeOrder = () => {
    if (!cart.length) return;
    setOrders([...orders, cart]);
    setCart([]);
    alert("Order placed!");
  };

  const filteredProducts = initialProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || p.category === category)
  );

  if (!username) return <UsernameEntry setUsername={setUsername} />;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-1 p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
  <div className="flex items-center gap-1">
    <img 
      src="/images/logo.jpg"
      alt="eShoppee Logo" 
      className="w-12 h-10 object-contain"/>
    <h1 className="text-2xl font-bold text-purple-600"> eShoppee </h1>
  </div>
  <span className="font-medium text-gray-700">
     {username.name} </span>
</div>
        {/* Search */}
        <input
          className="w-full p-2 border rounded mb-4"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}/>

        {/* Navigation */}
        <div className="flex flex-wrap gap-3 mb-6">

          {["home","wishlist","cart","orders"].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600 transition" >
              {p.toUpperCase()}
            </button>
          ))}
        </div>

        {page === "home" && (
          <>
            <CategoryBar selected={category} setSelected={setCategory} />

            <ProductList
              products={filteredProducts}
              addToCart={addToCart}
              addToWishlist={toggleWishlist}
              wishlist={wishlist}  />

            <div className="mt-12 bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-center text-purple-600 mb-8">
                Why Choose Us?
              </h2>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 hover:shadow-lg rounded-lg transition">
                  <div className="text-4xl mb-3">🚚</div>
                  <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                  <p className="text-gray-600 text-sm">
                    Get your products delivered quickly and safely to your doorstep.
                  </p>
                </div>

                <div className="p-4 hover:shadow-lg rounded-lg transition">
                  <div className="text-4xl mb-3">💳</div>
                  <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
                  <p className="text-gray-600 text-sm">
                    100% secure payment options for a safe shopping experience.
                  </p>
                </div>

                <div className="p-4 hover:shadow-lg rounded-lg transition">
                  <div className="text-4xl mb-3">⭐</div>
                  <h3 className="font-semibold text-lg mb-2">Quality Products</h3>
                  <p className="text-gray-600 text-sm">
                    Carefully selected products with guaranteed quality.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        {page === "wishlist" && (
          <Wishlist
            items={wishlist}
            addToCart={addToCart}
            removeFromWishlist={(id) =>
              setWishlist(wishlist.filter((i) => i.id !== id))  }  />
        )}

        {page === "cart" && (
          <Cart cart={cart} setCart={setCart} placeOrder={placeOrder} /> )}
        {page === "orders" && <Orders orders={orders} />}
      </div>
      <Footer />
    </div>
  );
}
