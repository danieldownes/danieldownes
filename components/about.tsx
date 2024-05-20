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
        Seasoned Software Developer / Tech Lead.<br />
        15+ years of experience across{" "}
        <span className="font-medium">MedTech, defence, energy</span>, and digital media industries.{" "}
        Extensive expertise with Unity, Unreal, and Godot engines.<br /><br />
        Adept at leading teams through full software lifecycles using<br />
        <span className="font-medium">Agile, ISO standards, SOLID, TDD, and Clean Architecture</span> principles.<br /><br />
        Proven ability to solve complex problems, mentor team members, and deliver high-quality solutions.
      </p>

      <p>
        <span className="italic">In my freetime</span>, I enjoy spending time with
        loved ones, self-care and travel.{" "}
        <span className="font-medium">In this instrustry continous learning so ever so important</span>. I am currently
        learning and prototyping better UX solutions for AI-assisted mind mapping.  {" "}
        I'm also intro retro computing.
      </p>
    </motion.section>
  );
}
