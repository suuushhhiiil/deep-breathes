import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Offerings = () => {
  useEffect(() => {
    let aboutUs = gsap.utils.toArray(".aboutUs");
    let aboutUsHeading = gsap.utils.toArray(".aboutUsHeading");
    let aboutUsContent = gsap.utils.toArray(".aboutUsContent");
    let aboutUsWelcome = gsap.utils.toArray(".aboutUsWelcome");

    gsap.to(aboutUs, {
      transform: 'perspective(1500px) rotateX(-55deg) translateY(-70%)',
      scale: 0.8,
      scrollTrigger: {
        trigger: aboutUs,
        start: "10% top",
        end: "top -150%",
        scrub: 1,
        markers: true
      },
    });
  }, [])
  return (
    <div className='offering sticky flex justify-center top-0 pt-[25vh] mt-[3px] pb-[30vh] h-[125vh] bg-primary'>Offerings</div>
  )
}

export default Offerings