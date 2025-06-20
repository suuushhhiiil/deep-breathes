import heroImage from "../assets/calm-women.png";
import aboutUsImg from "../assets/hero-background.jpg";
import React, { useEffect, useRef } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import "../styles/About.css";
import About from "./About";
import Testimonials from "./Testimonials";

const Home = () => {
  const buttonStyle = `transition-all duration-400 font-sans rounded-full lg:px-8 px-[15px] lg:py-2 py-[8px] font-medium`;
  return (
    <>
      <div className="lg:mt-[8vh] mt-[30px]">
        <div className={`relative px-[20px] lg:px-[100px] h-[87vh] lg:flex justify-center items-center`}>
          <div className="lg:flex">
            <div className="flex flex-col lg:mr-[80px] space-y-2 lg:w-[50rem]">
              <h1 id="heading" className={`heroHeading font-display font-bold lg:text-[4.8rem] text-[60px] leading-[0.9] text-black`}>
                Pause Breathe Heal.
              </h1>
              <p className={`font-sans font-light lg:text-[1.6rem] text-[18px] pt-[10px]`}>
                Your safe space for mental wellness, growth, and balance.
              </p>
              <div className="lg:flex space-x-3 items-center lg:pt-3 pt-[20px]">
                <Link to="/" className={`${buttonStyle} lg:text-xl text-[15px] text-nowrap font-normal text-bl bg-primary-500`}>
                  Explore
                </Link>
                <Link to="/" className={`${buttonStyle} border-black border-[0.8px] lg:text-xl text-nowrap text-[15px] hover:bg-primary-500 hover:border-primary-500`}>
                  Join Our Community
                </Link>
              </div>
            </div>
            <div className={`lg:mt-[0px] mt-[100px] flex flex-col items-center shrink-0 heroImage`}>
              <img src={heroImage} className="lg:w-[45vh] w-[30vh]" alt="Calm-Lady-Breathing" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Testimonials />
    </>
  );
};

export default Home;
