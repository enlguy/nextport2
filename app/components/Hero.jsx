"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="lg:pt-8 bg-graf bg-cover h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-12 py-4 px-2 mt-20">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white text-5xl lg:text-6xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text text-[#e3ebf0]">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Jack",
                700,
                "A Web Developer",
                700,
                "A Digital Marketer",
                700,
                "A Digital Marketer",
                700,
                "A World Traveler",
                700,
                "A Musician",
                700,
                "A Lover",
                700,
              ]}
              wrapper="span"
              className="text-[#e3ebf0]"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/*  <p className="mb-6 text-xl text-[#e3ebf0]">
            I work with SMBs all over the world to grow revenues through digital
            advantage.
          </p>  */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
