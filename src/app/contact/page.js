"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section
        id="contact"
        className="py-5"
        style={{ backgroundColor: "#000" }}
      >
        <div className="container">
          {/* Heading */}
          <h2 className="text-center text-uppercase fw-bold mb-5">
            <span style={{ color: "#d2a679" }}>Contact</span>{" "}
            <span className="text-white">Us</span>
          </h2>

          <div className="row g-5 align-items-center">
            {/* Map Column */}
            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden shadow-lg border border-2 border-dark">
                <iframe
                  title="BrewMasters Vapi Map"
                  className="w-100"
                  height="350"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.1023!2d72.9177776!3d20.3896944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c3de582b2b7b%3A0xf960d0041a1035b6!2s301%20Fortune%20Mall%2C%20Atithi%20Rd%2C%20above%20Jade%20Blue%2C%20GIDC%2C%20Vapi%2C%20Gujarat%20396191!5e0!3m2!1sen!2sin!4v1721031306797!5m2!1sen!2sin"
                ></iframe>
              </div>
            </div>

            {/* Contact Info Column */}
            <div className="col-lg-6 text-white">
              <div
                className="p-4 rounded-4 shadow"
                style={{ backgroundColor: "#1c1c1c" }}
              >
                <div className="mb-4 d-flex align-items-start gap-3">
                  <FaPhoneAlt size={20} color="#d2a679" />
                  <div>
                    <h5 className="mb-1 fw-bold">Phone</h5>
                    <p className="mb-0">+91 8153818569</p>
                  </div>
                </div>

                <div className="mb-4 d-flex align-items-start gap-3">
                  <FaEnvelope size={20} color="#d2a679" />
                  <div>
                    <h5 className="mb-1 fw-bold">Email</h5>
                    <p className="mb-0">info@brewmasters.in</p>
                  </div>
                </div>

                <div className="mb-2 d-flex align-items-start gap-3">
                  <FaMapMarkerAlt size={20} color="#d2a679" />
                  <div>
                    <h5 className="mb-1 fw-bold">Location</h5>
                    <p className="mb-0">
                      301 Fortune Mall, Atithi Rd, <br />
                      above Jade Blue, GIDC, <br />
                      Vapi, Gujarat 396191
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
