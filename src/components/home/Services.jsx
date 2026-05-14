import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import SectionEyebrow from "../ui/SectionEyebrow";
import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/siteData";

function Services() {
  return (
    <Box
      id="services"
      bg="white"
      position="relative"
      overflow="hidden"
      w="100%"
    >
      <Box
        position="absolute"
        inset="0"
        opacity="0.55"
        bgImage="
          linear-gradient(#EEF3F0 1px, transparent 1px),
          linear-gradient(90deg, #EEF3F0 1px, transparent 1px)
        "
        bgSize="38px 38px"
      />

      <Container
        maxW="1600px"
        px={{ base: 4, md: 8, xl: 10 }}
        py={{ base: 16, md: 24 }}
        position="relative"
      >
        <Stack spacing={4} textAlign="center" maxW="860px" mx="auto" mb={12}>
          <SectionEyebrow>Services</SectionEyebrow>

          <Heading as="h2" size="2xl" color="abm.navy" letterSpacing="-0.045em">
            Choose the module your organisation needs next.
          </Heading>

          <Text color="gray.600" fontSize="lg" lineHeight="1.8">
            We build full systems, improve existing ones, and help teams choose
            the right technology for the job.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={6}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index + 1} {...service} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Services;
