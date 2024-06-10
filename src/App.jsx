import Client from "./components/Client";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Review from "./components/Review";
import Service from "./components/Service";
import Product from "./components/Product";
import Service1 from "./components/Service1";

export default function App() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <Service1/>
      {/* <Services/> */}
      {/* <Product /> */}
      <Client />
      <Review />
      <Footer />
    </main>
  );
}
