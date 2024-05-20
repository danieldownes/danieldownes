import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ridersUp1Img from "@/public/RidersUp-1.png";
import yogiImg from "@/public/yogi.png";
import modImg from "@/public/mod.png";
import omsImg from "@/public/oms2.jpg";
import strolllImg from "@/public/strolll.jpg";
import safetyImg from "@/public/safety.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Riders Up - Racing Game",
    description:
      "Worked with the technical team to improve code-quality by mindfully introducing code standards and code review processes. Assisted proving networking and UX issues.",
    tags: ["Netcode", "Agile", "HDRP"],
    imageUrl: ridersUp1Img,
  },
  {
    title: "Building Safety Training",
    description:
      "VR locomotion with fallback to a custom Street View desktop navigation. A backend dashboard also allowed custom hazards for different scenarios.",
    tags: ["Light Baking", "Custom Nav Solution", "Level Design", "UX Design"],
    imageUrl: safetyImg,
  },
  {
    title: "XR Exercise Games",
    description:
      "Developing games and physical exercise to facilitate mobility for people with Parkinson's Disease.",
    tags: ["HoloLens 2", "Magic Leap 2", "Tech Lead", "CI/CD", "Pyphon"],
    imageUrl: strolllImg,
  },
  {
    title: "MoD R&D",
    description:
      "DSTL Project Evaluating display methods with relation to situational awareness in user research study.",
    tags: ["Varjo", "MedTech"],
    imageUrl: modImg,
  },
  {
    title: "Medical Doctor Training",
    description:
      "VR project that mimics high-stress situations for medical training.",
    tags: ["Meta Oculus", "Netcode", "Tech Lead"],
    imageUrl: omsImg,
  },
] as const;


export const experiencesData = [
  {
    title: "First Unity Project",
    location: "Beijing, China",
    description:
      "Working in a team of 20, we created Facebooks first Unity based game, UberStrike.",
    icon: React.createElement(LuGraduationCap),
    date: "2009",
  },
  {
    title: "Flash Development",
    location: "123",
    description:
      "Proefesseional work practise with Flash and AS3 Scripting for a marketing company.",
    icon: React.createElement(CgWorkAlt),
    date: "2006 - 2007",
  },
  {
    title: "BSc (Honours) Computer Visualisation",
    location: "Sheffield Hallam University, England",
    description:
      "Gaining first-class in subjects ranging from advanced 3D mathematics to medical research.",
    icon: React.createElement(FaReact),
    date: "2002 - 2006",
  },
] as const;

export const skillsData = [
  "Unity Engine",
  "Unreal Engine",
  "Godot Engine",
  "C#",
  "C++",
  "XR / VR / AR / MR",
  "Blazor + MAUI",
  "WinUI / UWP / WPF / WinForms",
  "TypeScript",
  "Git CLI",
  "Github Actions (CI/CD)",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
] as const;
