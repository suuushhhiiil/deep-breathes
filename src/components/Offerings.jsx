import React, { useLayoutEffect, useRef } from 'react'
import "../styles/Offerings.css"; import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { features } from '../utils/Sources';

gsap.registerPlugin(ScrollTrigger);

const Offerings = () => {

  const offeringContainerRef = useRef(null);
  const offeringHeadingRef = useRef(null);
  const offeringCardContainerRef = useRef(null);
  const offeringElementsRef = useRef([]);

  useLayoutEffect(() => {
    const totalScrollHeight = window.innerHeight * 3;
    const elements = offeringElementsRef.current;
    const container = offeringContainerRef.current;
    const cardContainer = offeringCardContainerRef.current;
    const heading = offeringHeadingRef.current;
    gsap.fromTo(
      heading,
      {
        x: -1000,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: container,
          start: "20% 20%",
          end: "top top",
          scrub: 1,
          // markers: true,
        }
      }
    );

    // gsap.to(heading,
    //   {
    //     transform: "translateX(-120%)",
    //     fontSize: '50px',
    //     scrollTrigger: {
    //       trigger: cardContainer,
    //       start: 'top bottom',
    //       end: 'top 60%',
    //       scrub: 1,
    //     }
    //   });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className='offering sticky flex justify-center top-[15vh] pt-[8vh] mt-[3px] pb-[30vh] font-sans h-[100vh] bg-blak rounded-[20px]' ref={offeringContainerRef}>
        <div className='font-display text-6xl'>
        <h1 ref={offeringHeadingRef}>
          What We Offer?
        </h1>
        </div>
      </div>
      <div className='relative text-white flex items-center font-sans'>
        <div className='' ref={offeringCardContainerRef}>
          {
            features.map((feature, index) => (
              <div
                ref={offeringElementsRef}
                className='sticky top-[38vh] h-[800px] px-[50px] py-[40px] rounded-[20px] my-5 w-[500px] ml-[20px]'
                key={index}
                style={{ backgroundImage: `url(${feature.image})`, backgroundPosition: `center`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
              >
                {feature.description}
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Offerings;