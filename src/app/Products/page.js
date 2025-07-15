"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import {
  FaShoppingCart,
  FaHeart,
  FaEye,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Classic Filter Coffee",
    image: "/product-1.png",
    price: "₹149",
    oldPrice: "₹199",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Hazelnut Brew",
    image: "/product-2.png",
    price: "₹179",
    oldPrice: "₹229",
    rating: 5,
  },
  {
    id: 3,
    name: "Chocolate Mocha",
    image: "/product-3.png",
    price: "₹199",
    oldPrice: "₹249",
    rating: 4.5,
  },
];

export default function Products() {
  return (
    <>
      <Navbar />
      <section
        id="products"
        className="py-5"
        style={{ backgroundColor: "#000" }}
      >
        <div className="container">
          <h2 className="text-center text-uppercase fw-bold mb-5">
            <span style={{ color: "#d2a679" }}>Our</span>{" "}
            <span className="text-white">Products</span>
          </h2>

          <div className="row g-4">
            {products.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div
                  className="card h-100 text-center"
                  style={{
                    backgroundColor: "#1c1c1c",
                    border: "none",
                    color: "#fff",
                    position: "relative",
                  }}
                >
                  {/* Icons */}
                  <div
                    className="d-flex justify-content-center gap-3 py-2"
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      zIndex: 2,
                    }}
                  >
                    <FaShoppingCart
                      className="text-white"
                      style={{ cursor: "pointer" }}
                    />
                    <FaHeart
                      className="text-white"
                      style={{ cursor: "pointer" }}
                    />
                    <FaEye
                      className="text-white"
                      style={{ cursor: "pointer" }}
                    />
                  </div>

                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={300}
                    className="card-img-top img-fluid"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{product.name}</h5>

                    {/* Star Ratings */}
                    <div className="mb-2">
                      {[...Array(Math.floor(product.rating))].map((_, i) => (
                        <FaStar key={i} style={{ color: "#d2a679" }} />
                      ))}
                      {product.rating % 1 !== 0 && (
                        <FaStarHalfAlt style={{ color: "#d2a679" }} />
                      )}
                    </div>

                    {/* Price */}
                    <p className="card-text">
                      <span
                        className="me-2 fw-bold"
                        style={{ color: "#d2a679" }}
                      >
                        {product.price}
                      </span>
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "#aaa",
                        }}
                      >
                        {product.oldPrice}
                      </span>
                    </p>

                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#d2a679",
                        color: "#000",
                        fontWeight: "600",
                        padding: "8px 20px",
                        borderRadius: "4px",
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
