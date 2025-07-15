"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";

const menuItems = [
  {
    id: 1,
    name: "Masala Chai",
    image: "/masala_chai.jpeg",
    price: "₹49",
    oldPrice: "₹60",
  },
  {
    id: 2,
    name: "South Indian Filter Coffee",
    image: "/south-indian-filter-coffee.png",
    price: "₹69",
    oldPrice: "₹90",
  },
  {
    id: 3,
    name: "Cold Coffee",
    image: "/Cold Coffee.jpg",
    price: "₹99",
    oldPrice: "₹120",
  },
  {
    id: 4,
    name: "Cappuccino",
    image: "/Cappuccino.jpeg",
    price: "₹129",
    oldPrice: "₹149",
  },
  {
    id: 5,
    name: "Iced Americano",
    image: "/iced-caramel-latte.jpg",
    price: "₹109",
    oldPrice: "₹130",
  },
  {
    id: 6,
    name: "Hazelnut Frappe",
    image: "/Hazelnut Frappe.jpeg",
    price: "₹149",
    oldPrice: "₹179",
  },
];

export default function Menu() {
  return (
    <>
      <Navbar />
      <section id="menu" className="py-5" style={{ backgroundColor: "#000" }}>
        <div className="container">
          <h2 className="text-center text-uppercase fw-bold mb-5">
            <span style={{ color: "#d2a679" }}>Our</span>{" "}
            <span className="text-white">Menu</span>
          </h2>

          <div className="row g-4">
            {menuItems.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div
                  className="card h-100 text-center shadow"
                  style={{
                    backgroundColor: "#1c1c1c",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={500}
                    height={300}
                    className="card-img-top img-fluid"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{item.name}</h5>
                    <p className="card-text">
                      <span
                        className="me-2 fw-bold"
                        style={{ color: "#d2a679" }}
                      >
                        {item.price}
                      </span>
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "#aaa",
                        }}
                      >
                        {item.oldPrice}
                      </span>
                    </p>
                    <a
                      href="#"
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
                    </a>
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
