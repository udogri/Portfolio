"use client";

import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { C, FONT_BODY } from "./components/tokens";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import About from "./components/About";

function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
}

export default function Portfolio() {
  return (
    <Box bg={C.bg} color={C.text} minH="100vh" fontFamily={FONT_BODY}>
      <FontLoader />
      <Navbar />
      <Box as="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}