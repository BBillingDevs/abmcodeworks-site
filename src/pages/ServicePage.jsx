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
    <Box bg="abm.paper" w="100%" overflowX="hidden">
      <Seo
        title={service.seoTitle}
        description={service.seoDescription}
        path={service.path}
      />

      <Navbar />

      <Box as="main" w="100%">
        <PageHero
          eyebrow={service.eyebrow}
          title={service.title}
          text={service.intro}
          primaryHref="#contact"
          primaryLabel="Start a project"
          secondaryHref="/portfolio"
          secondaryLabel="View portfolio"
        />

        <Box bg="white" w="100%">
          <Container
            maxW="1800px"
            px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
            py={{ base: 16, md: 24 }}
          >
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 10, lg: 20 }}
              alignItems="start"
            >
              <Stack spacing={6}>
                <SectionEyebrow>What we build</SectionEyebrow>

                <Heading
                  as="h2"
                  fontSize={{ base: "3xl", md: "5xl", xl: "6xl" }}
                  color="abm.navy"
                  letterSpacing="-0.06em"
                  lineHeight="0.98"
                  maxW="900px"
                >
                  Practical digital products for Zimbabwean organisations.
                </Heading>

                <Text
                  color="gray.700"
                  fontSize={{ base: "lg", md: "xl" }}
                  lineHeight="1.85"
                  maxW="860px"
                >
                  ABM Codeworks focuses on clean design, reliable engineering
                  and systems that are easy to maintain after launch. We build
                  tools around real workflows, so your website, app or system
                  supports the way your team actually works.
                </Text>

                <Button
                  as={RouterLink}
                  to="/portfolio"
                  alignSelf="flex-start"
                  rounded="full"
                  bg="abm.teal"
                  color="white"
                  size="lg"
                  rightIcon={<FaArrowRight />}
                  _hover={{
                    bg: "abm.tealDark",
                    transform: "translateY(-2px)",
                    boxShadow: "0 18px 35px rgba(44,122,123,0.25)",
                  }}
                >
                  See our work
                </Button>
              </Stack>

              <Box
                borderLeft={{ base: "none", lg: "1px solid" }}
                borderTop={{ base: "1px solid", lg: "none" }}
                borderColor="abm.line"
                pl={{ base: 0, lg: 12 }}
                pt={{ base: 8, lg: 0 }}
                h="100%"
              >
                <Stack spacing={5}>
                  <Heading as="h3" size="xl" color="abm.navy">
                    Common project types
                  </Heading>

                  <UnorderedList
                    spacing={4}
                    color="gray.700"
                    fontSize="lg"
                    pl={5}
                  >
                    {service.bullets.map((item) => (
                      <ListItem key={item}>{item}</ListItem>
                    ))}
                  </UnorderedList>
                </Stack>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>
        <Box bg="abm.paper" w="100%">
          <Container
            maxW="1800px"
            px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
            py={{ base: 16, md: 24 }}
          >
            <SimpleGrid
              columns={{ base: 1, lg: 3 }}
              spacing={{ base: 8, lg: 12 }}
            >
              {service.sections.map((section, index) => (
                <Box
                  key={section.title}
                  borderLeft="4px solid"
                  borderColor="abm.teal"
                  pl={{ base: 5, md: 7 }}
                  py={2}
                >
                  <Text
                    color="abm.teal"
                    fontWeight="900"
                    fontSize="sm"
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                    mb={3}
                  >
                    0{index + 1}
                  </Text>

                  <Heading
                    as="h3"
                    size="lg"
                    color="abm.navy"
                    mb={4}
                    lineHeight="1.15"
                  >
                    {section.title}
                  </Heading>

                  <Text color="gray.700" fontSize="lg" lineHeight="1.85">
                    {section.text}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        <Box bg="white" w="100%">
          <Container
            maxW="1800px"
            px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
            py={{ base: 16, md: 24 }}
          >
            <SimpleGrid
              columns={{ base: 1, lg: "0.85fr 1.15fr" }}
              spacing={{ base: 10, lg: 16 }}
              alignItems="start"
            >
              <Stack spacing={4} maxW="680px">
                <SectionEyebrow>FAQ</SectionEyebrow>

                <Heading
                  as="h2"
                  fontSize={{ base: "3xl", md: "5xl" }}
                  color="abm.navy"
                  letterSpacing="-0.05em"
                  lineHeight="1"
                >
                  Questions about {service.title.toLowerCase()}.
                </Heading>

                <Text color="gray.700" fontSize="lg" lineHeight="1.8">
                  A few common questions about how we approach this type of
                  project, from planning through to launch and support.
                </Text>
              </Stack>

              <Stack spacing={0} borderTop="1px solid" borderColor="abm.line">
                {service.faqs.map((faq) => (
                  <Box
                    key={faq.q}
                    py={{ base: 6, md: 7 }}
                    borderBottom="1px solid"
                    borderColor="abm.line"
                  >
                    <Heading as="h3" size="md" color="abm.navy" mb={2}>
                      {faq.q}
                    </Heading>

                    <Text color="gray.700" lineHeight="1.85" fontSize="lg">
                      {faq.a}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>

        <CTASection />
      </Box>

      <Footer />
    </Box>
  );
}

export default ServicePage;
