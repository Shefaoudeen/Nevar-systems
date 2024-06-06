import Client from "./components/Client";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Review from "./components/Review";
import Service1 from "./components/Service1";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Service1/>
      {/* <Services/> */}
      <Product />
      <Client />
      <Review />
      <Footer />
    </main>
  );
}
