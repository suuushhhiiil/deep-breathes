import React, { useLayoutEffect, useRef } from "react";
import { features } from "../utils/Sources";
import "../styles/Features.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cardImage from "../assets/card-background.png";
import logo from "../assets/logo.png";

gsap.registerPlugin(ScrollTrigger);


const Features = () => {
  const featuresRef = useRef(null);
  const featuresHeadingRef = useRef(null);
  const cardSectionRef = useRef(null);
  const cardRefs = useRef([]);
  const frontElRefs = useRef([]);
  const backElRefs = useRef([]);

  useLayoutEffect(() => {
    const featuresEl = featuresRef.current;
    const featuresHeadingEl = featuresHeadingRef.current;
    const cards = cardRefs.current;
    const cardSection = cardSectionRef.current;
    const frontEls = frontElRefs.current;
    const backEls = backElRefs.current;
    const positions = [0, 25, 50, 75];
    const rotations = [-15, -7.5, 7.5, 15];

    // responsive animtions

    gsap.to(featuresHeadingEl, {
      scale: 12,
      y:800,
      opacity: 0,
      scrollTrigger: {
        trigger: featuresEl,
        start: "top 10%",
        end: "top -40%",
        scrub: 1,
        markers: true,
      }
    });

    if (window.innerWidth > 768) {
      cards.forEach((card, index) => {
        gsap.to(card, {
          left: `calc(${positions[index]}% + 20px)`,
          ease: "power1.out",
          scrollTrigger: {
            trigger: card,
            start: "top 50%",
            end: `20% top`,
            scrub: 1,
            id: `spread-${index}`,
            onUpdate: (self) => {
              gsap.to(frontEls[index], {
                rotateY: self.progress * 180,
                ease: "power1.out"
              })
            }
          },
        })
      });
      // Flip cards
      ScrollTrigger.create({
        trigger: featuresEl,
        start: "top top",
        end: `bottom 100%`,
        scrub: 1,
        pin: cardSection,
        pinSpacing: false,
        onUpdate: (self) => {
          const progress = self.progress;
          cards.forEach((card, index) => {
            const staggerOffset = index * 0.05;
            const startOffset = 1 / 4 + staggerOffset;
            const endOffset = 2 / 4 + staggerOffset;
            if (progress >= startOffset && progress <= endOffset) {
              const animationProgress = (progress - startOffset) * 4;
              const frontRotation = 180 - 180 * animationProgress;
              const backRotation = - 180 * animationProgress;
              const cardRotation = rotations[index] * (1 - animationProgress);

              gsap.to(frontEls[index], { rotateY: frontRotation, ease: "power1.out" });
              gsap.to(backEls[index], { rotateY: backRotation, ease: "power1.out" });
              //gsap.to(card, { rotateZ: cardRotation, ease: "power1.out" });
            }
          });
        },
      });
    }
    else {

      //Flip cards
      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 90%",
          end: `bottom 90%`,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const staggerOffset = index * 0.05;
            const startOffset = 1 / 3 + staggerOffset;
            const endOffset = 2 / 3 + staggerOffset;
            if (progress >= startOffset && progress <= endOffset) {
              const animationProgress = (progress - startOffset) * 3;
              const frontRotation = 180 - 180 * animationProgress;
              const backRotation = - 180 * animationProgress;

              gsap.to(frontEls[index], { rotateY: frontRotation, ease: "power1.out" });
              gsap.to(backEls[index], { rotateY: backRotation, ease: "power1.out" });
            }
          },
        });
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();

      });
    }
  }, [window.innerWidth]);
  return (
    <>
      <div ref={featuresRef} className="features-container bg-primary-300">
        <div className="features-heading mb-[2rem]">
          <h1 ref={featuresHeadingRef} className="text-center font-display font-semibold lg:text-6xl text-[60px] leading-[1]">
            What We Offer?
          </h1>
        </div>
        <div className="cards-section-wrapper">
          <div ref={cardSectionRef} className="cards-section">
            {
              features.map((feature, index) => {
                return (
                  <div className="card"
                    key={feature.id}
                    id={`card-${index + 1}`}
                    ref={(el) => (cardRefs.current[index] = el)}
                  > <div className="card-wrapper" id={`card-wrapper-${index + 1}`}>

                      <div className="card-front flex flex-col items-center justify-between lg:p-[1.5em] p-[30px] rounded-[15px]" ref={(el) => (frontElRefs.current[index] = el)}>
                        <div className="card-title w-[100%] flex items-start justify-between">
                          <p className="font-sans font-semibold text-[25px]">
                            {feature.title}
                          </p>
                          <img src={logo} className="lg:h-[40px] max-h-[60px]" />
                        </div>
                        <p className="font-sans font-light lg:text-lg text-[20px]">{feature.description}</p>
                        <div className="card-title w-[100%] flex items-start justify-between rotate-180">
                          <p className="font-sans font-semibold text-[25px]">
                            {feature.title}
                          </p>
                          <img src={logo} className="lg:h-[2.5rem] max-h-[60px]" />
                        </div>
                      </div>

                      <div className="card-back rounded-[15px]" ref={(el) => (backElRefs.current[index] = el)}>
                        <img src={cardImage} alt="" />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;