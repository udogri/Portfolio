"use client";

import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { C, FONT_BODY } from "./components/tokens";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

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

      {/* ✅ Each section has an ID */}
      <Box id="hero"><Hero /></Box>
      <Box id="about"><About /></Box>
      <Box id="projects"><Projects /></Box>
      <Box id="tools"><Skills /></Box>
      <Box id="contact"><Contact /></Box>

      <Footer />
    </Box>
  );
}