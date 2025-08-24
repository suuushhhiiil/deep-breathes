import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./components/Home/Home.jsx";
import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx";

gsap.registerPlugin(ScrollTrigger);

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    // Create Lenis instance
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // GSAP + Lenis sync
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Refresh ScrollTrigger after route change
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  }, [location.pathname]);

  return null;
}

function Root() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);