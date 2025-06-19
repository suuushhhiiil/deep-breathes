import React, { useEffect, useRef } from 'react'
import "../styles/Offerings.css"; import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { features } from '../utils/Sources';

gsap.registerPlugin(ScrollTrigger);

const Offerings = () => {

  const offeringContainerRef = useRef(null);
  const offeringHeadingRef = useRef(null);
  const offeringCardContainerRef = useRef(null);
  const offeringElementsRef = useRef([]);

  useEffect(() => {
    const totalScrollHeight = window.innerHeight * 3;
    const elements = offeringElementsRef.current;
    const container = offeringContainerRef.current;
    const cardContainer = offeringCardContainerRef.current;
    const heading = offeringHeadingRef.current;
    gsap.fromTo(
      container,
      {
        transform: "perspective(1500px) rotateX(-55deg)",
      },
      {
        transform: "perspective(1500px) rotateX(0deg)",
        scale: 1,
        scrollTrigger: {
          trigger: container,
          start: "top 100%",
          end: "top 40%",
          scrub: 1,
          markers: true,
        }
      }
    );
    gsap.to(heading,
      {
        transform: "translateX(-150%)",
        fontSize: '30px',
        scrollTrigger: {
          trigger: cardContainer,
          start: 'top bottom',
          end: 'top 60%',
          scrub: 1,
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className='offering sticky flex justify-center top-[15vh] pt-[8vh] mt-[3px] pb-[30vh] font-sans h-[100vh] bg-blak rounded-[20px]' ref={offeringContainerRef}>
        <div className='font-display text-6xl font-bold text-whie' ref={offeringHeadingRef}>
          What We Offer?
        </div>
      </div>
      <div className='text-white flex justify-center items-center font-sans'>
        <div className='relative' ref={offeringCardContainerRef}>
          {
            features.map((feature, index) => (
              <div
                ref={offeringElementsRef}
                className='sticky top-[38vh] h-[800px] px-[50px] py-[40px] rounded-[20px] my-5 w-[500px]'
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