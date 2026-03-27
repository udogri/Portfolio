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
import type { ReactElement } from "react";
import { C, FONT_BODY, FONT_DISPLAY, FONT_MONO } from "./tokens";

// ─── Inline SVG icons ─────────────────────────────────────────────────────────

const icons: Record<string, ReactElement> = {
  JavaScript: (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#F7DF1E" />
      <path d="M9.5 24.5l2.3-1.4c.4.8.8 1.4 1.7 1.4.9 0 1.4-.3 1.4-1.7V15h2.8v7.9c0 2.8-1.6 4-4 4-2.1 0-3.4-1.1-4.2-2.4zM19 24.2l2.3-1.4c.6 1 1.4 1.7 2.7 1.7 1.2 0 1.9-.6 1.9-1.4 0-1-.7-1.3-2-1.9l-.7-.3c-2-.8-3.3-1.9-3.3-4.1 0-2 1.6-3.5 4-3.5 1.7 0 3 .6 3.9 2.2l-2.2 1.4c-.5-.8-1-1.1-1.7-1.1-.8 0-1.3.5-1.3 1.1 0 .8.5 1.1 1.6 1.6l.7.3c2.4 1 3.6 2.1 3.6 4.4 0 2.5-2 3.7-4.6 3.7-2.6 0-4.2-1.2-5-2.7z" fill="#222" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#3178C6" />
      <path d="M18.6 22.4v2.5c.4.2.9.4 1.5.5.6.1 1.2.2 1.8.2.6 0 1.2-.1 1.7-.2.5-.1 1-.3 1.4-.6.4-.3.7-.6.9-1.1.2-.4.3-1 .3-1.6 0-.5-.1-.9-.2-1.2-.1-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.7-.4-.2-.9-.4-1.4-.6-.4-.1-.7-.3-1-.4-.3-.1-.5-.2-.7-.4-.2-.1-.3-.3-.4-.4-.1-.2-.1-.3-.1-.5 0-.2 0-.3.1-.5.1-.1.2-.3.3-.4.1-.1.3-.2.5-.2.2-.1.4-.1.7-.1.2 0 .4 0 .6.1.2 0 .4.1.6.2.2.1.4.2.5.3.2.1.3.3.4.4v-2.4c-.3-.1-.7-.2-1.1-.3-.4 0-.9-.1-1.4-.1-.6 0-1.1.1-1.6.2-.5.2-1 .4-1.3.7-.4.3-.7.7-.9 1.1-.2.4-.3.9-.3 1.5 0 .7.2 1.4.6 1.9.4.5 1 .9 1.9 1.3.4.2.8.3 1.1.4.3.1.6.3.8.4.2.1.4.3.5.5.1.2.2.4.2.6 0 .2 0 .3-.1.5-.1.2-.2.3-.4.4-.2.1-.3.2-.6.3-.2.1-.5.1-.7.1-.5 0-1-.1-1.5-.3-.4-.3-.9-.6-1.2-1zM14 17.1h3.4V15H7v2.1h3.4V27H14V17.1z" fill="white" />
    </svg>
  ),
  React: (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#20232A" />
      <circle cx="16" cy="16" r="2.2" fill="#61DAFB" />
      <ellipse cx="16" cy="16" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
      <ellipse cx="16" cy="16" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 16 16)" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#000" />
      <path d="M13 11h2v7.4l5.7-7.4H23L17 19l6.3 8H21l-5-6.5L14 23h-2l2.7-3.5L11 11z" fill="white" />
    </svg>
  ),
  "HTML / CSS": (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#E44D26" />
      <path d="M8 6l1.6 18L16 26l6.4-2L24 6H8zm12.5 5H12l.2 2h8.1l-.6 6.5L16 21l-3.7-1.5-.2-2.5h2l.1 1.3 1.8.5 1.8-.5.2-2.3H11.6l-.5-5h9.7l-.3 2z" fill="white" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#0F172A" />
      <path d="M16 9c-2.7 0-4.4 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.3 2.2 2.7 0 4.4-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C19.4 10.2 18.3 9 16 9zm-5 8c-2.7 0-4.4 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.3 2.2 2.7 0 4.4-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-1-2-2.2-4.3-2.2z" fill="#38BDF8" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#1a1a1a" />
      <path d="M16 5l9.5 5.5v11L16 27l-9.5-5.5v-11L16 5z" fill="none" stroke="#539E43" strokeWidth="1.3" />
      <path d="M16 10v12M11.5 12.5l4.5 3.5 4.5-3.5" stroke="#539E43" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#F05032" />
      <path d="M27.3 14.7l-10-10a1.9 1.9 0 00-2.6 0l-2 2 2.5 2.5a2.2 2.2 0 012.8 2.8l2.4 2.4a2.2 2.2 0 11-1.3 1.3l-2.3-2.3v5.9a2.2 2.2 0 11-2 0V13.3a2.2 2.2 0 01-1.2-2.9L10.9 8 4.7 14.2a1.9 1.9 0 000 2.6l10 10a1.9 1.9 0 002.6 0l10-10a1.9 1.9 0 000-2.1z" fill="white" />
    </svg>
  ),
  Zustand: (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#1a1a1a" />
      <circle cx="16" cy="13" r="5" fill="none" stroke="#7FFFD4" strokeWidth="1.5" />
      <path d="M11 18c0 3.3 2.2 6 5 6s5-2.7 5-6" stroke="#7FFFD4" strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="12" r="1" fill="#7FFFD4" />
      <circle cx="18" cy="12" r="1" fill="#7FFFD4" />
    </svg>
  ),
  "React Query": (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#FF4154" />
      <circle cx="16" cy="16" r="3.5" fill="white" />
      <path d="M16 7a9 9 0 019 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M25 16a9 9 0 01-9 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M16 25a9 9 0 01-9-9" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M7 16a9 9 0 019-9" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity=".5" />
    </svg>
  ),
  Zod: (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#3068B7" />
      <path d="M8 10h16l-9 6 5 6H8l9-6-5-6z" fill="white" />
    </svg>
  ),
  "React Hook Form": (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#EC5990" />
      <rect x="8" y="10" width="16" height="2" rx="1" fill="white" />
      <rect x="8" y="15" width="12" height="2" rx="1" fill="white" />
      <rect x="8" y="20" width="14" height="2" rx="1" fill="white" />
    </svg>
  ),
  Vite: (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#1a1a2e" />
      <path d="M27 7L15.5 27.5 14 25l9-18H27z" fill="url(#vg)" />
      <path d="M5 7l6 12-1.5 3L5 7z" fill="#41D1FF" opacity=".8" />
      <path d="M11 19l4.5 8.5-10-20.5L11 19z" fill="#BD34FE" opacity=".9" />
      <defs>
        <linearGradient id="vg" x1="14" y1="7" x2="27" y2="27" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Webpack: (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#1C78C0" />
      <path d="M16 5l9 5v11l-9 5-9-5V10l9-5z" fill="none" stroke="white" strokeWidth="1.3" />
      <path d="M16 5v8M16 19v8M7 10l9 5M16 15l9-5M7 22l9-7M16 15l9 7" stroke="white" strokeWidth="1" strokeOpacity=".6" />
    </svg>
  ),
  Vitest: (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#1a1a1a" />
      <path d="M16 6L7 22h5l4-7 4 7h5L16 6z" fill="url(#vitg)" />
      <defs>
        <linearGradient id="vitg" x1="7" y1="6" x2="25" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6EE7B7" />
          <stop offset="1" stopColor="#FCD34D" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Jest: (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#C21325" />
      <path d="M14 8h6l-1 9h-4l-1-9zM16 20a2 2 0 100 4 2 2 0 000-4z" fill="white" />
    </svg>
  ),
  Playwright: (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#2D4A5B" />
      <circle cx="16" cy="16" r="7" fill="none" stroke="#45BA6D" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="3" fill="#45BA6D" />
      <path d="M16 9v2M16 21v2M9 16h2M21 16h2" stroke="#45BA6D" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Storybook: (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#FF4785" />
      <path d="M21 6l-.3 3.5a.4.4 0 00.6.4l1.3-.9.3 17.5-11 1.5V6H21z" fill="white" />
      <path d="M14 17.5c0-.8.7-1.5 2-1.5s2 .7 2 1.5-.9 1.5-2 1.5-2-.7-2-1.5z" fill="#FF4785" />
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#1E1E1E" />
      <rect x="10" y="7" width="6" height="6" rx="3" fill="#F24E1E" />
      <rect x="16" y="7" width="6" height="6" rx="3" fill="#FF7262" />
      <rect x="10" y="13" width="6" height="6" rx="3" fill="#A259FF" />
      <rect x="10" y="19" width="6" height="6" rx="3" fill="#0ACF83" />
      <circle cx="19" cy="16" r="3" fill="#1ABCFE" />
    </svg>
  ),
  "WCAG / a11y": (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#005A9C" />
      <circle cx="16" cy="9" r="2.5" fill="white" />
      <path d="M9 14h14M13 14v9M19 14v9M16 14v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Firebase: (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#1C1C1C" />
      <path d="M10 24l3.5-15 3 5.5L19 8l3 16H10z" fill="#FFA000" />
      <path d="M10 24l3.5-7.5 3 1.5L19 8l3 16H10z" fill="#F57C00" opacity=".7" />
      <path d="M10 24l6.5-3.5L22 24H10z" fill="#FFCA28" />
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#000" />
      <path d="M16 7L28 25H4L16 7z" fill="white" />
    </svg>
  ),
  "GitHub Actions": (
    <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#24292E" />
      <circle cx="16" cy="16" r="4" fill="none" stroke="#2188FF" strokeWidth="1.5" />
      <path d="M16 7v3M16 22v3M7 16h3M22 16h3" stroke="#2188FF" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="1.5" fill="#2188FF" />
    </svg>
  ),
};

// ─── Skill groups — edit freely, layout auto-adapts ──────────────────────────

interface SkillItem { name: string }
interface SkillGroup { category: string; skills: SkillItem[] }

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Core",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "HTML / CSS" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "Git" },
      { name: "Firebase" },
      { name: "React Query" },
      { name: "Figma" },
    ],
  },
  // Uncomment or add more groups as needed:
  // {
  //   category: "State & Data",
  //   skills: [{ name: "Zustand" }, { name: "React Query" }, { name: "Zod" }, { name: "React Hook Form" }],
  // },
  // {
  //   category: "Tooling & Testing",
  //   skills: [{ name: "Vite" }, { name: "Vitest" }, { name: "Jest" }, { name: "Playwright" }],
  // },
  // {
  //   category: "Design & Platform",
  //   skills: [{ name: "Figma" }, { name: "Firebase" }, { name: "Vercel" }, { name: "GitHub Actions" }],
  // },
];

