"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Revenue Operations</li>
        <li>Data Management and Optimization</li>
        <li>CRM Optimization</li>
        <li>Email campaigns</li>
        <li>WordPress</li>
        <li>SEO</li>
        <li>Nextjs</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Illinois at Urbana-Champaign</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>HubSpot Sales Suite</li>
        <li>HubSpot Marketing Suite</li>
        <li>Responsive Front-End Web Development</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/me.jpg"
          width={460}
          height={460}
          alt="photome"
          priority={true}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text text-blue-200">
            I am a marketing operations expert, and web developer with a command
            of HTML, CSS, JS, React.js, Next.js, and Node.js. I build optimized
            sites, as well as manage CRMs and data for optimal growth.
            <br></br>
            <br></br>I love: data optimization, automations, SEO, top Lighthouse
            scores, fast sites, CRM segmentation, building lead scoring systems,
            hiking, music, arts, Europe..
          </p>
          <div className="flex flex-row justify-start mt-8 text-bold">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
