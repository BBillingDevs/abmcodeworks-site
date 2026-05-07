import {
    Box,
    Button,
    Container,
    Heading,
    ListItem,
    SimpleGrid,
    Stack,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Navigate, Link as RouterLink } from "react-router-dom";

import Seo from "../components/seo/Seo";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHero from "../components/ui/PageHero";
import CTASection from "../components/ui/CTASection";
import SectionEyebrow from "../components/ui/SectionEyebrow";

import { servicePages } from "../data/siteData";

function ServicePage({ serviceKey }) {
    const service = servicePages[serviceKey];

    if (!service) {
        return <Navigate to="/" replace />;
    }

    return (
        <Box bg="abm.paper">
            <Seo
                title={service.seoTitle}
                description={service.seoDescription}
                path={service.path}
            />

            <Navbar />

            <Box as="main">
                <PageHero
                    eyebrow={service.eyebrow}
                    title={service.title}
                    text={service.intro}
                    primaryHref="#contact"
                    primaryLabel="Start a project"
                    secondaryHref="/case-studies"
                    secondaryLabel="View case studies"
                />

                <Box bg="white">
                    <Container maxW="7xl" py={{ base: 16, md: 24 }}>
                        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
                            <Stack spacing={5}>
                                <SectionEyebrow>What we build</SectionEyebrow>

                                <Heading
                                    as="h2"
                                    size="2xl"
                                    color="abm.navy"
                                    letterSpacing="-0.04em"
                                >
                                    Practical digital products for Zimbabwean organisations.
                                </Heading>

                                <Text color="gray.700" fontSize="lg" lineHeight="1.8">
                                    ABM Codeworks focuses on clean design, reliable engineering
                                    and systems that are easy to maintain after launch.
                                </Text>

                                <Button
                                    as={RouterLink}
                                    to="/case-studies"
                                    alignSelf="flex-start"
                                    rounded="full"
                                    bg="abm.teal"
                                    color="white"
                                    rightIcon={<FaArrowRight />}
                                    _hover={{ bg: "abm.tealDark" }}
                                >
                                    See our work
                                </Button>
                            </Stack>

                            <Box
                                bg="abm.paper"
                                rounded="3xl"
                                p={{ base: 6, md: 8 }}
                                border="1px solid"
                                borderColor="abm.line"
                            >
                                <Heading as="h3" size="md" color="abm.navy" mb={5}>
                                    Common project types
                                </Heading>

                                <UnorderedList spacing={3} color="gray.700">
                                    {service.bullets.map((item) => (
                                        <ListItem key={item}>{item}</ListItem>
                                    ))}
                                </UnorderedList>
                            </Box>
                        </SimpleGrid>
                    </Container>
                </Box>

                <Box bg="abm.paper">
                    <Container maxW="7xl" py={{ base: 16, md: 24 }}>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                            {service.sections.map((section) => (
                                <Box
                                    key={section.title}
                                    bg="white"
                                    rounded="3xl"
                                    p={7}
                                    border="1px solid"
                                    borderColor="abm.line"
                                    boxShadow="0 18px 50px rgba(11,23,42,0.06)"
                                >
                                    <Heading as="h3" size="md" color="abm.navy" mb={3}>
                                        {section.title}
                                    </Heading>

                                    <Text color="gray.600" lineHeight="1.8">
                                        {section.text}
                                    </Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Container>
                </Box>

                <Box bg="white">
                    <Container maxW="5xl" py={{ base: 16, md: 24 }}>
                        <Stack spacing={4} textAlign="center" mb={10}>
                            <SectionEyebrow>FAQ</SectionEyebrow>

                            <Heading as="h2" size="2xl" color="abm.navy">
                                Questions about {service.title.toLowerCase()}
                            </Heading>
                        </Stack>

                        <Stack spacing={5}>
                            {service.faqs.map((faq) => (
                                <Box
                                    key={faq.q}
                                    bg="abm.paper"
                                    rounded="2xl"
                                    p={6}
                                    border="1px solid"
                                    borderColor="abm.line"
                                >
                                    <Heading as="h3" size="sm" color="abm.navy" mb={2}>
                                        {faq.q}
                                    </Heading>
                                    <Text color="gray.700" lineHeight="1.8">
                                        {faq.a}
                                    </Text>
                                </Box>
                            ))}
                        </Stack>
                    </Container>
                </Box>

                <CTASection />
            </Box>

            <Footer />
        </Box>
    );
}

export default ServicePage;
