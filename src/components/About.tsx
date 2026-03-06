"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { C, FONT_BODY, FONT_DISPLAY, FONT_MONO } from "./tokens";
import { Navbar } from "./Navbar";
import Footer  from "./Footer";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ─── Timeline entry type ──────────────────────────────────────────────────────
interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

const TIMELINE: TimelineItem[] = [
  {
    year: "2023 – Now",
    role: "Senior Frontend Engineer",
    company: "Company Name",
    description:
      "Leading frontend architecture across multiple product surfaces. Introduced typed design tokens, component libraries, and established code-review practices that reduced review cycles by 30%.",
  },
  {
    year: "2021 – 2023",
    role: "Frontend Engineer",
    company: "Previous Company",
    description:
      "Built and maintained customer-facing React applications used by 50k+ monthly active users. Migrated legacy JavaScript codebase to strict TypeScript.",
  },
  {
    year: "2019 – 2021",
    role: "Junior Developer",
    company: "First Company",
    description:
      "Started out building UI components and learning the fundamentals of scalable frontend systems, accessibility, and cross-browser compatibility.",
  },
];

// ─── Values ───────────────────────────────────────────────────────────────────
const VALUES = [
  {
    symbol: "01",
    title: "Type Safety First",
    body: "TypeScript isn't optional — it's how I communicate intent, catch bugs before they ship, and make codebases welcoming to future contributors.",
  },
  {
    symbol: "02",
    title: "Performance is a Feature",
    body: "Bundle sizes, render cycles, and Core Web Vitals matter. I treat performance as a first-class concern, not an afterthought.",
  },
  {
    symbol: "03",
    title: "Design Literacy",
    body: "I work closely with design teams and understand the nuance behind spacing, typography, and motion. Good code should produce good UI.",
  },
  {
    symbol: "04",
    title: "Async-First Communication",
    body: "Clear written communication, well-documented PRs, and thoughtful async updates make distributed teams work better for everyone.",
  },
];

