"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="lg:py-16 bg-graf">
      <div className="grid grid-cols-1 sm:grid-cols-12 py-4 px-2 mt-20">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white text-5xl lg:text-6xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Jack",
                700, // wait 1s before replacing "Mice" with "Hamsters"
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
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-xl">
            I work with SMBs all over the world to grow revenues through digital
            advantage.
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full relative bg-[#272727] w-[400px] h-[400px]">
            <Image
              src="/coding.webp"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
