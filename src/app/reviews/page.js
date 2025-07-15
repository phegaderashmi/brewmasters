"use client";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";

const reviews = [
  {
    name: "Yash Phegade",
    image: "/Yash.jpeg",
    text: "Loved the filter coffee! Reminded me of my trip to Coorg. Ambience is super chill too.",
    rating: 5,
  },
  {
    name: "Sakshi Solat",
    image: "/Sakshi.jpeg",
    text: "Perfect place to hang out with friends. Their cold coffee and sandwiches are must-try!",
    rating: 4.5,
  },
  {
    name: "Gaurav Kini",
    image: "/Gaurav.jpeg",
    text: "Great experience. Staff is polite, service is fast, and the masala chai is 💯!",
    rating: 4.5,
  },
];

export default function ReviewSection() {
  return (
    <>
      <Navbar />
      <section id="review" className="py-5" style={{ backgroundColor: "#000" }}>
        <div className="container">
          {/* Heading */}
          <h2 className="text-center text-uppercase fw-bold mb-5">
            <span style={{ color: "#d2a679", fontSize: "2.5rem" }}>
              Customer&apos;s
            </span>{" "}
            <span className="text-white" style={{ fontSize: "2.5rem" }}>
              Review
            </span>
          </h2>

          {/* Review Cards */}
          <div className="row g-4">
            {reviews.map((review, idx) => (
              <div className="col-md-4" key={idx}>
                <div
                  className="card text-center shadow-lg p-4"
                  style={{
                    background: "rgba(28,28,28,0.85)",
                    color: "#fff",
                    border: "1px solid rgba(210, 166, 121, 0.3)",
                    borderRadius: "16px",
                    backdropFilter: "blur(10px)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 0 15px #d2a67966";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Quote Icon */}
                  <div className="text-center mb-3">
                    <Image
                      src="/quote-img.png"
                      alt="quote"
                      width={35}
                      height={35}
                    />
                  </div>

                  {/* Review Text */}
                  <p
                    className="mb-4"
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      minHeight: "90px",
                    }}
                  >
                    {review.text}
                  </p>

                  <div className="text-center mb-3">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={150}
                      height={150}
                      className="rounded-circle"
                      style={{
                        objectFit: "cover",
                        border: "2px solid #d2a679",
                        boxShadow: "0 0 12px rgba(210, 166, 121, 0.5)",
                      }}
                    />
                  </div>

                  {/* Name */}
                  {/* Reviewer Name */}
                  <h5
                    className="fw-bold mb-2 text-uppercase"
                    style={{
                      color: "#d2a679",
                      letterSpacing: "1px",
                      fontSize: "1.1rem",
                    }}
                  >
                    {review.name}
                  </h5>

                  {/* Star Rating */}
                  <div className="d-flex justify-content-center gap-1">
                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                      <FaStar
                        key={i}
                        color="#ffd700"
                        style={{
                          filter: "drop-shadow(0 0 4px #ffd70099)",
                          fontSize: "1rem",
                        }}
                      />
                    ))}
                    {review.rating % 1 !== 0 && (
                      <FaStarHalfAlt
                        color="#ffd700"
                        style={{
                          filter: "drop-shadow(0 0 4px #ffd70099)",
                          fontSize: "1rem",
                        }}
                      />
                    )}
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
