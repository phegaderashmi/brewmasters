import "../app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BrewMasters</title>
        <meta name="description" content="A Cozy Coffee Experience" />
        <link rel="icon" href="/favicon-v2.ico" type="image/x-icon" />
      </head>
      <body className="d-flex flex-column min-vh-100 bg-black">
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
