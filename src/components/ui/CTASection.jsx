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
    <Box bg="abm.navy" color="white" position="relative" overflow="hidden">
      <Box
        position="absolute"
        inset="0"
        bg="
                    radial-gradient(circle at 20% 20%, rgba(44,122,123,0.36), transparent 30%),
                    radial-gradient(circle at 80% 80%, rgba(200,155,60,0.18), transparent 28%)
                "
      />

      <Container maxW="7xl" py={{ base: 16, md: 20 }} position="relative">
        <Box
          rounded="36px"
          p={{ base: 7, md: 10 }}
          bg="rgba(255,255,255,0.07)"
          border="1px solid rgba(255,255,255,0.14)"
          boxShadow="0 28px 80px rgba(0,0,0,0.25)"
        >
          <Stack spacing={6} textAlign="center" align="center">
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

            <Heading as="h2" size="2xl" maxW="780px" letterSpacing="-0.045em">
              Ready to turn the idea into a working website, app or system?
            </Heading>

            <Text
              color="whiteAlpha.800"
              fontSize="lg"
              maxW="680px"
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
              _hover={{ bg: "abm.tealDark", transform: "translateY(-2px)" }}
            >
              Contact ABM Codeworks
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default CTASection;
