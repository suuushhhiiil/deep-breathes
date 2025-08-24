import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useLayoutEffect } from "react";

const tl = gsap.timeline();

export const useTextAnimations = (refs) => {
  const heroHeaderText = refs.heroHeaderTextRef.current;
  const heroContentText = refs.heroContentTextRef.current;


  SplitText.create(heroHeaderText, {
    type: "words lines",
    mask: "words",
    autoSplit: true,
    onSplit: (self) => {
      tl.fromTo(
        self.words,
        {
          y: 100,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          delay: 2.5,
          stagger: {
            amount: 1.2,
          },
        }
      );
    },
  });

  SplitText.create(heroContentText, {
    type: "chars lines",
    mask: "words",
    autoSplit: true,
    onSplit: (self) => {
      tl.fromTo(
        self.chars,
        {
          autoAlpha: 0,
          scale: 1.001,
        },
        {
          scale: 1,
          delay: 0.5,
          autoAlpha: 1,
          ease: "back.inOut",
          stagger: {
            amount: 1
          },
        }
      );
    },
  });
};
