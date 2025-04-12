import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Lenis from "lenis";
import { useEffect } from "react";
import UtterYourThoughts from "./components/UtterYourThoughts";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.9,
    });
    let animationFrameId;
    const raf = (time) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/utter-your-thoughts" element={<UtterYourThoughts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
