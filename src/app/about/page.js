"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="py-5" style={{ backgroundColor: "#000" }}>
        <div className="container">
          <h1
            className="text-center text-uppercase fw-bold mb-5"
            style={{ color: "#d2a679" }}
          >
            About <span className="text-white">Us</span>
          </h1>

          <div className="row align-items-center justify-content-center">
            {/* Left: Image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <Image
                src="/about-img.jpeg"
                alt="Coffee Cup"
                width={800}
                height={500}
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Right: Content */}
            <div className="col-lg-6">
              <div
                className="p-4"
                style={{
                  backgroundColor: "#1c1c1c",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                <h2 className="fw-bold mb-4">What Makes Our Coffee Special?</h2>
                <p className="mb-3">
                  Our beans are carefully sourced, hand-roasted, and brewed with
                  love to create a rich and unforgettable coffee experience.
                </p>
                <p className="mb-4">
                  Whether you love classic filter coffee or experimental blends,
                  BrewMasters brings it all with a cozy ambiance and
                  customer-first attitude.
                </p>
                <Link
                  href="/contact"
                  className="btn"
                  style={{
                    backgroundColor: "#d2a679",
                    color: "#000",
                    fontWeight: "600",
                    padding: "10px 20px",
                    borderRadius: "4px",
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Owner Section */}
          <div
            className="row align-items-center mt-5 pt-5 border-top"
            style={{ borderColor: "#444" }}
          >
            {/* Owner Image */}
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <div
                style={{
                  display: "inline-block",
                  border: "4px solid #d2a679",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <Image
                  src="/owner.jpeg"
                  alt="Umesh Nehte"
                  width={220}
                  height={220}
                  style={{
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>

            {/* Owner Content */}
            <div className="col-md-8 text-white">
              <h3
                className="fw-bold mb-3 text-center position-relative"
                style={{
                  color: "#d2a679",
                  fontSize: "1.8rem",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 20px",
                    border: "2px solid #d2a679",
                    borderRadius: "30px",
                    background: "#1c1c1c",
                    boxShadow: "0 4px 12px rgba(210, 166, 121, 0.3)",
                  }}
                >
                  ☕ Meet the Founder
                </span>
              </h3>

              <h4
                className="fw-semibold mb-3 text-center position-relative"
                style={{
                  fontSize: "1.5rem",
                  letterSpacing: "1px",
                  color: "#ffffff",
                }}
              >
                {/* subtle underline glow */}
                <span
                  style={{
                    position: "relative",
                    display: "inline-block",
                    padding: "4px 18px",
                    borderRadius: "6px",
                    background:
                      "linear-gradient(90deg, rgba(210,166,121,0.25) 0%, rgba(210,166,121,0.15) 100%)",
                  }}
                >
                  <span style={{ color: "#d2a679" }}>Umesh&nbsp;Nehte</span>
                </span>
              </h4>

              <p
                className="mb-3"
                style={{ fontSize: "1rem", lineHeight: "1.7" }}
              >
                <strong>Umesh Nehte</strong>, the founder of{" "}
                <strong>BrewMasters</strong>, is a passionate coffee connoisseur
                and visionary café entrepreneur. His journey started with a
                simple love for perfectly brewed coffee and a desire to create a
                unique space where people can connect over warm conversations
                and rich flavors.
              </p>
              <p
                className="mb-3"
                style={{ fontSize: "1rem", lineHeight: "1.7" }}
              >
                From choosing premium coffee beans to curating every detail of
                the ambience, Umesh brings authenticity and excellence to every
                corner of BrewMasters. His focus on quality, innovation, and a
                customer-first approach is what makes this café more than just a
                coffee stop.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                Located in the heart of Vapi, BrewMasters has become a local
                favorite under his leadership — a go-to destination for coffee
                lovers seeking soul, taste, and a truly comforting experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
