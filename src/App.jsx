import React, { useState } from "react";
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
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold text-purple-600">eShoppee</h1>
          <span>{username.name}</span>
        </div>

        {/* Search */}
        <input
          className="w-full p-2 border rounded mb-4"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Navigation */}
        <div className="flex flex-wrap gap-3 mb-6">

          {["home","wishlist","cart","orders"].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600 transition"
            >
              {p.toUpperCase()}
            </button>
          ))}

        </div>

        {/* Pages */}

        {page === "home" && (
          <>
            <CategoryBar selected={category} setSelected={setCategory} />

            <ProductList
              products={filteredProducts}
              addToCart={addToCart}
              addToWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          </>
        )}

        {page === "wishlist" && (
          <Wishlist
            items={wishlist}
            addToCart={addToCart}
            removeFromWishlist={(id) =>
              setWishlist(wishlist.filter((i) => i.id !== id))
            }
          />
        )}

        {page === "cart" && (
          <Cart cart={cart} setCart={setCart} placeOrder={placeOrder} />
        )}

        {page === "orders" && <Orders orders={orders} />}

      </div>

      <Footer />

    </div>
  );
}
