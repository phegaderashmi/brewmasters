"use client";

import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom px-3 py-1">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image src="/logo.png" alt="Logo" width={80} height={65} />
        </Link>

        {/* Navigation Links */}
        <ul className="navbar-nav mx-auto d-flex flex-row gap-4">
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Menu", path: "/menu" },
            { label: "Products", path: "/Products" },
            { label: "Review", path: "/reviews" },
            { label: "Contact", path: "/contact" },
            { label: "Blogs", path: "/blogs" },
          ].map((item) => (
            <li className="nav-item" key={item.label}>
              <Link
                className="nav-link text-white fw-bold"
                href={item.path}
                style={{ fontSize: "20px" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="d-flex align-items-center gap-3">
          <FaSearch
            className="text-white"
            style={{ fontSize: "25px", cursor: "pointer" }}
          />
          <FaShoppingCart
            className="text-white"
            style={{ fontSize: "25px", cursor: "pointer" }}
          />
          <FaUserCircle
            className="text-white"
            style={{ fontSize: "25px", cursor: "pointer" }}
            title="Profile"
          />
        </div>
      </div>
    </nav>
  );
}
