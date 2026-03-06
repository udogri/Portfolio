"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { C, FONT_BODY, FONT_DISPLAY, FONT_MONO } from "./tokens";

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

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "start", md: "end" }}
          gap={12}
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
                  <Text color={C.accent} fontSize="xs">
                    ✦
                  </Text>
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
              href="mailto:your@email.com"
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
            <Text fontFamily={FONT_MONO} fontSize="xs" color={C.muted}>
              your@email.com
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Contact;