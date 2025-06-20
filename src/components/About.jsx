import React, { useEffect, useRef } from 'react';
import "../styles/About.css";
import aboutUsImg from "../assets/hero-background.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { duration } from '@mui/material';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    const aboutUsRef = useRef(null);
    const aboutUsBoxRef = useRef(null);
    const aboutUsHeadingRef = useRef(null);
    const aboutUsContentRef = useRef(null);
    const aboutUsWelcomeRef = useRef(null);
    const aboutUsImageRef = useRef(null);
    useEffect(() => {
        let aboutUs = aboutUsRef.current;
        let aboutUsBox = aboutUsBoxRef.current;
        let aboutUsHeading = aboutUsHeadingRef.current;
        let aboutUsContent = aboutUsContentRef.current;
        let aboutUsWelcome = aboutUsWelcomeRef.current;
        let aboutUsImage = aboutUsImageRef.current;

        gsap.to(aboutUs, {
            transform: 'perspective(1500px) rotateX(30deg) translateY(-40%)',
            scale: 0.8,
            opacity: 0.6,
            scrollTrigger: {
                trigger: aboutUs,
                start: "45% top",
                end: "top -150%",
                scrub: 0.5,
            },
        });

        
        gsap.fromTo(aboutUsBox,
            {
                scale: 1.5,
                opacity: 0,
                y: 60
                
            },
            {
                scale: 1,
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: aboutUs,
                    start: "top 30%",
                    end: "top 10%",
                    toggleActions: "play play play reverse",
                    markers: true,
                },
            }
        );

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutUs,
                start: "top 25%",
                end: "top top",
                toggleActions: "play play play reverse",
                markers: true,
            }
        });

        tl.fromTo(aboutUsWelcome,
            { y: 200, opacity: 0 },
            { y: 0, opacity: 1, },
            "-=0.3"
        );
        tl.fromTo(aboutUsHeading,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1 },
            "-=0.3"
        );
        tl.fromTo(aboutUsContent,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1 },
            "-=0.3"
        );
        tl.fromTo(aboutUsImage,
            { y: 0, opacity: 0, scale: 1.08 },
            { y: 0, opacity: 1, scale: 1, },
            "-=0.4"
        );
    });
    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    }, [])
    return (
        <div className="aboutUs sticky lg:flex justify-center top-0 lg:mt-0 mt-[40px] h-[180vh] lg:px-[12rem] px-[20px] pt-[17.1vh]" ref={aboutUsRef}>
            <div className=" bg-primary-200 lg:p-[2.5rem] p-[20px] rounded-[18px] h-fit" ref={aboutUsBoxRef}>
                <div className="content w-fit justify-between lg:flex">
                    <div className='lg:mt-0 mt-[40px]'>
                        <p className="aboutUsWelcome font-sans lg:text-md text-[20px] text-secondary" ref={aboutUsWelcomeRef}>Welcome to Deep Breathes</p>
                        <h1 className="aboutUsHeading font-display font-semibold lg:text-[4rem] text-[60px] leading-[1] lg:flex-shrink-0 lg:w-[25rem]" ref={aboutUsHeadingRef}>Who We Are?</h1>
                    </div>
                    <div className="font-sans lg:ml-[40px] lg:text-justify lg:w-[47vw] lg:mt-0 mt-[30px]">
                        <p className="aboutUsContent lg:text-lg text-[18px]" ref={aboutUsContentRef}>
                            Deep Breathes is a supportive platform for students and young
                            adults, making mental wellness approachable and actionable.
                            <br />
                            "We’re committed to creating a safe space where everyone feels
                            heard, supported, and empowered to prioritize their mental
                            well-being."
                        </p>
                    </div>
                </div>
                <div className="aboutUsImage w-full lg:h-[50vh] mt-[60px] rounded-[12px] overflow-clip flex items-center" ref={aboutUsImageRef}>
                    <img src={aboutUsImg} className="w-full" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About