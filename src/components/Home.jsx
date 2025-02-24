import React, { useEffect } from "react";
import heroImage from "../assets/calm-women.png";
import heroBackgound from "../assets/hero-background.jpg";
import aboutMeGraphic from "../assets/lotus.png";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { features, testimonials } from "../utils/Sources";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  useEffect(() => {
    let aboutUs = gsap.utils.toArray(".aboutUs");
    let aboutUsHeading = gsap.utils.toArray(".aboutUsHeading");
    let features = gsap.utils.toArray(".features");
    let testCard = gsap.utils.toArray(".test-card");
    let testimonials = gsap.utils.toArray(".testimonials");
    let aboutUsContent = gsap.utils.toArray(".aboutUsContent");
    let aboutUsWelcome = gsap.utils.toArray(".aboutUsWelcome");
    let aboutUsImage = gsap.utils.toArray(".aboutUsImage");
    let featuresHeading = gsap.utils.toArray(".featuresHeading");


    gsap.to(aboutUs, {
      opacity: 0,
      scale: 0.4,
      transform: "translateY(-70%)",
      position: "sticky",
      scrollTrigger: {
        trigger: aboutUs,
        start: "30% top",
        end: "bottom top",
        scrub: true,
      },
    });


    gsap.fromTo(aboutUsHeading,
      {
        y: 50,
        opacity: 0
      },
      {
        delay: 2,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: aboutUs,
          start: "top 55%",
          end: "top 35%",
          scrub: true,
        },
      });

    gsap.fromTo(aboutUsContent,
      {
        x: -150,
        opacity: 0
      },
      {
        opacity: 1,
        delay: 4,
        x: 0,
        scrollTrigger: {
          trigger: aboutUs,
          start: "top 65%",
          end: "top 35%",
          scrub: true,
        },
      });

    gsap.fromTo(aboutUsWelcome,
      {
        x: 50,
        opacity: 0
      },
      {
        opacity: 1,
        delay: 4,
        x: 0,
        scrollTrigger: {
          trigger: aboutUs,
          start: "top 65%",
          end: "top 35%",
          scrub: true,
        },
      });

    gsap.to(features, {
      opacity: 0,
      scale: 0.5,
      scrollTrigger: {
        trigger: features,
        start: "40% top",
        end: "bottom 30%",
        scrub: true,
        stagger: 2
      },
    });

    gsap.fromTo(featuresHeading,
      {
        scale: 2,
        y:100,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: features,
          start: "top 70%",
          end: "top 55%",
          scrub: true,
          stagger: 2
        },
      }
    );

    gsap.to(testCard, {
      rotate: 0,
      scrollTrigger: {
        trigger: testimonials,
        start: "top 65%",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });
  return (
    <>
      <div className="">
        <div
          className={`relative px-[100px] h-[87vh] flex justify-center items-center`}
        >
          <div className="absolute bottom-[-2px] flex items-start">
            <div className={`flex flex-col shrink-0 heroImage`}>
              <img
                src={heroImage}
                className="h-[65vh] rise-up"
                alt="Calm-Lady-Breathing"
              />
            </div>
            <div className="flex flex-col ml-[100px] space-y-2 w-[50rem]">
              <h1
                id="heading"
                className={`font-display text-[5rem] leading-[0.9] rise-up text-secondary`}
              >
                Pause. Breathe. Heal.
              </h1>
              <p
                className={`text-justify font-sans text-[1rem] p-[10px]  rise-up-delayed`}
              >
                Your safe space for mental wellness, growth, and balance. At
                Deep Breathes, we’re here to support you through life’s
                challenges and celebrate your victories.
              </p>
              <div className="flex space-x-3 pt-11 items-center">
                <Link
                  to="/"
                  className={`transition-color duration-[400ms] text-[1.2rem] font-sans rounded-full px-[2rem] py-[1.2vh] font-medium text-white bg-secondary hover:text-black hover:bg-primary`}
                >
                  Explore
                </Link>
                <Link
                  to="/"
                  className={`transition-color duration-[400ms] text-[1.2rem] font-sans rounded-full px-[2rem] py-[1.2vh] font-medium border-[1px] text-black hover:bg-primary hover:border-primary`}
                >
                  Join Our Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        //about-us
        <div className="aboutUs sticky flex justify-center items-center top-[10px] mt-[3px] pb-[30vh] h-[140vh]">
          <div className="px-[15rem]">
            <p className="aboutUsWelcome font-sans text-secondary">Welcome to Deep Breathes</p>
            <div className="content w-fit justify-between flex mt-[8px]">
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
            <div className="aboutUsImage w-full h-[50vh] mt-[60px] rounded-[30px]"></div>
          </div>
        </div>
      }
      {
        //Features section

        <div className="font-sans sticky top-[22vh] features flex flex-col px-[8rem] items-center mt-[3px] h-[120vh]">
          <div className="featuresHeading flex items-center justify-center rounded-[20px]]">
            <h1
              className={`text-black flex-shrink-0 text-center font-display font-semibold  text-[4rem]`}
            >
              What We Offer?
            </h1>
          </div>
          <div className="flex space-x-3 feature-card mt-[30px]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-accent detail p-7 w-[20vw] rounded-[20px] space-y-2"
              >
                <h1
                  className={`font-semibold text-[1.2rem] text-nowrap`}
                >
                  {feature.title}
                </h1>
                <p className={`text-justify text-[1rem] s-text`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      }
      {
        //testimonial
        <div className="px-[100px] testimonials h-[100vh] py-[20vh] font-sans justify-center">
          <div className="flex items-center justify-center rounded-[15px]">
            <h2 className="font-display text-center text-[3.4rem] leading-[1.1] px-[25px] w-fit">
              What Peaple Are Saying!
            </h2>
          </div>
          <div className="flex overflow-x-scroll space-x-4 p-4 mt-[30px]">
            {testimonials.map((item, index) => (
              <div
                style={{ transform: `rotate(${Math.random() * 45}deg)` }}
                key={index}
                className={`test-card origin-top-left rounded-[15px] bg-accent  min-w-[17vw] p-[25px] shadow-lg flex flex-col justify-between min-h-[320px]`}
              >
                <p className="text-justify">{item.statement}</p>
                <div className="bottom-[25px] flex items-center">
                  <img src={item.image} className="w-[50px] rounded-full" />
                  <div className="ml-3">
                    <p className="text-left font-bold">{item.name}</p>
                    <p className="text-[15px]">{item.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default Home;
