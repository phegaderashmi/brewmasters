"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";

const blogs = [
  {
    id: 1,
    image: "/blog-1.jpeg",
    title: "Tasty and Refreshing Coffee",
    date: "21st May, 2021",
    author: "Admin",
    desc: "Discover how we brew perfection in every cup, from bean to bliss.",
  },
  {
    id: 2,
    image: "/blog-2.jpeg",
    title: "Cold Brew Craze in India",
    date: "10th June, 2021",
    author: "Admin",
    desc: "Why cold brew is becoming the go-to drink for young coffee lovers.",
  },
  {
    id: 3,
    image: "/blog-3.jpeg",
    title: "Best Beans for Filter Coffee",
    date: "5th July, 2021",
    author: "Admin",
    desc: "Find out what makes South Indian filter coffee truly unique.",
  },
];

export default function Blogs() {
  return (
    <>
      <Navbar />
      <section id="blogs" className="py-5" style={{ backgroundColor: "#000" }}>
        <div className="container">
          <h2 className="text-center text-uppercase fw-bold mb-5">
            <span style={{ color: "#d2a679" }}>Our</span>{" "}
            <span className="text-white">Blogs</span>
          </h2>

          <div className="row g-4">
            {blogs.map((blog) => (
              <div className="col-md-4" key={blog.id}>
                <div
                  className="card h-100 shadow-lg"
                  style={{
                    backgroundColor: "#1c1c1c",
                    color: "#fff",
                    borderRadius: "15px",
                    overflow: "hidden",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={300}
                    className="card-img-top img-fluid"
                    style={{ objectFit: "cover", height: "200px" }}
                  />

                  <div className="card-body d-flex flex-column justify-content-between">
                    <a
                      href="#"
                      className="h5 fw-bold mb-2 text-decoration-none"
                      style={{ color: "#d2a679" }}
                    >
                      {blog.title}
                    </a>
                    <span
                      className="mb-2"
                      style={{ fontSize: "0.9rem", color: "#aaa" }}
                    >
                      by {blog.author} / {blog.date}
                    </span>
                    <p style={{ fontSize: "0.95rem" }}>{blog.desc}</p>
                    <a
                      href="#"
                      className="btn mt-3 align-self-start"
                      style={{
                        backgroundColor: "#d2a679",
                        color: "#000",
                        fontWeight: "600",
                        padding: "6px 16px",
                        borderRadius: "4px",
                      }}
                    >
                      Read More
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
