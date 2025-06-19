import heroImage from "../assets/calm-women.png";
import aboutUsImg from "../assets/hero-background.jpg";
import React, { useEffect, useRef } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import "../styles/About.css";
import gsap from "gsap";
import About from "./About";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const aboutUsRef = useRef(null);
  useEffect(() => {
    let aboutUs = aboutUsRef.current;
    // gsap.fromTo(aboutUs,
    //   {
    //     scale: 2,
    //   },
    //   {
    //     scale: 1,
    //     scrollTrigger: {
    //       trigger: aboutUs,
    //       start: "top 40%",
    //       end: "top 15%",
    //       scrub: 0.5,
    //       markers: true
    //     },
    //   });

    // gsap.to(aboutUs, {
    //   transform: "perspective(1500px) rotateX(50deg) translateY(-40%)",
    //   scrollTrigger: {
    //     trigger: aboutUs,
    //     start: "15% top",
    //     end: "top -100%",
    //     scrub: 0.5,
    //     markers: true,
    //   },
    // });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });

  const buttonStyle = `transition-color duration-400 font-sans rounded-full ld:px-8 px-11 lg:py-2 py-4 font-medium`;
  return (
    <>
      <div className="">
        <div className={`relative px-[20px] lg:px-[100px]  h-[87vh] lg:flex justify-center items-center`}>
          <div className="lg:absolute bottom-[-5px] lg:flex items-start">
            <div className={`lg:mt-[0px] mt-[10px] hidden lg:flex flex-col items-center shrink-0 heroImage`}>
              <img src={heroImage} className="lg:w-[45vh] w-[30vh]" alt="Calm-Lady-Breathing" loading="lazy" />
            </div>
            <div className={`mt-[60px] lg:hidden flex flex-col items-center shrink-0 heroImage`}>
              <img src={heroImage} className="w-[30vh]" alt="Calm-Lady-Breathing" loading="lazy" />
            </div>
            <div className="flex flex-col lg:ml-[100px] space-y-2 lg:w-[50rem]">
              <h1 id="heading" className={`heroHeading font-display font-bold lg:text-[4.8rem] text-[60px] leading-[0.9] text-secondary`}>
                Pause. Breathe. Heal.
              </h1>
              <p className={`lg:text-justify font-sans font-light lg:text-[1.6rem] text-8xl p-[10px]`}>
                Your safe space for mental wellness, growth, and balance.
              </p>
              <div className="lg:flex space-x-3 items-center">
                <Link to="/" className={`${buttonStyle} lg:text-xl text-[18px] text-nowrap font-normal text-white bg-secondary hover:text-black hover:bg-primary`}>
                  Explore
                </Link>
                <Link to="/" className={`${buttonStyle} border-[0.2px] lg:text-xl text-nowrap text-[18px] text-black hover:bg-primary hover:border-primary`}>
                  Join Our Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        //<About />
        <div
          className="aboutUs flex justify-center top-0 pt-[25vh] mt-[3px] pb-[30vh] h-[180vh] px-[15rem]"
          ref={aboutUsRef}
        >
          <div className="px-[15rem]">
            <p className="aboutUsWelcome font-sans text-secondary">
              Welcome to Deep Breathes
            </p>
            <div className="content w-fit justify-between flex">
              <h1 className="aboutUsHeading font-display font-semibold text-[4rem] leading-[1] flex-shrink-0 w-[25rem]">
                Who We Are?
              </h1>
              <div className="font-sans pl-[40px] text-justify w-[47vw]">
                <p className="aboutUsContent">
                  Deep Breathes is a supportive platform for students and young
                  adults, making mental wellness approachable and actionable.
                  "We’re committed to creating a safe space where everyone feels
                  heard, supported, and empowered to prioritize their mental
                  well-being."
                </p>
              </div>
            </div>
            <div className="w-full h-[50vh] mt-[60px] rounded-[30px] overflow-clip flex items-center">
              <img src={aboutUsImg} className="w-full" alt="" />
            </div>
          </div>
        </div>

        //
      }
    </>
  );
};

export default Home;
