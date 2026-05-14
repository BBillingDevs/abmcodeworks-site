import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import Seo from "../components/seo/Seo";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHero from "../components/ui/PageHero";

import { caseStudies } from "../data/siteData";

const industries = [
  "Education",
  "Conservation & NGOs",
  "E-commerce & Retail",
  "Mobile Apps",
  "Tourism & Hospitality",
  "Food & Beverage",
  "Marketplaces",
  "Cloud-connected systems",
];

function PortfolioPage() {
  return (
    <Box bg="abm.paper" w="100%" overflowX="hidden">
      <Seo
        title="Portfolio | Website, App & Software Projects | ABM Codeworks"
        description="Explore ABM Codeworks portfolio projects across website design, mobile app development, e-commerce platforms, school systems, marketplace apps and conservation websites in Zimbabwe."
        path="/portfolio"
      />

      <Navbar />

      <Box as="main" w="100%">
        <PageHero
          eyebrow="Portfolio"
          title="Websites, apps and systems built for real organisations."
          text="Explore selected ABM Codeworks projects across education, conservation, marketplaces, e-commerce, food and beverage, tourism and mobile app development."
          primaryHref="#portfolio"
          primaryLabel="View work"
          secondaryHref="/contact"
          secondaryLabel="Start a project"
        />

        <Box bg="white" w="100%">
          <Container
            maxW="1800px"
            px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
            py={{ base: 16, md: 24 }}
          >
            <Stack spacing={{ base: 14, md: 18 }}>
              <IndustrySection />

              <Box id="portfolio">
                <Stack spacing={4} maxW="1180px" mb={{ base: 8, md: 12 }}>
                  <Badge
                    alignSelf="flex-start"
                    rounded="full"
                    px={4}
                    py={2}
                    bg="abm.soft"
                    color="abm.teal"
                    fontWeight="900"
                    letterSpacing="0.1em"
                    textTransform="uppercase"
                    fontSize="xs"
                  >
                    Selected work
                  </Badge>

                  <Heading
                    as="h2"
                    fontSize={{ base: "3xl", md: "5xl" }}
                    color="abm.navy"
                    letterSpacing="-0.055em"
                    lineHeight="1"
                  >
                    A portfolio of practical work across websites, software,
                    apps and digital systems.
                  </Heading>

                  <Text
                    color="gray.700"
                    fontSize={{ base: "lg", md: "xl" }}
                    lineHeight="1.85"
                    maxW="1040px"
                  >
                    These projects show the range of organisations ABM Codeworks
                    supports, from schools and conservation trusts to retail
                    platforms, brand websites, marketplace products and mobile
                    applications.
                  </Text>
                </Stack>

                <SimpleGrid
                  columns={{ base: 1, md: 2, xl: 3 }}
                  spacing={{ base: 5, md: 6, xl: 7 }}
                >
                  {caseStudies.map((study) => (
                    <PortfolioCard key={study.slug} study={study} />
                  ))}
                </SimpleGrid>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

function IndustrySection() {
  return (
    <SimpleGrid
      columns={{ base: 1, lg: "1fr 1fr" }}
      spacing={{ base: 8, lg: 16 }}
      alignItems="start"
    >
      <Stack spacing={4} maxW="980px">
        <Badge
          alignSelf="flex-start"
          rounded="full"
          px={4}
          py={2}
          bg="abm.soft"
          color="abm.teal"
          fontWeight="900"
          letterSpacing="0.1em"
          textTransform="uppercase"
          fontSize="xs"
        >
          Industries
        </Badge>

        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "5xl" }}
          color="abm.navy"
          letterSpacing="-0.055em"
          lineHeight="1"
        >
          Digital work across practical, real-world industries.
        </Heading>

        <Text
          color="gray.700"
          fontSize={{ base: "lg", md: "xl" }}
          lineHeight="1.85"
        >
          ABM Codeworks works with organisations that need dependable digital
          tools, not just pretty pages. Our experience spans education,
          conservation, tourism, retail, e-commerce, food and beverage,
          marketplaces and mobile products.
        </Text>
      </Stack>

      <Box
        borderLeft={{ base: "none", lg: "1px solid" }}
        borderTop={{ base: "1px solid", lg: "none" }}
        borderColor="abm.line"
        pl={{ base: 0, lg: 12 }}
        pt={{ base: 8, lg: 0 }}
      >
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={0}>
          {industries.map((industry) => (
            <Box
              key={industry}
              py={4}
              borderBottom="1px solid"
              borderColor="abm.line"
            >
              <Text color="abm.navy" fontWeight="900" fontSize="lg">
                {industry}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  );
}

function PortfolioCard({ study }) {
  const hasWebsite = Boolean(study.website);

  return (
    <LinkBox
      as="article"
      bg="abm.paper"
      rounded="3xl"
      p={{ base: 6, md: 7 }}
      border="1px solid"
      borderColor="abm.line"
      boxShadow="0 18px 50px rgba(11,23,42,0.06)"
      transition="all 0.22s ease"
      height="100%"
      cursor={hasWebsite ? "pointer" : "default"}
      _hover={{
        transform: hasWebsite ? "translateY(-4px)" : "none",
        boxShadow: hasWebsite
          ? "0 26px 70px rgba(11,23,42,0.11)"
          : "0 18px 50px rgba(11,23,42,0.06)",
        borderColor: hasWebsite ? "abm.teal" : "abm.line",
      }}
    >
      <Stack spacing={6} height="100%">
        <Box
          h="100px"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Image
            src={study.logo}
            alt={`${study.client} logo`}
            maxH="115px"
            maxW="260px"
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

          <Stack spacing={2}>
            <Text
              color="abm.teal"
              fontWeight="900"
              fontSize="sm"
              letterSpacing="0.08em"
              textTransform="uppercase"
            >
              {study.client}
            </Text>

            <Heading as="h3" size="lg" color="abm.navy" lineHeight="1.15">
              {hasWebsite ? (
                <LinkOverlay
                  href={study.website}
                  target="_blank"
                  rel="noreferrer"
                  _hover={{
                    textDecoration: "none",
                    color: "abm.teal",
                  }}
                >
                  {study.title}
                </LinkOverlay>
              ) : (
                study.title
              )}
            </Heading>
          </Stack>

          <Text color="gray.700" lineHeight="1.8">
            {study.summary}
          </Text>
        </Stack>

        {hasWebsite && (
          <Text color="abm.teal" fontWeight="900" fontSize="sm">
            Visit website →
          </Text>
        )}
      </Stack>
    </LinkBox>
  );
}

export default PortfolioPage;
