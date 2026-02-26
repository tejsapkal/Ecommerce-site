# 🛍️ eShoppee – React eCommerce App

A frontend eCommerce application built using React and Tailwind CSS.

This project allows users to browse products, filter by category, search items, add to wishlist, manage cart with quantity control, place orders, and store data using localStorage.

## Features

-  User Login (Name & Email)
-  Search Products
-  Filter by Category
-  Add / Remove from Wishlist
-  Cart Management
  - Add to Cart
  - Increase / Decrease Quantity
  - Remove Items
  - Dynamic Total Calculation
-  Place Order
-  Order History
-  LocalStorage (Username & Orders saved after refresh)
-  Responsive UI

---

##  Tech Stack

- React.js (Functional Components + Hooks)
- JavaScript (ES6)
- Tailwind CSS
- localStorage API

##  Folder Structure

src/
│
├── components/
│   ├── UsernameEntry.js
│   ├── ProductList.js
│   ├── Wishlist.js
│   ├── Cart.js
│   ├── Orders.js
│   ├── CategoryBar.js
│   └── Footer.js
│
├── data/
│   └── products.js
│
└── App.js

---

##  How It Works

1. User enters name and email.
2. Products are displayed with search and category filter.
3. User can add products to Wishlist or Cart.
4. Cart allows quantity update and removal.
5. On placing order:
   - Cart items move to Orders
   - Orders are saved in localStorage
6. Username and Orders remain saved after page refresh.


##  Installation

1. Clone the repository:

git clone https://github.com/tejsapkal/Ecommerce-site.git

2. Go to project folder:

3. Install dependencies:

4. Start the app:

npm run dev

App runs at:
http://localhost:5173

