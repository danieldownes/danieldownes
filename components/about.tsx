"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Seasoned Interactive Software Lead with{" "}
        <span className="font-medium">20 years of experience</span> across{" "}
        <span className="font-medium">defence, MedTech, nuclear, energy</span>, and digital media industries.{" "}
        Extensive expertise with Unity, Unreal, and Godot engines, specialising in{" "}
        <span className="font-medium">VR/XR/Mixed Reality, simulation, robotic simulation, and physics simulation</span>.<br /><br />
        I take <span className="font-medium">full ownership of projects</span> — from initial brief through architecture, team alignment, and delivery.{" "}
        Adept at leading teams through full software lifecycles using{" "}
        <span className="font-medium">Agile, ISO standards (BS EN 62304), SOLID, TDD, and Clean Architecture</span> principles.{" "}
        Proven ability to mentor team members, write maintainable code, and deliver high-quality solutions.
      </p>

      <p className="mb-3">
        Career highlights include work with{" "}
        <span className="font-medium">BAE Systems, National Nuclear Laboratory, Deloitte, the NHS</span>, and the{" "}
        <span className="font-medium">Ministry of Defence</span>.{" "}
        Currently based in <span className="font-medium">Tokyo, Japan</span>.
      </p>

      <p>
        <span className="italic">In my free time</span>, I enjoy spending time with
        loved ones, self-care and travel.{" "}
        <span className="font-medium">In this industry, continuous learning is ever so important</span>. I am currently
        learning and prototyping better UX solutions for AI-assisted mind mapping.{" "}
        I'm also into retro computing.
      </p>
    </motion.section>
  );
}
