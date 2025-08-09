import React, { useEffect } from 'react';
import { testimonials } from '../utils/Sources';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Testimonials.css"

gsap.registerPlugin(ScrollTrigger);


const Testimonials = () => {
    useEffect(() => {
        let testCard = gsap.utils.toArray(".test-card");
        let testimonials = gsap.utils.toArray(".testimonials");

        gsap.to(testCard, {
            x: "-450%",
            scrollTrigger: {
              trigger: testimonials,
              start: "top -20%",
              end: "bottom 50%",
              scrub: 1.5,
            //   markers: true,
            },
          });

    })
    useEffect(()=> {
        return ()=> {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    }, [])
    return (
        <div className="sticky px-[100px] testimonials h-[100vh] top-0 pt-[20vh] font-sans justify-center origin-bottom-center bg-primary">
            <div clas>
                <h1 className='lg:text-6xl font-display'>What our Community says</h1>
            </div>
        </div>
    )
}

export default Testimonials