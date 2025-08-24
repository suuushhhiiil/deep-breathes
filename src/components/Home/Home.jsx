import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { MoveUp } from "lucide-react";
import styles from "./Home.module.css";
import { features } from "../../utils/Sources";
import homeBackground from "../../assets/images/homeBackground.jpg";
import aboutImage from "../../assets/images/aboutImage.jpg";
import { useTextAnimations } from "./useHomeAnimations";

const Home = () => {
  const heroHeaderTextRef = useRef(null);
  const heroContentTextRef = useRef(null);

  //Calling Animation Functions
  useLayoutEffect(() => {
    //GSAP Animation Call

    //Text Animations
    document.fonts.ready.then(() => {
      // useTextAnimations({ heroHeaderTextRef, heroContentTextRef });
    });
  }, [heroHeaderTextRef, heroContentTextRef]);

  return (
    <>
      <div
        className={`${styles.heroSection} h-[100vh] px-base-x py-base-y text-primary-text select-none`}
      >
        <div
          className={`${styles.contentWrapper} font-sans text-primary-text overflow-clip rounded-2xl`}
        >
          <div className={`${styles.heroHeaderText}`}>
            <p
              ref={heroContentTextRef}
              className="font-sans text-primary-text text-h3 tracking-tight leading-[1]"
            >
              Your safe space for mental wellness, growth, and balance.
            </p>
          </div>
          <div className={`${styles.heroImage} pt-[1rem]`}>
            <img
              src={homeBackground}
              className="rounded-2xl object-cover h-full w-full"
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        className={`h-[100vh] relative px-base-x py-base-y text-primary-text select-none`}
      >
        <div
          className={`${styles.contentWrapper} font-sans text-primary-text overflow-clip rounded-2xl flex justify-center`}
        >
          <h1
            className={`${styles.aboutHeaderText} text-h1 rounded-2xl font-medium font-display leading-[1]`}
          >
            Who We Are?
          </h1>
          <div className={`${styles.aboutContentText}`}>
            <p
              className={`text-content font-sans tracking-tight leading-[1.3] mb-5`}
            >
              Life can be overwhelming, and mental health often takes a
              backseat. Deep Breathes is here to change that. Designed
              especially for students and young adults, we’re a community-driven
              platform that focuses on making mental wellness approachable and
              actionable.
            </p>
            <a
              href="/explore"
              className={`bg-background-surface px-button-x py-button-y rounded-full text-button font-medium`}
            >
              Explore
            </a>
          </div>
          <div
            className={`${styles.aboutUsMedia} bg-accent-primary-hover hidden h-full rounded-2xl overflow-hidden`}
          >
            <img
              src={aboutImage}
              alt=""
              className={`object-cover h-full w-full`}
            />
          </div>
        </div>
      </div>

      <div
        className={`h-[100vh] relative px-base-x py-base-y text-primary-text select-none`}
      >
        <div
          className={`${styles.contentWrapper} font-sans text-primary-text overflow-clip rounded-2xl flex justify-center`}
        >
          <h1
            className={`${styles.featuresHeaderText} text-h1 rounded-2xl font-medium font-display leading-[1]`}
          >
            What We Offer?
          </h1>
          <p
            className={`${styles.featuresContentText} text-content font-sans tracking-tight leading-[1.3] mb-8 `}
          >
            We’re committed to creating a safe space where everyone feels heard,
            supported, and empowered to prioritize their mental well-being.
          </p>
          <div
            className={`${styles.featuresScroll} flex items-center lg:gap-5 gap-3.5  px-button- py-button-y rounded-4xl`}
          >
            <h1
              className={`text-center text-h2 font-medium font-sans leading-[1.1]`}
            >
              Scroll <span className={`font-thin`}>to Explore</span>
            </h1>
            <div
              className={`lg:-rotate-90 bg-background-surface py-button-y rounded-full`}
            >
              <MoveUp size={30} />
            </div>
          </div>
          {/* Features Cards Full Screen */}
        </div>
        {features.map((feature, index) => {
          let count = index + 1;
          return (
            <div
              key={index}
              className={`${styles.featuresCards} bg-background-primary px-base-x py-base-y`}
            >
              <img
                src={feature.image}
                alt=""
                className={`absolute left-0 top-0 -z-40 blur-lg w-full h-full object-cover opacity-70`}
              />
              <div
                className={`${styles.contentWrapper} font-sans text-primary-text overflow-clip rounded-2xl justify-center`}
              >
                <h1
                  className={`${styles.featuresTitle} l:text-h2 text-h1 rounded-2xl font-bold font-display leading-[1]`}
                >
                  <span className={`font-light  text-background-surface`}>
                    0{count}.{" "}
                  </span>
                  {feature.title}
                </h1>
                <div
                  className={`${styles.featuresDescription} font-medium text-content flex flex-col gap-3`}
                >
                  <p>{feature.description}</p>
                  <a
                    className={`${styles.featuresLink} bg-accent-primary px-button-x py-button-y rounded-full w-fit text-white text-button`}
                    href={feature.link}
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
