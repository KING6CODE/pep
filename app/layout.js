import "./globals.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "PEPS - Performance Prévention Santé",
  description: "PEPS accompagne Performance, Prévention et Santé.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
