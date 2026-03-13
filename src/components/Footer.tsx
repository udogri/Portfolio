"use client";

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { C, FONT_BODY, FONT_DISPLAY, FONT_MONO } from "./tokens";

// ─── Icons ────────────────────────────────────────────────────────────────────

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About",    href: "/about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub",     href: "https://github.com/udogri",   icon: <GitHubIcon />,   hoverColor: "#ffffff" },
  { label: "LinkedIn",   href: "https://linkedin.com/in/udogri-oruaro/", icon: <LinkedInIcon />, hoverColor: "#0A66C2" },
  { label: "Twitter / X",href: "https://x.com/Oruaro6",  icon: <TwitterIcon />,  hoverColor: "#ffffff" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      as="footer"
      borderTop={`1px solid ${C.border}`}
      position="relative"
      overflow="hidden"
    >
      {/* Subtle top glow */}
      <Box
        position="absolute"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        w="800px"
        h="1px"
        background={`linear-gradient(90deg, transparent, ${C.accent}40, transparent)`}
        pointerEvents="none"
      />

      <Container maxW="7xl" px={{ base: 6, md: 10 }}>

        {/* ── Main footer body ──────────────────────────────────────── */}
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
          gap={{ base: 12, md: 0 }}
          py={{ base: 14, md: 16 }}
          borderBottom={`1px solid ${C.border}`}
        >
          {/* Col 1 — Brand */}
          <GridItem>
            <VStack align="start" spacing={5}>
              <Box>
                <Text
                  fontFamily={FONT_MONO}
                  fontSize="lg"
                  color={C.accent}
                  letterSpacing="0.1em"
                  fontWeight="500"
                >
                  {"<UO />"}
                </Text>
                <Text
                  fontFamily={FONT_DISPLAY}
                  fontSize="xl"
                  fontWeight="400"
                  color={C.text}
                  mt={1}
                >
                  Udogri Oruaro
                </Text>
              </Box>

              <Text
                fontFamily={FONT_BODY}
                fontSize="sm"
                color={C.subtext}
                lineHeight="1.8"
                maxW="260px"
              >
                Frontend engineer crafting scalable web
                applications.
              </Text>

              {/* Social icons */}
              <HStack spacing={2}>
                {SOCIAL_LINKS.map(({ label, href, icon, hoverColor }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="36px"
                    h="36px"
                    border={`1px solid ${C.border}`}
                    borderRadius="4px"
                    color={C.muted}
                    textDecoration="none"
                    _hover={{
                      color: hoverColor,
                      borderColor: C.muted,
                      bg: C.surface,
                    }}
                    transition="all 0.2s"
                  >
                    {icon}
                  </Link>
                ))}
              </HStack>
            </VStack>
          </GridItem>

          {/* Col 2 — Navigation */}
          <GridItem display="flex" justifyContent={{ base: "start", md: "center" }}>
            <VStack align="start" spacing={4}>
              <Text
                fontFamily={FONT_MONO}
                fontSize="10px"
                letterSpacing="0.2em"
                textTransform="uppercase"
                color={C.accent}
                mb={1}
              >
                Navigation
              </Text>
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  fontFamily={FONT_BODY}
                  fontSize="sm"
                  color={C.subtext}
                  textDecoration="none"
                  position="relative"
                  _hover={{ color: C.text }}
                  transition="color 0.15s"
                  sx={{
                    "&::before": {
                      content: '"→"',
                      position: "absolute",
                      left: "-16px",
                      opacity: 0,
                      color: C.accent,
                      fontSize: "10px",
                      transition: "opacity 0.15s",
                    },
                    "&:hover::before": { opacity: 1 },
                  }}
                >
                  {label}
                </Link>
              ))}
            </VStack>
          </GridItem>

          {/* Col 3 — Availability */}
          <GridItem display="flex" justifyContent={{ base: "start", md: "flex-end" }}>
            <VStack align={{ base: "start", md: "end" }} spacing={4}>
              <Text
                fontFamily={FONT_MONO}
                fontSize="10px"
                letterSpacing="0.2em"
                textTransform="uppercase"
                color={C.accent}
                mb={1}
              >
                Availability
              </Text>

              {/* Status pill */}
              <HStack
                spacing={2}
                px={3}
                py={2}
                border={`1px solid ${C.border}`}
                borderRadius="3px"
                bg={C.surface}
              >
                {/* Pulsing dot */}
                <Box position="relative" w="7px" h="7px">
                  <Box
                    position="absolute"
                    inset={0}
                    borderRadius="full"
                    bg={C.accent}
                    opacity={0.4}
                    sx={{
                      animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
                      "@keyframes ping": {
                        "75%, 100%": { transform: "scale(2)", opacity: 0 },
                      },
                    }}
                  />
                  <Box
                    position="absolute"
                    inset={0}
                    borderRadius="full"
                    bg={C.accent}
                  />
                </Box>
                <Text fontFamily={FONT_MONO} fontSize="11px" color={C.accent} letterSpacing="0.05em">
                  Open to work
                </Text>
              </HStack>

              <Text
                fontFamily={FONT_BODY}
                fontSize="xs"
                color={C.muted}
                textAlign={{ base: "left", md: "right" }}
                maxW="200px"
                lineHeight="1.7"
              >
                Available for freelance, contract & full-time roles.
              </Text>

              <Link
                href="mailto:oudogri@email.com"
                fontFamily={FONT_MONO}
                fontSize="xs"
                color={C.subtext}
                textDecoration="none"
                letterSpacing="0.05em"
                _hover={{ color: C.accent }}
                transition="color 0.15s"
              >
                oudogri@gmail.com
              </Link>
            </VStack>
          </GridItem>
        </Grid>

        {/* ── Bottom bar ────────────────────────────────────────────── */}
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align={{ base: "start", sm: "center" }}
          py={6}
          gap={4}
        >
          <Text fontFamily={FONT_MONO} fontSize="11px" color={C.muted} letterSpacing="0.06em">
            © {year} Udogri Oruaro.{" "}
            <Box as="span" color={C.border} mx={1}>·</Box>
            Designed & built with TypeScript & React
          </Text>

          {/* Back to top */}
          <HStack
            as="button"
            spacing={2}
            onClick={scrollToTop}
            fontFamily={FONT_MONO}
            fontSize="11px"
            letterSpacing="0.1em"
            textTransform="uppercase"
            color={C.muted}
            cursor="pointer"
            border="none"
            bg="transparent"
            p={0}
            _hover={{ color: C.accent }}
            transition="color 0.2s"
          >
            <Text>Back to top</Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              w="22px"
              h="22px"
              border={`1px solid currentColor`}
              borderRadius="3px"
            >
              <ArrowUpIcon />
            </Box>
          </HStack>
        </Flex>

      </Container>
    </Box>
  );
}

export default Footer;