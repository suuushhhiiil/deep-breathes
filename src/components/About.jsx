import React, { useEffect, useRef } from 'react';
import "../styles/About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    const aboutUsRef = useRef(null);
    const aboutUsHeadingRef = useRef(null);
    const aboutUsContentRef = useRef(null);
    const aboutUsWelcomeRef = useRef(null);
    const aboutUsImageRef = useRef(null);
    useEffect(() => {
        let aboutUs = aboutUsRef.current;
        let aboutUsHeading = aboutUsHeadingRef.current;
        let aboutUsContent = aboutUsContentRef.current;
        let aboutUsWelcome = aboutUsWelcomeRef.current;
        let aboutUsImage = aboutUsImageRef.current;

        gsap.to(aboutUs, {
            transform: 'perspective(1500px) rotateX(50deg) translateY(-40%)',
            scale: 0.8,
            opacity: 0,
            scrollTrigger: {
                trigger: aboutUs,
                start: "45% top",
                end: "top -150%",
                scrub: 0.5,
            },
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutUs,
                start: "20% 70%",
                end: "top top",
                toggleActions: "play play play reverse",
                markers: true,
            }
        })

        tl.fromTo(aboutUsWelcome,
            { y: 200, opacity: 0, scaleY: 1.15, },
            { y: 0, opacity: 1, scaleY: 1, duration: 0.5 },
        );
        tl.fromTo(aboutUsHeading,
            { y: 100, opacity: 0, scaleY: 1.3, },
            { y: 0, opacity: 1, scaleY: 1, duration: 0.8 },
            "-=0.2"
        );
        tl.fromTo(aboutUsContent,
            { y: 50, opacity: 0, scaleY: 1.25, },
            { y: 0, opacity: 1, scaleY: 1, duration: 0.5 },
            "-=0.5"
        );
        tl.fromTo(aboutUsImage,
            { y: 300, opacity: 0, scaleY: 1.3, },
            { y: 0, opacity: 1, scaleY: 1, duration: 0.7, },
            "-=0.8"
        );
    });
    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    }, [])
    return (
        <div className="aboutUs sticky flex justify-center top-0 pt-[25vh] mt-[3px] pb-[30vh] h-[180vh]" ref={aboutUsRef}>
            <div className="px-[15rem]">
                <p className="aboutUsWelcome font-sans text-secondary" ref={aboutUsWelcomeRef}>Welcome to Deep Breathes</p>
                <div className="content w-fit justify-between flex">
                    <h1 className="aboutUsHeading font-display font-semibold text-[4rem] leading-[1] flex-shrink-0 w-[25rem]" ref={aboutUsHeadingRef}>
                        Who We Are?
                    </h1>
                    <div className="font-sans pl-[40px] text-justify w-[47vw]">
                        <p className="aboutUsContent" ref={aboutUsContentRef}>
                            Deep Breathes is a supportive platform for students and young
                            adults, making mental wellness approachable and actionable.
                            "We’re committed to creating a safe space where everyone feels
                            heard, supported, and empowered to prioritize their mental
                            well-being."
                        </p>
                    </div>
                </div>
                <div className="aboutUsImage w-full h-[50vh] mt-[60px] rounded-[30px]" ref={aboutUsImageRef}></div>
            </div>
        </div>
    )
}

export default About