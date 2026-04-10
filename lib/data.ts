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
      "Owned code-quality transformation across the team, introducing code standards and review processes that improved maintainability. Resolved networking and UX issues.",
    tags: ["Netcode", "Agile", "HDRP"],
    imageUrl: ridersUp1Img,
  },
  {
    title: "Building Safety Training",
    description:
      "Delivered end-to-end VR training solution with locomotion, a fallback Street View desktop navigation, and a backend dashboard for custom hazard scenarios.",
    tags: ["Light Baking", "Custom Nav Solution", "Level Design", "UX Design"],
    imageUrl: safetyImg,
  },
  {
    title: "XR Exercise Games",
    description:
      "Owned technical strategy and delivery as Head of Technology, leading a team of 5 at Strolll. Partnered with Microsoft, Magic Leap, and Unity to build XR exercise games for people with Parkinson's Disease.",
    tags: ["HoloLens 2", "Magic Leap 2", "Tech Lead", "CI/CD", "BS EN 62304"],
    imageUrl: strolllImg,
  },
  {
    title: "MoD R&D",
    description:
      "Owned and managed MoD and DSTL-funded research projects, evaluating VR/AR display methods for situational awareness in defence applications.",
    tags: ["Varjo", "Defence", "VR/AR"],
    imageUrl: modImg,
  },
  {
    title: "Medical Doctor Training",
    description:
      "Delivered VR training system adopted by the NHS, simulating high-stress clinical scenarios for medical professionals.",
    tags: ["Meta Oculus", "Netcode", "Tech Lead", "NHS"],
    imageUrl: omsImg,
  },
] as const;


export const experiencesData = [
  {
    title: "Technical Lead",
    location: "Tokyo, Japan",
    description:
      "Resolving complex technical issues and improving team software processes at Created by Catalyst.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
  {
    title: "Head of Technology",
    location: "England, UK",
    description:
      "Led a team of 5 at Strolll, partnering with Microsoft, Magic Leap, and Unity on XR exercise games for Parkinson's Disease.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Software Development Lead",
    location: "England, UK",
    description:
      "Defence simulation applications with VR/AR technologies at BMT. Managed MoD and DSTL-funded projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Lead Developer",
    location: "England, UK",
    description:
      "3D interactive simulations for the nuclear industry at National Nuclear Laboratory. Award-winning innovative product. Built robotic arm laser-cutting solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2016",
  },
  {
    title: "Lead Developer",
    location: "England, UK",
    description:
      "Reduced development time and budget costs by 50% through methodology improvements at BAE Systems.",
    icon: React.createElement(CgWorkAlt),
    date: "2011 - 2014",
  },
  {
    title: "C# Developer - UberStrike",
    location: "Beijing, China",
    description:
      "Working in a team of 20, created Facebook's first Unity based game, UberStrike, at CMUNE.",
    icon: React.createElement(CgWorkAlt),
    date: "2009 - 2011",
  },
  {
    title: "BSc (Honours) Computing (Visualisation)",
    location: "Sheffield Hallam University, England",
    description:
      "First Class Honours with Extra Curricular Awards. Subjects ranging from advanced 3D mathematics to medical research.",
    icon: React.createElement(LuGraduationCap),
    date: "2002 - 2006",
  },
] as const;

export const skillsData = [
  "Unity Engine",
  "Unreal Engine",
  "Godot Engine",
  "Project Ownership & Delivery",
  "C#",
  "C++",
  "XR / VR / AR / MR",
  "Simulation & Training",
  "Robotic Simulation",
  "UX Design",
  "Blazor + MAUI",
  "WinUI / UWP / WPF / WinForms",
  "TypeScript",
  "Git CLI",
  "Github Actions (CI/CD)",
  "Python",
  "OpenCV",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
] as const;
