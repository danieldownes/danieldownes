"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaEnvelope, FaGithubAlt } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const specialities = [
  "project ownership",
  "simulation",
  "training",
  "XR",
  "games and apps",
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = specialities[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < word.length) {
        timeout = setTimeout(() => {
          setDisplayText(word.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(word.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % specialities.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] relative"
    >
      <div className="absolute inset-0 -z-10 hero-grid opacity-[0.04] dark:opacity-[0.06]"></div>

      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/dd2.png"
              alt="Daniel Downes"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-40 w-40 rounded-full object-cover border-[0.25rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Daniel Downes</span><br />
        <span className="font-bold">Interactive Software Lead</span> with<br />
        <span className="font-bold">20 years</span> of experience in<br />
        <span className="font-italics">
          {displayText}
          <span className="inline-block w-[2px] h-[1em] bg-gray-700 dark:bg-gray-300 ml-[2px] align-middle animate-pulse" />
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-2 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white p-4 flex items-center gap-2 rounded-lg focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-800 active:scale-105 transition cursor-pointer dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          <FaEnvelope />
          Contact{" "}
        </Link>

        <Link
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/danieldownes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />Connect{" "}
        </Link>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/danieldownes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubAlt />Tech Profile{" "}
        </a>
      </motion.div>
    </section>
  );
}
