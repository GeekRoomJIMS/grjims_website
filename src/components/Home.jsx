import Contact from "./Contact";
import Faq from "./faqs/Faq";
import Footer from "./Footer";
import Hero from "./hero/Hero";
import Navbar from "./hero/Navbar";
import Index from "./Index";
import CarouselComponent from "./CarouselComponent";

const Home = () => {
  return (
    <div>
      <section className="h-[100vh]">
        <Hero />
      </section>
      <Index />
      <CarouselComponent />
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;
