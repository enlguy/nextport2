"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Gym Website",
    description: "A business website with animations and contact",
    image: "/evogym.png",
    gitUrl: "https://github.com/enlguy/Gym",
    tag: ["All", "Web"],
    previewUrl: "https://roaring-palmier-b52fe6.netlify.app/",
  },
  {
    id: 2,
    title: "MERN Database Project",
    description:
      "A full stack web app for customer insights and data manipulation",
    image: "/admindash.webp",
    gitUrl: "https://github.com/enlguy/AdminDashboard",
    tag: ["All", "Web"],
    previewUrl: "https://fullstackadmindashboard-fe.onrender.com",
  },
  {
    id: 3,
    title: "Data Optimization for Global Agency",
    description:
      "Working with a global staffing agency to clean and optimize data, create data policies for their CRM (HubSpot), create automations for efficient data cleansing, segmenting over 10,000 records, and building a lead scoring system",
    image: "/potentiam.jpg",
    gitUrl: "/",
    tag: ["All", "Marketing"],
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Market Fit for New Product",
    description:
      "Working with a global business to determine market fit of a new product through research and sales meetings with potential buyers",
    image: "/rw.jpg",
    gitUrl: "/",
    tag: ["All", "Marketing"],
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Dictionary",
    description: "Utilizing AI and APIs for a responsive dictionary",
    image: "/dictimg.png",
    gitUrl: "https://github.com/enlguy/dictionary",
    tag: ["All", "Web"],
    previewUrl: "https://ephemeral-taffy-27e4e5.netlify.app/",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        A Few Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Marketing"
          isSelected={tag === "Marketing"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mx-1">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
