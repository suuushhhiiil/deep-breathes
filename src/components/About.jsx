import React, { useEffect } from 'react';
import "../styles/About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
                start: "0% top",
                end: "top -150%",
                scrub: 1,
                markers: true
            },
        });

        gsap.fromTo(aboutUsHeading,
            {
                y: 100,
                opacity: 0
            },
            {
                delay: 2,
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: aboutUs,
                    start: "top 45%",
                    end: "top 10%",
                    scrub: 0.5,
                },
            });

        gsap.fromTo(aboutUsContent,
            {
                opacity: 0
            },
            {
                opacity: 1,
                delay: 4,
                duration: 3,
                y: 0,
                scrollTrigger: {
                    trigger: aboutUs,
                    start: "top 55%",
                    end: "top top",
                    scrub: true,
                },
            });

        gsap.fromTo(aboutUsWelcome,
            {
                y: 200,
                opacity: 0
            },
            {
                opacity: 1,
                delay: 4,
                y: 0,
                scrollTrigger: {
                    trigger: aboutUs,
                    start: "top 65%",
                    end: "top 25%",
                    scrub: 1,
                },
            });
    });
    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    }, [])
    return (
        <div className="aboutUs flex justify-center top-0 pt-[25vh] mt-[3px] pb-[30vh] h-[125vh]">
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
    )
}

export default About