import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { FiTerminal } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";

function CTASection() {
  return (
    <Box
      bg="abm.navy"
      color="white"
      position="relative"
      overflow="hidden"
      w="100%"
    >
      <Box
        position="absolute"
        inset="0"
        bg="
          radial-gradient(circle at 16% 18%, rgba(44,122,123,0.42), transparent 30%),
          radial-gradient(circle at 86% 72%, rgba(200,155,60,0.20), transparent 30%),
          linear-gradient(135deg, #07111F 0%, #0B172A 48%, #10233F 100%)
        "
      />

      <Box
        position="absolute"
        inset="0"
        opacity="0.13"
        bgImage="
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
        "
        bgSize="42px 42px"
      />

      <Container
        maxW="1800px"
        px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
        py={{ base: 18, md: 24, xl: 28 }}
        position="relative"
      >
        <Stack spacing={7} textAlign="center" align="center" w="100%">
          <HStack
            rounded="full"
            px={4}
            py={2}
            bg="rgba(255,255,255,0.10)"
            border="1px solid rgba(255,255,255,0.12)"
          >
            <Icon as={FiTerminal} color="abm.gold" />
            <Text fontWeight="900" fontSize="sm">
              Open a new project
            </Text>
          </HStack>

          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl", xl: "6xl" }}
            maxW="1250px"
            letterSpacing="-0.06em"
            lineHeight="0.98"
          >
            Ready to turn the idea into a working website, app or system?
          </Heading>

          <Text
            color="whiteAlpha.820"
            fontSize={{ base: "lg", md: "xl" }}
            maxW="920px"
            lineHeight="1.8"
          >
            Tell us what you need built, fixed or improved. We will help you
            shape it into a practical build plan.
          </Text>

          <Button
            as={RouterLink}
            to="/contact"
            size="lg"
            rounded="full"
            bg="abm.teal"
            color="white"
            rightIcon={<FaArrowRight />}
            _hover={{
              bg: "abm.tealDark",
              transform: "translateY(-2px)",
              boxShadow: "0 18px 35px rgba(44,122,123,0.35)",
            }}
          >
            Contact ABM Codeworks
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default CTASection;
