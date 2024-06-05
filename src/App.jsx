import Client from "./components/Client";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Review from "./components/Review";
import Service from "./components/Service";

export default function App() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <Hero />
      <Product />
      <Service />
      <Client />
      <Review />
      <Footer />
    </main>
  );
}
