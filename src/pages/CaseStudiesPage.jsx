import {
    Badge,
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Image,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

import Seo from "../components/seo/Seo";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHero from "../components/ui/PageHero";

import { caseStudies } from "../data/siteData";

function CaseStudiesPage() {
    return (
        <Box bg="abm.paper">
            <Seo
                title="Case Studies | Website, App & Software Projects | ABM Codeworks"
                description="Explore ABM Codeworks case studies across website design, mobile app development, e-commerce platforms, school systems, marketplace apps and conservation websites in Zimbabwe."
                path="/case-studies"
            />

            <Navbar />

            <Box as="main">
                <PageHero
                    eyebrow="Case Studies"
                    title="Real websites, apps and systems built for real organisations."
                    text="Explore selected ABM Codeworks projects across education, conservation, marketplaces, e-commerce, food and beverage, and mobile app development."
                    primaryHref="#case-studies"
                    primaryLabel="View work"
                    secondaryHref="/contact"
                    secondaryLabel="Start a project"
                />

                <Box id="case-studies" bg="white">
                    <Container maxW="7xl" py={{ base: 16, md: 24 }}>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                            {caseStudies.map((study) => (
                                <Box
                                    key={study.slug}
                                    bg="abm.paper"
                                    rounded="3xl"
                                    p={{ base: 6, md: 8 }}
                                    border="1px solid"
                                    borderColor="abm.line"
                                    boxShadow="0 18px 50px rgba(11,23,42,0.06)"
                                    transition="all 0.22s ease"
                                    _hover={{
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 26px 70px rgba(11,23,42,0.11)",
                                        borderColor: "abm.teal",
                                    }}
                                >
                                    <Stack spacing={6} height="100%">
                                        <Box
                                            h="86px"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="flex-start"
                                        >
                                            <Image
                                                src={study.logo}
                                                alt={`${study.client} logo`}
                                                maxH="120px"
                                                maxW="240px"
                                                objectFit="contain"
                                            />
                                        </Box>

                                        <Stack spacing={4} flex="1">
                                            <HStack spacing={2} wrap="wrap">
                                                <Badge
                                                    rounded="full"
                                                    px={3}
                                                    py={1}
                                                    bg="abm.soft"
                                                    color="abm.teal"
                                                    fontWeight="900"
                                                    letterSpacing="0.08em"
                                                    textTransform="uppercase"
                                                    fontSize="xs"
                                                >
                                                    {study.industry}
                                                </Badge>

                                                {study.featuredService && (
                                                    <Badge
                                                        rounded="full"
                                                        px={3}
                                                        py={1}
                                                        bg="white"
                                                        color="abm.navy"
                                                        border="1px solid"
                                                        borderColor="abm.line"
                                                        fontWeight="800"
                                                        fontSize="xs"
                                                    >
                                                        {study.featuredService}
                                                    </Badge>
                                                )}
                                            </HStack>

                                            <Heading as="h2" size="lg" color="abm.navy">
                                                {study.title}
                                            </Heading>

                                            <Text color="gray.700" lineHeight="1.8">
                                                {study.summary}
                                            </Text>
                                        </Stack>

                                        <Button
                                            as={RouterLink}
                                            to={`/case-studies/${study.slug}`}
                                            alignSelf="flex-start"
                                            rounded="full"
                                            bg="abm.teal"
                                            color="white"
                                            rightIcon={<FaArrowRight />}
                                            _hover={{ bg: "abm.tealDark" }}
                                        >
                                            Read case study
                                        </Button>
                                    </Stack>
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

export default CaseStudiesPage;
