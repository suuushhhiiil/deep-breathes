import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useOfferingsAnimation = (
  offeringContainerRef,
  offeringElementsRef
) => {
  const container = offeringContainerRef.current;
  const element = offeringElementsRef.current;


  useEffect(() => {
    if (!offeringContainerRef.current) return;

    gsap.fromTo(
      container,
      {
        transform: "perspective(1500px) rotateX(55deg)",
        scale: 1.5,
      },
      {
        transform: "perspective(1500px) rotateX(0deg)",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "t",
          scrub: 1,
          markers: true,
        }
      }
    );
  });
};
