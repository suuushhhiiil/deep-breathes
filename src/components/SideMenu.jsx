// components/MobileSidebar.jsx
import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MobileSidebar = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const location = useLocation();

  // Animate sidebar open/close
  useEffect(() => {
    const sidebar = sidebarRef.current;
    const overlay = overlayRef.current;

    if (isOpen) {
      gsap.to(sidebar, {
        x: 0,
        duration: 0.4,
        ease: "power3.out",
        pointerEvents: "auto",
      });
      gsap.to(overlay, {
        autoAlpha: 1,
        pointerEvents: "auto",
        duration: 0.3,
      });
    } else {
      gsap.to(sidebar, {
        x: "-100%",
        duration: 0.4,
        ease: "power3.in",
        pointerEvents: "none",
      });
      gsap.to(overlay, {
        autoAlpha: 0,
        pointerEvents: "none",
        duration: 0.3,
      });
    }
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, setIsOpen]);

  // Close on outside click
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        className="fixed inset-0 bg-black bg-opacity-50 z-40 opacity-0 pointer-events-none"
      ></div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 left-0 w-64 h-[100vh] bg-white z-50 shadow-xl transform -translate-x-full p-6 space-y-4"
      >
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <Link to="/" className="block text-lg" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" className="block text-lg" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="/utter-your-thoughts" className="block text-lg" onClick={() => setIsOpen(false)}>
          Utter Your Thoughts
        </Link>
      </div>
    </>
  );
};

export default MobileSidebar;
