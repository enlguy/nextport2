"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 py-4 px-2">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white text-4xl lg:text-5xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to bg-purple-500">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Jack",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "A Web Developer",
                1000,
                "A Digital Marketer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquam minus nostrum ex maiores molestias commodi hic beatae odit
            enim perspiciatis adipisci, ut vel sit iure mollitia consectetur
            tenetur consequuntur.
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full relative bg-[#272727] w-[400px] h-[400px]">
            <Image
              src="/coding.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
