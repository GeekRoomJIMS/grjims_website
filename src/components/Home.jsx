import Contact from "./Contact";
import Faq from "./Faq";
import Footer from "./Footer";
import Hero from "./hero/Hero";
import Navbar from "./hero/Navbar";
import Index from "./Index";

const Home = () => {
  return (
    <div>
      <section className="h-[100vh]">
        <Navbar />
        <Hero />
      </section>
      {/* <Index /> */}
      {/* <Faq /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
