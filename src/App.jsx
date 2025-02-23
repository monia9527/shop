import "./App.css";
import Background from "./components/Background";
import Collections from "./components/Collections";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Review from "./components/Review";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <Background className="fixed inset-0 min-h-screen w-full -z-10"/>

      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="shop">
          <Shop />
        </section>

        <section id="collections">
          <Collections />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="products">
          <Products />
        </section>

        <section id="review">
          <Review />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
