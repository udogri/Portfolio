"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { C, FONT_BODY, FONT_DISPLAY, FONT_MONO } from "./tokens";

const SKILL_GROUPS = [
  {
    category: "Core",
    skills: ["TypeScript", "React", "Next.js", "HTML / CSS"],
  },
  {
    category: "Ecosystem",
    skills: ["Zustand", "React Query", "React Hook Form", "Zod"],
  },
  {
    category: "Tooling",
    skills: ["Vite", "Webpack", "Vitest", "Playwright"],
  },
  {
    category: "Platform",
    skills: ["Firebase", "Vercel", "GitHub Actions", "Chakra UI"],
  },
];

export function Skills() {
  return (
    <Box
      as="section"
      id="skills"
      py={{ base: 24, md: 32 }}
      borderTop={`1px solid ${C.border}`}
    >
      <Container maxW="7xl" px={{ base: 6, md: 10 }}>
        <Flex align="baseline" gap={6} mb={16}>
          <Text fontFamily={FONT_MONO} fontSize="xs" color={C.accent} letterSpacing="0.2em">
            03
          </Text>
          <Heading
            fontFamily={FONT_DISPLAY}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="400"
            color={C.text}
          >
            Skills & Tools
          </Heading>
          <Box flex={1} h="1px" bg={C.border} display={{ base: "none", md: "block" }} />
        </Flex>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={8}>
          {SKILL_GROUPS.map(({ category, skills }) => (
            <VStack key={category} align="start" spacing={4}>
              <Text
                fontFamily={FONT_MONO}
                fontSize="10px"
                letterSpacing="0.2em"
                textTransform="uppercase"
                color={C.accent}
              >
                {category}
              </Text>
              <VStack align="start" spacing={3}>
                {skills.map((skill) => (
                  <HStack key={skill} spacing={3}>
                    <Box w="3px" h="3px" bg={C.muted} borderRadius="full" />
                    <Text
                      fontFamily={FONT_BODY}
                      fontSize="sm"
                      fontWeight="400"
                      color={C.subtext}
                      _hover={{ color: C.text }}
                      transition="color 0.15s"
                      cursor="default"
                    >
                      {skill}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Skills;