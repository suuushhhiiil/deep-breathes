import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Lenis from "lenis";
import { useEffect } from "react";
import UtterYourThoughts from "./components/UtterYourThoughts";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.9,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/utter-your-thoughts" element={<UtterYourThoughts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
