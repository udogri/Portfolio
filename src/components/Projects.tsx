"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { C, FONT_BODY, FONT_DISPLAY, FONT_MONO } from "./tokens";
import ProjectImg from "../assets/oneByOne.png";

// ─── Add your project screenshot paths/URLs to `image` ───────────────────────
const PROJECTS = [
  {
    index: "01",
    title: "Live Production App",
    description:
      "Architected a scalable frontend system from the ground up — reducing bundle size by 40% and shipping a design-system that accelerated feature velocity across the team.",
    tech: ["React", "TypeScript", "Firebase", "Zustand"],
    links: { demo: "#", github: "#" },
    featured: true,
    image: ProjectImg,
    // Replace with your actual screenshot, e.g.: image: "/screenshots/live-app.png",
  },
  {
    index: "02",
    title: "Side Project",
    description:
      "Explored advanced state-management patterns and strongly-typed API integrations. Heavy use of generics for reusable, self-documenting data-fetching layers.",
    tech: ["React", "TypeScript", "React Query"],
    links: { github: "#" },
    featured: false,
    image: "https://placehold.co/800x450/111118/7FFFD4?text=Side+Project",
    // Replace with your actual screenshot, e.g.: image: "/screenshots/side-project.png",
  },
];

type Project = (typeof PROJECTS)[number];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      border={`1px solid ${hovered ? C.muted : C.border}`}
      borderRadius="6px"
      overflow="hidden"
      transition="all 0.3s ease"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      position="relative"
      bg={C.surface}
    >
      {/* Accent bar */}
      <Box
        position="absolute"
        left={0}
        top={0}
        bottom={0}
        w="2px"
        bg={C.accent}
        opacity={hovered ? 1 : 0}
        transition="opacity 0.3s"
        zIndex={1}
      />

      <Flex direction={{ base: "column", lg: "row" }}>

        {/* Screenshot panel */}
        <Box
          w={{ base: "full", lg: "420px" }}
          minW={{ lg: "420px" }}
          h={{ base: "220px", lg: "auto" }}
          minH={{ lg: "260px" }}
          position="relative"
          overflow="hidden"
          flexShrink={0}
          bg={C.bg}
          borderRight={{ lg: `1px solid ${C.border}` }}
          borderBottom={{ base: `1px solid ${C.border}`, lg: "none" }}
        >
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top"
            transition="transform 0.5s ease"
            transform={hovered ? "scale(1.03)" : "scale(1)"}
            display="block"
          />

          {/* Overlay on hover */}
          <Box
            position="absolute"
            inset={0}
            background={`linear-gradient(to right, ${C.bg}00, ${C.bg}60)`}
            opacity={hovered ? 1 : 0}
            transition="opacity 0.3s"
            pointerEvents="none"
          />

          {/* Featured badge */}
          {project.featured && (
            <Box position="absolute" top={4} right={4}>
              <Tag
                fontFamily={FONT_MONO}
                fontSize="9px"
                letterSpacing="0.15em"
                textTransform="uppercase"
                bg={`${C.bg}CC`}
                color={C.accent}
                border={`1px solid ${C.accent}50`}
                borderRadius="2px"
                px={2}
                py={1}
                backdropFilter="blur(8px)"
              >
                Featured
              </Tag>
            </Box>
          )}
        </Box>

        {/* Content panel */}
        <Flex direction="column" justify="space-between" p={{ base: 7, md: 10 }} flex={1} gap={6}>
          <VStack align="start" spacing={4}>
            <HStack spacing={3} align="baseline">
              <Text fontFamily={FONT_MONO} fontSize="xs" color={C.muted} flexShrink={0}>
                {project.index}
              </Text>
              <Heading
                fontFamily={FONT_DISPLAY}
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="400"
                color={C.text}
                lineHeight="1.2"
              >
                {project.title}
              </Heading>
            </HStack>

            <Text fontFamily={FONT_BODY} fontSize="sm" color={C.subtext} lineHeight="1.85">
              {project.description}
            </Text>

            <Wrap mt={1} gap={3}>
              {project.tech.map((t) => (
                <WrapItem key={t}>
                  <Text
                    fontFamily={FONT_MONO}
                    fontSize="11px"
                    color={C.muted}
                    letterSpacing="0.08em"
                    borderBottom={`1px dashed ${C.border}`}
                    pb="1px"
                  >
                    {t}
                  </Text>
                </WrapItem>
              ))}
            </Wrap>
          </VStack>

          <HStack spacing={3} flexWrap="wrap">
            {project.links.demo && (
              <Button
                as="a"
                href={project.links.demo}
                fontFamily={FONT_BODY}
                fontSize="xs"
                fontWeight="600"
                letterSpacing="0.08em"
                textTransform="uppercase"
                px={5}
                py={2}
                h="auto"
                bg={C.accent}
                color={C.bg}
                borderRadius="2px"
                _hover={{ bg: C.accentDim, transform: "translateY(-1px)" }}
                transition="all 0.2s"
              >
                Live Demo ↗
              </Button>
            )}
            {project.links.github && (
              <Button
                as="a"
                href={project.links.github}
                fontFamily={FONT_BODY}
                fontSize="xs"
                fontWeight="500"
                letterSpacing="0.08em"
                textTransform="uppercase"
                px={5}
                py={2}
                h="auto"
                bg="transparent"
                color={C.subtext}
                border={`1px solid ${C.border}`}
                borderRadius="2px"
                _hover={{ borderColor: C.muted, color: C.text }}
                transition="all 0.2s"
              >
                GitHub
              </Button>
            )}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

export function Projects() {
  return (
    <Box as="section" id="projects" py={{ base: 24, md: 32 }}>
      <Container maxW="7xl" px={{ base: 6, md: 10 }}>
        <Flex align="baseline" gap={6} mb={16}>
          <Text fontFamily={FONT_MONO} fontSize="xs" color={C.accent} letterSpacing="0.2em">
            02
          </Text>
          <Heading
            fontFamily={FONT_DISPLAY}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="400"
            color={C.text}
          >
            Selected Work
          </Heading>
          <Box flex={1} h="1px" bg={C.border} display={{ base: "none", md: "block" }} />
        </Flex>

        <VStack spacing={8} align="stretch">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.index} project={project} />
          ))}
        </VStack>
      </Container>
    </Box>
  );
}

export default Projects;