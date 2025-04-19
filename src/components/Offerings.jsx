import React, { useEffect, useRef } from 'react'
import "../styles/Offerings.css"; import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Offerings = () => {

  const offeringContainerRef = useRef(null);
  const offeringElementsRef = useRef([]);

  useEffect(() => {
    const totalScrollHeight = window.innerHeight * 3;
    const elements = offeringElementsRef.current;
    const container = offeringContainerRef.current;
    gsap.fromTo(
      container,
      {
        transform: "perspective(1500px) rotateX(15deg) translateY(-40%)",
      },
      {
        transform: "perspective(1500px) rotateX(0deg)",
        scale: 1,
        scrollTrigger: {
          trigger: container,
          start: "top 130%",
          end: "top 80%",
          scrub: 1,
          markers: true,
        }
      }
    );
  }, []);

  return (
    <div className='offering sticky flex justify-center top-[15vh] pt-[25vh] mt-[3px] pb-[30vh] font-sans h-[320vh] bg-black rounded-[20px]' ref={offeringContainerRef}>
      <div className='font-display text-6xl font-bold text-white' ref={(el) => (offeringElementsRef.current[0] = el)}>
        What We Offer?
      </div>
      <div className='font-display text-6xl font-bold text-white' ref={(el) => (offeringElementsRef.current[1] = el)}>
        What We Offer?
      </div>
    </div>
  )
}

export default Offerings;