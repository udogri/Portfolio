"use client";

import { Box, Flex, HStack, VStack, Link, Button, Container } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useEffect, useState } from "react";
import { C, FONT_BODY, FONT_MONO } from "./tokens";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      transition="all 0.4s ease"
      bg={scrolled ? `${C.bg}EE` : "transparent"}
      borderBottom={scrolled ? `1px solid ${C.border}` : "1px solid transparent"}
      backdropFilter={scrolled ? "blur(20px)" : "none"}
    >
      <Container maxW="7xl" px={{ base: 6, md: 10 }}>
        <Flex align="center" justify="space-between" py={5}>

          {/* Wordmark */}
          <Box
            fontFamily={FONT_MONO}
            fontSize="sm"
            letterSpacing="0.1em"
            color={C.accent}
            fontWeight="500"
            cursor="pointer"
            _hover={{ opacity: 0.75 }}
            transition="opacity 0.2s"
          >
            {"<UO />"}
          </Box>

          {/* Desktop nav */}
          <HStack spacing={10} display={{ base: "none", md: "flex" }}>
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "About" ? "/about" : `#${item.toLowerCase()}`}
                fontFamily={FONT_BODY}
                fontSize="sm"
                fontWeight="500"
                letterSpacing="0.05em"
                color={C.subtext}
                textTransform="uppercase"
                textDecoration="none"
                position="relative"
                _hover={{ color: C.text }}
                transition="color 0.2s"
                sx={{
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-3px",
                    left: 0,
                    width: 0,
                    height: "1px",
                    background: C.accent,
                    transition: "width 0.25s ease",
                  },
                  "&:hover::after": { width: "100%" },
                }}
              >
                {item}
              </Link>
            ))}

            {/* <Button
              as="a"
              href="#contact"
              fontFamily={FONT_BODY}
              fontSize="xs"
              fontWeight="600"
              letterSpacing="0.1em"
              textTransform="uppercase"
              px={5}
              py={2}
              h="auto"
              bg="transparent"
              border={`1px solid ${C.accent}`}
              color={C.accent}
              borderRadius="2px"
              _hover={{
                bg: C.accent,
                color: C.bg,
                transform: "translateY(-1px)",
                boxShadow: `0 8px 24px ${C.accent}30`,
              }}
              transition="all 0.2s"
            >
              Hire Me
            </Button> */}
          </HStack>

          {/* Mobile burger */}
          <Box
            display={{ base: "flex", md: "none" }}
            flexDir="column"
            gap="5px"
            cursor="pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            p={2}
          >
            {[0, 1, 2].map((i) => (
              <Box
                key={i}
                w="22px"
                h="1.5px"
                bg={C.text}
                borderRadius="1px"
                transition="all 0.3s"
                transform={
                  menuOpen
                    ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                    : i === 1 ? "scaleX(0)"
                    : "rotate(-45deg) translate(5px, -5px)"
                    : "none"
                }
              />
            ))}
          </Box>
        </Flex>

        {/* Mobile menu */}
        {menuOpen && (
          <VStack
            display={{ base: "flex", md: "none" }}
            pb={6}
            spacing={5}
            align="start"
            animation={`${fadeIn} 0.2s ease`}
          >
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "About" ? "/about" : `#${item.toLowerCase()}`}
                fontFamily={FONT_BODY}
                fontSize="md"
                color={C.subtext}
                textDecoration="none"
                _hover={{ color: C.accent }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </VStack>
        )}
      </Container>
    </Box>
  );
}

export default Navbar;