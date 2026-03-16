"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { C, FONT_BODY, FONT_DISPLAY, FONT_MONO } from "./tokens";
import cvFile from "../assets/OruaroDevCv.pdf";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

export function Hero() {
  return (
    <Box
      as="section"
      minH="100vh"
      pt={{ base: "80px", md: "96px" }}
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
    >
      {/* Subtle grid background */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.03}
        backgroundImage="linear-gradient(#7FFFD4 1px, transparent 1px), linear-gradient(90deg, #7FFFD4 1px, transparent 1px)"
        backgroundSize="60px 60px"
        pointerEvents="none"
      />

      {/* Glow blob */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="500px"
        h="500px"
        borderRadius="full"
        background={`radial-gradient(circle, ${C.accent}12 0%, transparent 70%)`}
        pointerEvents="none"
      />

      <Container maxW="7xl" px={{ base: 6, md: 10 }} position="relative">
        <VStack align="start" spacing={0} maxW="750px">

          {/* Eyebrow */}
          <Box
            fontFamily={FONT_MONO}
            fontSize="sm"
            color={C.accent}
            letterSpacing="0.2em"
            mb={6}
            opacity={0}
            animation={`${fadeUp} 0.7s ease 0.1s forwards`}
          >
            FRONTEND ENGINEER
          </Box>

          {/* Headline */}
          <Heading
            as="h1"
            fontFamily={FONT_DISPLAY}
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="400"
            lineHeight="1.08"
            color={C.text}
            mb={8}
            opacity={0}
            animation={`${fadeUp} 0.7s ease 0.25s forwards`}
          >
            Hi I'm{" "}
            <Box
              as="em"
              fontStyle="italic"
              color={C.accent}
              sx={{
                background: `linear-gradient(120deg, ${C.accent}, ${C.accentDim}, ${C.accent})`,
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: `${shimmer} 4s linear infinite`,
              }}
            >
            Oruaro
            </Box>{", "}
            a Frontend Engineer.
          </Heading>

          {/* Body */}
          {/* <Text
            fontFamily={FONT_BODY}
            fontSize={{ base: "md", md: "lg" }}
            color={C.subtext}
            lineHeight="1.8"
            maxW="560px"
            mb={10}
            opacity={0}
            animation={`${fadeUp} 0.7s ease 0.4s forwards`}
          >
            Frontend engineer actively building the web — building
            performance-driven, maintainable interfaces that teams love to work
            with and users love to use.
          </Text> */}

          {/* CTAs */}
          <HStack
            spacing={4}
            flexWrap="wrap"
            gap={4}
            opacity={0}
            animation={`${fadeUp} 0.7s ease 0.55s forwards`}
          >
            {/* Download CV */}
            <Button
              as="a"
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              fontFamily={FONT_BODY}
              fontSize="sm"
              fontWeight="600"
              letterSpacing="0.06em"
              textTransform="uppercase"
              px={8}
              py={6}
              h="auto"
              bg={C.accent}
              color={C.bg}
              borderRadius="2px"
              _hover={{
                bg: C.accentDim,
                transform: "translateY(-2px)",
                boxShadow: `0 12px 32px ${C.accent}40`,
              }}
              transition="all 0.2s"
            >
              ↓ View CV
            </Button>

            {/* View CV online */}
            {/* <Button
              as="a"
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              fontFamily={FONT_BODY}
              fontSize="sm"
              fontWeight="500"
              letterSpacing="0.06em"
              textTransform="uppercase"
              px={8}
              py={6}
              h="auto"
              bg="transparent"
              color={C.text}
              border={`1px solid ${C.border}`}
              borderRadius="2px"
              _hover={{
                borderColor: C.muted,
                transform: "translateY(-2px)",
              }}
              transition="all 0.2s"
            >
              View CV ↗
            </Button> */}
          </HStack>

          
        </VStack>
      </Container>
    </Box>
  );
}

export default Hero;