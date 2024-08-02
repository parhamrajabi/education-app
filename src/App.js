import "./App.css";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Title from "./Components/Title/Title";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="WHAT We Offer" />
        <Programs />
        <About />
        <Title subTitle="GALLERY" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Students Says" />
        <Testimonials />
        <Title subTitle="CONTACT US" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
