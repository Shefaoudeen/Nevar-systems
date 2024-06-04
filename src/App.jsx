import Client from "./components/Client";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Review from "./components/Review";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Client />
      <Review />
      <Footer />
    </main>
  );
}
