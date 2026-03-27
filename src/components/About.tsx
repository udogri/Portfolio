"use client";

import {
    Box,
    Container,
    Flex,
    Heading,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { C, FONT_BODY, FONT_DISPLAY, FONT_MONO } from "./tokens";
import { Navbar } from "./Navbar";
import Me from "../assets/Me.png";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ─── Timeline entry type ──────────────────────────────────────────────────────
// interface TimelineItem {
//     year: string;
//     role: string;
//     company: string;
//     description: string;
// }



// ─── About Page ───────────────────────────────────────────────────────────────
export default function About() {
    return (
        <Box bg={C.bg} color={C.text} minH="100vh" fontFamily={FONT_BODY}>

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
                        
                    <Flex align="baseline" gap={6} mb={16}>
          <Text fontFamily={FONT_MONO} fontSize="xs" color={C.accent} letterSpacing="0.2em">
            01
          </Text>
          <Heading
            fontFamily={FONT_DISPLAY}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="400"
            color={C.text}
          >
            About
          </Heading>
          <Box flex={1} h="1px" bg={C.border} display={{ base: "none", md: "block" }} />
        </Flex>
                        <Flex
                            direction={{ base: "column", md: "row" }}
                            align={{ base: "start", md: "center" }}
                            gap={{ base: 10, md: 16 }}
                        >
                            
                            {/* Photo */}
                            <Box
                                flexShrink={0}
                               
                                borderRadius="4px"
                                overflow="hidden"
                                border={`1px solid ${C.border}`}
                                opacity={0}
                                animation={`${fadeUp} 0.6s ease 0.1s forwards`}
                                position="relative"
                            >
                                <Image
                                    src={Me}
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
        I'm {" "}
        <Box as="em" fontStyle="italic" color={C.accent}>
        Udogri Oruaro, a frontend engineer
        </Box>{" "}
        who enjoys building functional user interfaces.
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
        I'm a frontend developer who enjoys building React applications and turning ideas into clean, easy-to-use interfaces. I focus on creating experiences that feel smooth, responsive, and intuitive for users.
    </Text>

    <Text
        fontFamily={FONT_BODY}
        fontSize={{ base: "md", md: "lg" }}
        color={C.subtext}
        lineHeight="1.8"
        maxW="600px"
        opacity={0}
        animation={`${fadeUp} 0.6s ease 0.45s forwards`}
    >
        I care about writing code that stays simple and maintainable as projects grow. Whether I'm working on a product feature or polishing UI details, I enjoy building things that are both functional and pleasant to use.
    </Text>
</VStack>
                        </Flex>
                    </Container>
                </Box>

                {/* ── Values ────────────────────────────────────────────────────── */}
                {/* <Box py={{ base: 20, md: 28 }} borderBottom={`1px solid ${C.border}`}>
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
                </Box> */}

                

                

            </Box>

        </Box>
    );
}