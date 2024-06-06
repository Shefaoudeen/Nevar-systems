import Client from "./components/Client";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Review from "./components/Review";
import Services from "./components/Services";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services/>
      {/* <Product /> */}
      <Client />
      <Review />
      <Footer />
    </main>
  );
}
