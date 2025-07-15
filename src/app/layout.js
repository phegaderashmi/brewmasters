import "../app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "BrewMasters",
  description: "A Cozy Coffee Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100 bg-black">
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
