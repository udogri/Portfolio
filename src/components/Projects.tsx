"use client";

import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { C, FONT_BODY, FONT_DISPLAY, FONT_MONO } from "./tokens";
import OneByOne from "../assets/oneByOne.png";
import CineScout from "../assets/CineScout.png";
import FindIt from "../assets/FindIt.png";

// ─── GitHub Icon ──────────────────────────────────────────────────────────────

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

// ─── Project data ─────────────────────────────────────────────────────────────

interface Project {
  index: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  tech: string[];
  links: { demo?: string; github?: string };
  featured: boolean;
  image: string;
  year: string;
  role: string;
}

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "OneByOne",
    shortDescription:
      "OneByOne is a Scholarship platform that helps to bring underprivilege students and Sponsors together with the help of selected school admins of such school.",
    fullDescription:
      "Scholarship platform that helps to bring underprivilege students and Sponsors together with the help of selected school admins of such school. Students get sponsored and mentored simultaneously, process to sponsor and identify needy students is easy for all parties to make a difference",
    highlights: [
      "Scholarship opportunities for students",
      "Mentorship opportunities for such students",
      "Database that helps to keep tract of every student that is being sponsored and mentored",
      "Easy process for sponsors to find students to sponsor and mentor",
    ],
    tech: ["React", "JavaScript", "Chakra UI", "Vite", "Node.js"],
    links: { demo: "https://onebyone.ng", github: "https://github.com" },
    featured: true,
    image: OneByOne,
    year: "2024",
    role: "Lead Frontend Engineer",
  },
  {
    index: "02",
    title: "CineScout",
    shortDescription:
      "A movie discovery app with advanced filtering, personalised watchlists, and strongly-typed API integrations with TMDB.",
    fullDescription:
      "CineScout is a movie and TV discovery platform that connects to the TMDB API to surface personalised recommendations. The app features advanced filtering by genre, release year, and rating, with a fully typed data-fetching layer built on React Query.\n\nParticular attention was paid to skeleton loading states, optimistic updates, and infinite scroll — keeping the experience fluid even on variable network conditions.",
    highlights: [
      "Fully typed TMDB API integration with Zod schema validation",
      "Infinite scroll with React Query's useInfiniteQuery",
      "Personalised watchlist with localStorage persistence",
      "Skeleton loading states and optimistic UI updates",
    ],
    tech: ["React", "TypeScript", "Chakra UI", "Node.js", "Vite"],
    links: { demo: "https://cine-scout-delta.vercel.app", github: "https://github.com" },
    featured: false,
    image: CineScout,
    year: "2023",
    role: "Solo Developer",
  },
  {
    index: "03",
    title: "FindIt",
    shortDescription:
      "A location-aware search tool for discovering nearby services, built with geolocation APIs and real-time map rendering.",
    fullDescription:
      "FindIt is a proximity-based search application that helps users discover nearby services and points of interest. It integrates the browser Geolocation API with a mapping layer to surface results in real time as the user pans or zooms.\n\nThe main engineering challenges were debouncing expensive map re-renders, managing complex async state across concurrent API calls, and building an accessible, keyboard-navigable interface.",
    highlights: [
      "Geolocation API integration with graceful fallback to IP-based lookup",
      "Debounced map interactions to prevent excessive API calls",
      "Accessible keyboard navigation throughout the search flow",
      "Concurrent API call management with React Query",
    ],
    tech: ["React", "JavaScript", "Chakra UI", "Node.js", "Vite"],
    links: { demo: "https://find-it-flame.vercel.app/", github: "https://github.com" },
    featured: false,
    image: FindIt,
    year: "2023",
    role: "Solo Developer",
  },
];

// ─── Project Drawer ───────────────────────────────────────────────────────────

