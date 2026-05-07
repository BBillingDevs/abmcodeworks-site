import {
    Badge,
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Image,
    ListItem,
    SimpleGrid,
    Stack,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { Navigate, useParams } from "react-router-dom";

import Seo from "../components/seo/Seo";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTASection from "../components/ui/CTASection";
import SectionEyebrow from "../components/ui/SectionEyebrow";

import { caseStudies } from "../data/siteData";

function CaseStudyPage() {
    const { slug } = useParams();
    const study = caseStudies.find((item) => item.slug === slug);

    if (!study) {
        return <Navigate to="/case-studies" replace />;
    }

    return (
        <Box bg="abm.paper">
            <Seo
                title={`${study.client} Case Study | ABM Codeworks`}
                description={study.summary}
                path={`/case-studies/${study.slug}`}
            />

            <Navbar />

            <Box as="main">
                <Box bg="abm.navy" color="white">
                    <Container maxW="7xl" py={{ base: 20, md: 28 }}>
                        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
                            <Stack spacing={6}>
                                <SectionEyebrow color="abm.gold">
                                    {study.industry} Case Study
                                </SectionEyebrow>

                                <Heading
                                    as="h1"
                                    fontSize={{ base: "4xl", md: "6xl" }}
                                    lineHeight="1"
                                    letterSpacing="-0.06em"
                                >
                                    {study.title}
                                </Heading>

                                <Text fontSize="xl" color="whiteAlpha.800" lineHeight="1.8">
                                    {study.summary}
                                </Text>

                                <HStack spacing={3} wrap="wrap">
                                    {study.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            rounded="full"
                                            px={3}
                                            py={1}
                                            bg="whiteAlpha.200"
                                            color="white"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </HStack>

                                <Button
                                    as="a"
                                    href={study.website}
                                    target="_blank"
                                    rel="noreferrer"
                                    alignSelf="flex-start"
                                    rounded="full"
                                    bg="abm.teal"
                                    color="white"
                                    rightIcon={<FaExternalLinkAlt />}
                                    _hover={{ bg: "abm.tealDark" }}
                                >
                                    Visit website
                                </Button>
                            </Stack>

                            <Box
                                bg="white"
                                rounded="3xl"
                                p={{ base: 8, md: 12 }}
                                display="grid"
                                placeItems="center"
                            >
                                <Image
                                    src={study.logo}
                                    alt={study.client}
                                    maxH="240px"
                                    maxW="300px"
                                    objectFit="contain"
                                />
                            </Box>
                        </SimpleGrid>
                    </Container>
                </Box>

                <Box bg="white">
                    <Container maxW="7xl" py={{ base: 16, md: 24 }}>
                        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
                            <Box
                                bg="abm.paper"
                                rounded="3xl"
                                p={7}
                                border="1px solid"
                                borderColor="abm.line"
                            >
                                <Heading as="h2" size="md" color="abm.navy" mb={4}>
                                    Challenge
                                </Heading>
                                <Text color="gray.700" lineHeight="1.8">
                                    {study.challenge}
                                </Text>
                            </Box>

                            <Box
                                bg="abm.paper"
                                rounded="3xl"
                                p={7}
                                border="1px solid"
                                borderColor="abm.line"
                            >
                                <Heading as="h2" size="md" color="abm.navy" mb={4}>
                                    Solution
                                </Heading>
                                <Text color="gray.700" lineHeight="1.8">
                                    {study.solution}
                                </Text>
                            </Box>

                            <Box
                                bg="abm.paper"
                                rounded="3xl"
                                p={7}
                                border="1px solid"
                                borderColor="abm.line"
                            >
                                <Heading as="h2" size="md" color="abm.navy" mb={4}>
                                    Results
                                </Heading>
                                <UnorderedList spacing={3} color="gray.700">
                                    {study.results.map((result) => (
                                        <ListItem key={result}>{result}</ListItem>
                                    ))}
                                </UnorderedList>
                            </Box>
                        </SimpleGrid>
                    </Container>
                </Box>

                <CTASection />
            </Box>

            <Footer />
        </Box>
    );
}

export default CaseStudyPage;
