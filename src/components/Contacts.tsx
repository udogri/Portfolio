"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { C, FONT_BODY, FONT_DISPLAY, FONT_MONO } from "./tokens";

// ─── Social Icons ─────────────────────────────────────────────────────────────

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// ─── Config ───────────────────────────────────────────────────────────────────

const EMAIL = "oudogri@gmail.com";

// Pre-filled mailto — opens default mail client with To, Subject & body ready
const MAILTO_HREF = [
  `mailto:${EMAIL}`,
  `?subject=${encodeURIComponent("Let's Work Together")}`,
  `&body=${encodeURIComponent(
    "Hi,\n\nI came across your portfolio and would love to discuss a potential opportunity.\n\nA bit about what I'm looking for:\n\n\nLooking forward to hearing from you!"
  )}`,
].join("");

const socials = [
  {
    label: "GitHub",
    handle: "@udogri",
    href: "https://github.com",
    icon: <GitHubIcon />,
    color: "#ffffff",
  },
  {
    label: "LinkedIn",
    handle: "udogri oruaro",
    href: "https://linkedin.com/in/udogri-oruaro/",
    icon: <LinkedInIcon />,
    color: "#0A66C2",
  },
  {
    label: "Twitter / X",
    handle: "@oruaro6",
    href: "https://x.com/Oruaro6",
    icon: <TwitterIcon />,
    color: "#ffffff",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Contact() {
  return (
    <Box
      as="section"
      id="contact"
      py={{ base: 24, md: 40 }}
      borderTop={`1px solid ${C.border}`}
      position="relative"
      overflow="hidden"
    >
      {/* Background glow */}
      <Box
        position="absolute"
        bottom="-20%"
        left="50%"
        transform="translateX(-50%)"
        w="600px"
        h="300px"
        borderRadius="full"
        background={`radial-gradient(ellipse, ${C.accent}08 0%, transparent 70%)`}
        pointerEvents="none"
      />

      <Container maxW="7xl" px={{ base: 6, md: 10 }} position="relative">

        {/* ── Section header ──────────────────────────────────────────── */}
        <Flex align="baseline" gap={6} mb={16}>
          <Text fontFamily={FONT_MONO} fontSize="xs" color={C.accent} letterSpacing="0.2em">
            04
          </Text>
          <Heading
            fontFamily={FONT_DISPLAY}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="400"
            color={C.text}
          >
            Let's Work Together
          </Heading>
          <Box flex={1} h="1px" bg={C.border} display={{ base: "none", md: "block" }} />
        </Flex>

        {/* ── Email CTA ───────────────────────────────────────────────── */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "start", md: "end" }}
          gap={12}
          mb={{ base: 20, md: 28 }}
        >
          <VStack align="start" spacing={6} maxW="480px">
            <Text fontFamily={FONT_BODY} fontSize="lg" color={C.subtext} lineHeight="1.8">
              Currently open to freelance engagements, contract roles, and
              select full-time opportunities. I bring strong opinions on
              architecture and a relentless eye for detail.
            </Text>

            <VStack align="start" spacing={3}>
              {[
                "React / TypeScript specialist",
                "Strong communication & async-first workflow",
                "Available for immediate start",
              ].map((point) => (
                <HStack key={point} spacing={3}>
                  <Text color={C.accent} fontSize="xs">✦</Text>
                  <Text fontFamily={FONT_BODY} fontSize="sm" color={C.muted}>
                    {point}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </VStack>

          <VStack align={{ base: "start", md: "end" }} spacing={4}>
            <Button
              as="a"
              href={MAILTO_HREF}
              fontFamily={FONT_BODY}
              fontSize="sm"
              fontWeight="600"
              letterSpacing="0.08em"
              textTransform="uppercase"
              px={10}
              py={7}
              h="auto"
              bg={C.accent}
              color={C.bg}
              borderRadius="2px"
              _hover={{
                bg: C.accentDim,
                transform: "translateY(-2px)",
                boxShadow: `0 16px 40px ${C.accent}30`,
              }}
              transition="all 0.2s"
            >
              Send Me an Email ↗
            </Button>

            {/* Clickable email address as a fallback mailto too */}
            <Text
              as="a"
              href={MAILTO_HREF}
              fontFamily={FONT_MONO}
              fontSize="xs"
              color={C.muted}
              textDecoration="none"
              _hover={{ color: C.accent }}
              transition="color 0.2s"
            >
              {EMAIL}
            </Text>
          </VStack>
        </Flex>

        {/* ── Find Me Elsewhere ───────────────────────────────────────── */}
        <Flex align="baseline" gap={6} mb={10}>
          <Text fontFamily={FONT_MONO} fontSize="xs" color={C.accent} letterSpacing="0.2em">
            05
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

        <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} maxW="680px">
          {socials.map(({ label, handle, href, icon, color }) => (
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
              role="group"
              _hover={{ borderColor: C.muted, bg: C.surface, textDecoration: "none" }}
              transition="all 0.2s"
            >
              <HStack spacing={3} mb={3} align="center">
                <Box color={C.muted} _groupHover={{ color }} transition="color 0.2s">
                  {icon}
                </Box>
                <Text fontFamily={FONT_MONO} fontSize="xs" color={C.accent} letterSpacing="0.1em">
                  {label}
                </Text>
              </HStack>
              <Text fontFamily={FONT_BODY} fontSize="sm" color={C.subtext}>
                {handle}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

      </Container>
    </Box>
  );
}

export default Contact;