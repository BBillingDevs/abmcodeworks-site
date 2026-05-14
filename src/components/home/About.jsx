import {
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FiGitBranch,
  FiLayers,
  FiMousePointer,
  FiServer,
} from "react-icons/fi";

import SectionEyebrow from "../ui/SectionEyebrow";
import ValueCard from "../ui/ValueCard";
import { values } from "../../data/siteData";

function About() {
  return (
    <Box
      id="about"
      bg="abm.paper"
      position="relative"
      overflow="hidden"
      w="100%"
    >
      <Box
        position="absolute"
        inset="0"
        opacity="0.5"
        bg="
          radial-gradient(circle at 10% 12%, rgba(44,122,123,0.11), transparent 24%),
          radial-gradient(circle at 90% 80%, rgba(200,155,60,0.11), transparent 28%)
        "
      />

      <Container
        maxW="1600px"
        px={{ base: 4, md: 8, xl: 10 }}
        py={{ base: 16, md: 24 }}
        position="relative"
      >
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 10, lg: 16 }}
          alignItems="center"
        >
          <Stack spacing={6}>
            <SectionEyebrow>About ABM Codeworks</SectionEyebrow>

            <Heading
              as="h2"
              size="2xl"
              color="abm.navy"
              letterSpacing="-0.045em"
              lineHeight="1.04"
            >
              Software engineering with the messy parts hidden from your users.
            </Heading>

            <Text color="gray.700" fontSize="lg" lineHeight="1.85">
              We partner with schools, non-profits, startups and established
              businesses to create dependable digital tools. From planning and
              design to build, deployment and support, the focus is always on
              clarity, speed and long-term value.
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
              <MiniSystemItem icon={FiLayers} text="Map the workflow" />
              <MiniSystemItem
                icon={FiMousePointer}
                text="Design the interface"
              />
              <MiniSystemItem icon={FiServer} text="Build the system" />
              <MiniSystemItem icon={FiGitBranch} text="Support the rollout" />
            </SimpleGrid>
          </Stack>

          <Box
            rounded="34px"
            p={{ base: 3, md: 5 }}
            bg="white"
            border="1px solid"
            borderColor="abm.line"
            boxShadow="0 28px 80px rgba(11,23,42,0.09)"
          >
            <Box
              rounded="28px"
              overflow="hidden"
              border="1px solid rgba(255,255,255,0.12)"
              bg="abm.navy"
            >
              <HStack
                px={{ base: 4, md: 5 }}
                py={4}
                borderBottom="1px solid rgba(255,255,255,0.12)"
                justify="space-between"
                gap={4}
              >
                <HStack spacing={2} flexShrink={0}>
                  <Box boxSize="10px" rounded="full" bg="#FF6B6B" />
                  <Box boxSize="10px" rounded="full" bg="#FFD166" />
                  <Box boxSize="10px" rounded="full" bg="#06D6A0" />
                </HStack>

                <Text
                  color="whiteAlpha.800"
                  fontSize="xs"
                  fontWeight="900"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                  textAlign="right"
                >
                  operating principles
                </Text>
              </HStack>

              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={0}>
                {values.map((value, index) => (
                  <ValueCard key={value.title} index={index + 1} {...value} />
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function MiniSystemItem({ icon, text }) {
  return (
    <HStack
      spacing={3}
      rounded="2xl"
      bg="white"
      border="1px solid"
      borderColor="abm.line"
      px={4}
      py={3}
    >
      <Icon as={icon} color="abm.teal" boxSize={5} flexShrink={0} />

      <Text fontWeight="900" color="abm.navy">
        {text}
      </Text>
    </HStack>
  );
}

export default About;