// ─── About Page ───────────────────────────────────────────────────────────────
export default function About() {
  return (
    <Box bg={C.bg} color={C.text} minH="100vh" fontFamily={FONT_BODY}>
      <Navbar />

      <Box as="main" pt={{ base: "80px", md: "96px" }}>

        {/* ── Hero band ─────────────────────────────────────────────────── */}
        <Box
          position="relative"
          overflow="hidden"
          borderBottom={`1px solid ${C.border}`}
          py={{ base: 20, md: 28 }}
        >
          {/* Grid bg */}
          <Box
            position="absolute"
            inset={0}
            opacity={0.025}
            backgroundImage={`linear-gradient(${C.accent} 1px, transparent 1px), linear-gradient(90deg, ${C.accent} 1px, transparent 1px)`}
            backgroundSize="60px 60px"
            pointerEvents="none"
          />
          {/* Glow */}
          <Box
            position="absolute"
            top="-30%"
            left="-10%"
            w="500px"
            h="500px"
            borderRadius="full"
            background={`radial-gradient(circle, ${C.accent}10 0%, transparent 65%)`}
            pointerEvents="none"
          />

          <Container maxW="7xl" px={{ base: 6, md: 10 }} position="relative">
            <Flex
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
              gap={{ base: 10, md: 16 }}
            >
              {/* Photo */}
              <Box
                flexShrink={0}
                w={{ base: "120px", md: "180px" }}
                h={{ base: "120px", md: "180px" }}
                borderRadius="4px"
                overflow="hidden"
                border={`1px solid ${C.border}`}
                opacity={0}
                animation={`${fadeUp} 0.6s ease 0.1s forwards`}
                position="relative"
              >
                <Image
                  src="https://placehold.co/360x360/111118/7FFFD4?text=Photo"
                  // Replace with your actual photo: src="/photo.jpg"
                  alt="Your Name"
                  w="full"
                  h="full"
                  objectFit="cover"
                />
                {/* Accent corner */}
                <Box
                  position="absolute"
                  bottom={0}
                  right={0}
                  w="24px"
                  h="24px"
                  borderTop={`2px solid ${C.accent}`}
                  borderLeft={`2px solid ${C.accent}`}
                  transform="translate(50%, 50%) rotate(180deg)"
                />
              </Box>

              {/* Intro text */}
              <VStack align="start" spacing={4} flex={1}>
                <Box
                  fontFamily={FONT_MONO}
                  fontSize="xs"
                  color={C.accent}
                  letterSpacing="0.2em"
                  opacity={0}
                  animation={`${fadeUp} 0.6s ease 0.15s forwards`}
                >
                  ABOUT
                </Box>
                <Heading
                  fontFamily={FONT_DISPLAY}
                  fontSize={{ base: "3xl", md: "5xl" }}
                  fontWeight="400"
                  lineHeight="1.1"
                  color={C.text}
                  opacity={0}
                  animation={`${fadeUp} 0.6s ease 0.25s forwards`}
                >
                  I'm YourName,{" "}
                  <Box as="em" fontStyle="italic" color={C.accent}>
                    a frontend engineer
                  </Box>{" "}
                  who obsesses over the details.
                </Heading>
                <Text
                  fontFamily={FONT_BODY}
                  fontSize={{ base: "md", md: "lg" }}
                  color={C.subtext}
                  lineHeight="1.8"
                  maxW="600px"
                  opacity={0}
                  animation={`${fadeUp} 0.6s ease 0.35s forwards`}
                >
                  Based in [City]. I've spent the last {new Date().getFullYear() - 2019}+ years building
                  production React applications — from early-stage startups to
                  established product teams. I care deeply about performance,
                  accessibility, and the craft of writing code that's a joy to
                  maintain.
                </Text>

                <HStack
                  spacing={4}
                  pt={2}
                  opacity={0}
                  animation={`${fadeUp} 0.6s ease 0.45s forwards`}
                >
                  <Button
                    as="a"
                    href="/cv.pdf"
                    download
                    fontFamily={FONT_BODY}
                    fontSize="xs"
                    fontWeight="600"
                    letterSpacing="0.08em"
                    textTransform="uppercase"
                    px={6}
                    py={5}
                    h="auto"
                    bg={C.accent}
                    color={C.bg}
                    borderRadius="2px"
                    _hover={{
                      bg: C.accentDim,
                      transform: "translateY(-1px)",
                      boxShadow: `0 8px 24px ${C.accent}30`,
                    }}
                    transition="all 0.2s"
                  >
                    ↓ Download CV
                  </Button>
                  <Button
                    as="a"
                    href="/#contact"
                    fontFamily={FONT_BODY}
                    fontSize="xs"
                    fontWeight="500"
                    letterSpacing="0.08em"
                    textTransform="uppercase"
                    px={6}
                    py={5}
                    h="auto"
                    bg="transparent"
                    color={C.text}
                    border={`1px solid ${C.border}`}
                    borderRadius="2px"
                    _hover={{ borderColor: C.muted, transform: "translateY(-1px)" }}
                    transition="all 0.2s"
                  >
                    Get In Touch
                  </Button>
                </HStack>
              </VStack>
            </Flex>
          </Container>
        </Box>

        {/* ── Values ────────────────────────────────────────────────────── */}
        <Box py={{ base: 20, md: 28 }} borderBottom={`1px solid ${C.border}`}>
          <Container maxW="7xl" px={{ base: 6, md: 10 }}>
            <Flex align="baseline" gap={6} mb={14}>
              <Text fontFamily={FONT_MONO} fontSize="xs" color={C.accent} letterSpacing="0.2em">
                01
              </Text>
              <Heading
                fontFamily={FONT_DISPLAY}
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="400"
                color={C.text}
              >
                How I Work
              </Heading>
              <Box flex={1} h="1px" bg={C.border} display={{ base: "none", md: "block" }} />
            </Flex>

            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={8}>
              {VALUES.map(({ symbol, title, body }) => (
                <VStack
                  key={symbol}
                  align="start"
                  spacing={4}
                  p={6}
                  border={`1px solid ${C.border}`}
                  borderRadius="4px"
                  _hover={{ borderColor: C.muted, bg: C.surface }}
                  transition="all 0.2s"
                >
                  <Text fontFamily={FONT_MONO} fontSize="xs" color={C.accent} letterSpacing="0.2em">
                    {symbol}
                  </Text>
                  <Text
                    fontFamily={FONT_DISPLAY}
                    fontSize="lg"
                    fontWeight="400"
                    color={C.text}
                    lineHeight="1.3"
                  >
                    {title}
                  </Text>
                  <Text fontFamily={FONT_BODY} fontSize="sm" color={C.subtext} lineHeight="1.8">
                    {body}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* ── Experience timeline ───────────────────────────────────────── */}
        <Box py={{ base: 20, md: 28 }} borderBottom={`1px solid ${C.border}`}>
          <Container maxW="7xl" px={{ base: 6, md: 10 }}>
            <Flex align="baseline" gap={6} mb={14}>
              <Text fontFamily={FONT_MONO} fontSize="xs" color={C.accent} letterSpacing="0.2em">
                02
              </Text>
              <Heading
                fontFamily={FONT_DISPLAY}
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="400"
                color={C.text}
              >
                Experience
              </Heading>
              <Box flex={1} h="1px" bg={C.border} display={{ base: "none", md: "block" }} />
            </Flex>

            <VStack spacing={0} align="stretch">
              {TIMELINE.map((item, i) => (
                <Flex
                  key={item.year}
                  direction={{ base: "column", md: "row" }}
                  gap={{ base: 3, md: 10 }}
                  py={8}
                  borderBottom={i < TIMELINE.length - 1 ? `1px solid ${C.border}` : "none"}
                  _hover={{ "& .year-accent": { color: C.accent } }}
                  role="group"
                >
                  {/* Year */}
                  <Box minW={{ md: "160px" }}>
                    <Text
                      className="year-accent"
                      fontFamily={FONT_MONO}
                      fontSize="xs"
                      color={C.muted}
                      letterSpacing="0.1em"
                      transition="color 0.2s"
                    >
                      {item.year}
                    </Text>
                  </Box>

                  {/* Content */}
                  <VStack align="start" spacing={2} flex={1}>
                    <HStack spacing={3} align="baseline" flexWrap="wrap">
                      <Text
                        fontFamily={FONT_DISPLAY}
                        fontSize={{ base: "lg", md: "xl" }}
                        fontWeight="400"
                        color={C.text}
                      >
                        {item.role}
                      </Text>
                      <Text fontFamily={FONT_MONO} fontSize="xs" color={C.muted}>
                        @ {item.company}
                      </Text>
                    </HStack>
                    <Text fontFamily={FONT_BODY} fontSize="sm" color={C.subtext} lineHeight="1.8">
                      {item.description}
                    </Text>
                  </VStack>
                </Flex>
              ))}
            </VStack>
          </Container>
        </Box>

        {/* ── Elsewhere ─────────────────────────────────────────────────── */}
        <Box py={{ base: 20, md: 28 }}>
          <Container maxW="7xl" px={{ base: 6, md: 10 }}>
            <Flex align="baseline" gap={6} mb={14}>
              <Text fontFamily={FONT_MONO} fontSize="xs" color={C.accent} letterSpacing="0.2em">
                03
              </Text>
              <Heading
                fontFamily={FONT_DISPLAY}
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="400"
                color={C.text}
              >
                Find Me Elsewhere
              </Heading>
              <Box flex={1} h="1px" bg={C.border} display={{ base: "none", md: "block" }} />
            </Flex>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} maxW="680px">
              {[
                { label: "GitHub", handle: "@yourhandle", href: "https://github.com" },
                { label: "LinkedIn", handle: "linkedin.com/in/you", href: "https://linkedin.com" },
                { label: "Twitter / X", handle: "@yourhandle", href: "https://twitter.com" },
              ].map(({ label, handle, href }) => (
                <Box
                  key={label}
                  as="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  p={5}
                  border={`1px solid ${C.border}`}
                  borderRadius="4px"
                  display="block"
                  _hover={{ borderColor: C.muted, bg: C.surface, textDecoration: "none" }}
                  transition="all 0.2s"
                >
                  <Text fontFamily={FONT_MONO} fontSize="xs" color={C.accent} letterSpacing="0.1em" mb={1}>
                    {label}
                  </Text>
                  <Text fontFamily={FONT_BODY} fontSize="sm" color={C.subtext}>
                    {handle}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

      </Box>

      <Footer />
    </Box>
  );
}