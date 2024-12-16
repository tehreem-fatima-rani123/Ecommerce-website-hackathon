"use client"
import Image from "next/image";

import { FaShoppingCart } from "react-icons/fa"; // Import required icon

const FeaturedProducts = () => {
  // Product list with appropriate structure
  const products = [
    { id: 1, name: "Library Stool", price: "$20", image: "/image.image.jpeg", tag: "New", icon: "cart" },
    { id: 2, name: "Library Stool Chair", price: "$20", image: "/Image (1).png", tag: "Sale", icon: "cart" },
    { id: 3, name: "Library Stool Chair", price: "$20", image: "/image 123.jpeg", tag: null, icon: "cart" },
    { id: 4, name: "Library Stool Chair", price: "$20", image: "/naina.png", tag: null, icon: "cart" },
  ];

  // Function to render icons with dynamic styles
  const renderIcon = (icon: any, id:any) => {
    if (icon === "cart") {
      return (
        <span
          className={`h-[40px] w-[40px] text-[#007580] rounded-[7px] flex items-center justify-center ${
            id === 1 ? "bg-[#007580] text-[#007580]" : "bg-[#F0F2F3] text-black"
          }`}
        >
          <FaShoppingCart className={`text-lg ${id === 1 ? "text-white" : "text-black"}`} />
        </span>
      );
    }
    // Fallback for missing icons
    return <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded"></div>;
  };

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-start mb-10">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card border rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
          >
            {/* Product Image with Tag */}
            <div className="relative">
              <Image
                src={product.image}
                alt={`Image of ${product.name}`}
                width={400}
                height={300}
                className="w-full h-[300px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/fallback-image.png"; // Use a fallback image in case of an error
                }}
              />
              {product.tag && (
                <span
                  className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white rounded ${
                    product.tag === "New" ? "bg-green-500" : "bg-orange-500"
                  }`}
                >
                  {product.tag}
                </span>
              )}
            </div>
            {/* Product Details */}
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                <p className="text-black mt-1">{product.price || "Price not available"}</p>
              </div>
              {/* Render the specific icon for each product */}
              {renderIcon(product.icon, product.id)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;