// ─── Skill row ────────────────────────────────────────────────────────────────

function SkillRow({ name }: { name: string }) {
  return (
    <HStack
      spacing={3}
      w="full"
      px={3}
      py="7px"
      borderRadius="3px"
      border="1px solid transparent"
      _hover={{ bg: C.surface, border: `1px solid ${C.border}` }}
      transition="all 0.15s ease"
      cursor="default"
      role="group"
    >
      <Box
        flexShrink={0}
        w="18px"
        h="18px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        opacity={0.7}
        _groupHover={{ opacity: 1 }}
        transition="opacity 0.15s"
      >
        {icons[name] ?? <Box w="4px" h="4px" bg={C.muted} borderRadius="full" />}
      </Box>
      <Text
        fontFamily={FONT_BODY}
        fontSize="sm"
        fontWeight="400"
        color={C.subtext}
        _groupHover={{ color: C.text }}
        transition="color 0.15s"
      >
        {name}
      </Text>
    </HStack>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Skills() {
  const groupCount = SKILL_GROUPS.length;
  const isSingleGroup = groupCount === 1;

  const gridCols =
    groupCount === 2 ? { base: 1, sm: 2 }
    : groupCount === 3 ? { base: 1, sm: 2, lg: 3 }
    : { base: 1, sm: 2, lg: 4 };

  return (
    <Box
      as="section"
      id="skills"
      py={{ base: 24, md: 32 }}
      borderTop={`1px solid ${C.border}`}
    >
      <Container maxW="7xl" px={{ base: 6, md: 10 }}>

        {/* Section header */}
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
            Tools
          </Heading>
          <Box flex={1} h="1px" bg={C.border} display={{ base: "none", md: "block" }} />
        </Flex>

        {isSingleGroup ? (
          // ── Single group: expand skills into a 4-column grid ──────────
          <Box>
            <Text
              fontFamily={FONT_MONO}
              fontSize="10px"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color={C.accent}
              mb={6}
            >
              {SKILL_GROUPS[0].category}
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={2}>
              {SKILL_GROUPS[0].skills.map(({ name }) => (
                <SkillRow key={name} name={name} />
              ))}
            </SimpleGrid>
          </Box>
        ) : (
          // ── Multiple groups: one column per group ─────────────────────
          <SimpleGrid columns={gridCols} spacing={10}>
            {SKILL_GROUPS.map(({ category, skills }) => (
              <VStack key={category} align="start" spacing={5}>
                <Text
                  fontFamily={FONT_MONO}
                  fontSize="10px"
                  letterSpacing="0.2em"
                  textTransform="uppercase"
                  color={C.accent}
                >
                  {category}
                </Text>
                <VStack align="start" spacing={1} w="full">
                  {skills.map(({ name }) => (
                    <SkillRow key={name} name={name} />
                  ))}
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        )}

      </Container>
    </Box>
  );
}

export default Skills;