function ProjectDrawer({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="lg">
      <DrawerOverlay bg="blackAlpha.800" backdropFilter="blur(4px)" />
      <DrawerContent bg={C.surface} borderLeft={`1px solid ${C.border}`}>
        <DrawerCloseButton
          color={C.subtext}
          top={5}
          right={5}
          _hover={{ color: C.text, bg: "transparent" }}
        />

        <DrawerBody p={0} overflowY="auto">
          {/* Hero image */}
          <Box h="260px" overflow="hidden" bg={C.bg} borderBottom={`1px solid ${C.border}`}>
            <Image
              src={project.image}
              alt={project.title}
              w="full"
              h="full"
              objectFit="cover"
              objectPosition="top"
            />
          </Box>

          <VStack align="start" spacing={0} px={{ base: 6, md: 10 }} py={8}>

            {/* Header */}
            <HStack spacing={3} mb={2} flexWrap="wrap">
              <Text fontFamily={FONT_MONO} fontSize="xs" color={C.muted}>
                {project.index}
              </Text>
              {project.featured && (
                <Tag
                  fontFamily={FONT_MONO}
                  fontSize="9px"
                  letterSpacing="0.15em"
                  textTransform="uppercase"
                  bg={`${C.accent}20`}
                  color={C.accent}
                  border={`1px solid ${C.accent}40`}
                  borderRadius="2px"
                  px={2}
                  py={1}
                >
                  Featured
                </Tag>
              )}
            </HStack>

            <Heading
              fontFamily={FONT_DISPLAY}
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="400"
              color={C.text}
              lineHeight="1.2"
              mb={2}
            >
              {project.title}
            </Heading>

            <HStack spacing={5} mb={8} flexWrap="wrap">
              <Text fontFamily={FONT_MONO} fontSize="11px" color={C.muted} letterSpacing="0.08em">
                {project.year}
              </Text>
              <Box w="1px" h="12px" bg={C.border} />
              <Text fontFamily={FONT_MONO} fontSize="11px" color={C.muted} letterSpacing="0.08em">
                {project.role}
              </Text>
            </HStack>

            {/* Full description */}
            <Box mb={8} w="full">
              <Text
                fontFamily={FONT_MONO}
                fontSize="10px"
                letterSpacing="0.2em"
                textTransform="uppercase"
                color={C.accent}
                mb={4}
              >
                Overview
              </Text>
              {project.fullDescription.split("\n\n").map((para, i) => (
                <Text
                  key={i}
                  fontFamily={FONT_BODY}
                  fontSize="sm"
                  color={C.subtext}
                  lineHeight="1.9"
                  mb={4}
                >
                  {para}
                </Text>
              ))}
            </Box>

            {/* Highlights */}
            <Box mb={8} w="full">
              <Text
                fontFamily={FONT_MONO}
                fontSize="10px"
                letterSpacing="0.2em"
                textTransform="uppercase"
                color={C.accent}
                mb={4}
              >
                Key Highlights
              </Text>
              <VStack align="start" spacing={3}>
                {project.highlights.map((h, i) => (
                  <HStack key={i} spacing={3} align="start">
                    <Text color={C.accent} fontSize="xs" mt="2px" flexShrink={0}>✦</Text>
                    <Text fontFamily={FONT_BODY} fontSize="sm" color={C.subtext} lineHeight="1.7">
                      {h}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </Box>

            {/* Tech stack */}
            <Box mb={10} w="full">
              <Text
                fontFamily={FONT_MONO}
                fontSize="10px"
                letterSpacing="0.2em"
                textTransform="uppercase"
                color={C.accent}
                mb={4}
              >
                Tech Stack
              </Text>
              <Wrap gap={2}>
                {project.tech.map((t) => (
                  <WrapItem key={t}>
                    <Box
                      fontFamily={FONT_MONO}
                      fontSize="11px"
                      color={C.subtext}
                      letterSpacing="0.08em"
                      px={3}
                      py={1}
                      border={`1px solid ${C.border}`}
                      borderRadius="3px"
                      bg={C.bg}
                    >
                      {t}
                    </Box>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>

            {/* Links */}
            <Box
              w="full"
              pt={6}
              borderTop={`1px solid ${C.border}`}
            >
              <Text
                fontFamily={FONT_MONO}
                fontSize="10px"
                letterSpacing="0.2em"
                textTransform="uppercase"
                color={C.accent}
                mb={4}
              >
                Links
              </Text>
              <HStack spacing={3} flexWrap="wrap">
                {project.links.demo && (
                  <Button
                    as="a"
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
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
                    leftIcon={<ExternalIcon />}
                    _hover={{ bg: C.accentDim, transform: "translateY(-1px)" }}
                    transition="all 0.2s"
                  >
                    Live
                  </Button>
                )}
                {/* {project.links.github && (
                  <Button
                    as="a"
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
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
                    leftIcon={<GitHubIcon />}
                    _hover={{ borderColor: C.muted, color: C.text }}
                    transition="all 0.2s"
                  >
                    GitHub
                  </Button>
                )} */}
              </HStack>
            </Box>

          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
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
          <Box
            position="absolute"
            inset={0}
            background={`linear-gradient(to right, ${C.bg}00, ${C.bg}60)`}
            opacity={hovered ? 1 : 0}
            transition="opacity 0.3s"
            pointerEvents="none"
          />
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
              {project.shortDescription}
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
            {/* Live demo — opens in new tab */}
            {project.links.demo && (
              <Button
                as="a"
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
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
                onClick={(e) => e.stopPropagation()}
              >
                Live
              </Button>
            )}

            {/* View details — opens drawer */}
            <Button
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
              _hover={{ borderColor: C.accent, color: C.accent }}
              transition="all 0.2s"
              onClick={() => onOpen(project)}
            >
              View Details →
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

// ─── Projects Section ─────────────────────────────────────────────────────────

export function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleOpen = (project: Project) => {
    setActiveProject(project);
    onOpen();
  };

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
            <ProjectCard key={project.title} project={project} onOpen={handleOpen} />
          ))}
        </VStack>
      </Container>

      <ProjectDrawer project={activeProject} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default Projects;