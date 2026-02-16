import React from "react";

const categories = [
  { name: "All", image: "/images/All.jpg" },
  { name: "Beauty", image: "/images/beauty.jpg" },
  { name: "Fashion", image: "/images/fashion.jpg" },
  { name: "Mobiles", image: "/images/mobiles.jpg" },
  { name: "Electronics", image: "/images/electronics.jpg" },
  { name: "Home", image: "/images/home.jpg" },
];

function CategoryBar({ selected, setSelected }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Title */}
      <h2 className="text-2xl font-bold text-black mb-4">
        Brows By Categories
      </h2>

      {/* banners */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => setSelected(cat.name)}
            className="w-40 h-20 rounded overflow-hidden cursor-pointer relative">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover"/>
            <div className="absolute bottom-0 w-full text-center text-sm font-semibold bg-white bg-opacity-70 py-1">
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryBar;
