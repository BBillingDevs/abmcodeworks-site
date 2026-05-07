import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

import SectionEyebrow from "./SectionEyebrow";

function PageHero({
    eyebrow,
    title,
    text,
    primaryHref = "/#contact",
    primaryLabel = "Start a project",
    secondaryHref = "/case-studies",
    secondaryLabel = "View work",
}) {
    const primaryIsHash = primaryHref.startsWith("#");
    const secondaryIsHash = secondaryHref.startsWith("#");

    return (
        <Box bg="abm.navy" color="white">
            <Container maxW="7xl" py={{ base: 20, md: 28 }}>
                <Stack spacing={7} maxW="860px">
                    <SectionEyebrow color="abm.gold">{eyebrow}</SectionEyebrow>

                    <Heading
                        as="h1"
                        fontSize={{ base: "4xl", md: "6xl", xl: "7xl" }}
                        lineHeight="0.96"
                        letterSpacing="-0.06em"
                    >
                        {title}
                    </Heading>

                    <Text
                        fontSize={{ base: "lg", md: "xl" }}
                        color="whiteAlpha.800"
                        lineHeight="1.8"
                    >
                        {text}
                    </Text>

                    <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
                        <Button
                            as={primaryIsHash ? "a" : RouterLink}
                            href={primaryIsHash ? primaryHref : undefined}
                            to={!primaryIsHash ? primaryHref : undefined}
                            size="lg"
                            rounded="full"
                            bg="abm.teal"
                            color="white"
                            rightIcon={<FaArrowRight />}
                            _hover={{ bg: "abm.tealDark" }}
                        >
                            {primaryLabel}
                        </Button>

                        <Button
                            as={secondaryIsHash ? "a" : RouterLink}
                            href={secondaryIsHash ? secondaryHref : undefined}
                            to={!secondaryIsHash ? secondaryHref : undefined}
                            size="lg"
                            rounded="full"
                            variant="outline"
                            borderColor="whiteAlpha.500"
                            color="white"
                            _hover={{ bg: "whiteAlpha.200" }}
                        >
                            {secondaryLabel}
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

export default PageHero;
