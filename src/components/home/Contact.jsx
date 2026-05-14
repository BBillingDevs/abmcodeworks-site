import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";

import SectionEyebrow from "../ui/SectionEyebrow";

function Contact({
  handleSubmit,
  recaptchaReady,
  recaptchaToken,
  setRecaptchaToken,
  isSubmitting,
  recaptchaSiteKey,
  sectionId = "contact",
}) {
  return (
    <Box id={sectionId} bg="white" w="100%">
      <Container
        maxW="1800px"
        px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
        py={{ base: 16, md: 24 }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, md: 12, xl: 20 }}
          alignItems="start"
        >
          <Stack spacing={6} maxW="780px">
            <SectionEyebrow>Contact</SectionEyebrow>

            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl", xl: "6xl" }}
              color="abm.navy"
              letterSpacing="-0.06em"
              lineHeight="1"
            >
              Have a system, app or website you want built properly?
            </Heading>

            <Text
              color="gray.700"
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight="1.85"
            >
              Tell us what you are trying to create, fix or improve. We will
              help you turn the idea into a practical build plan.
            </Text>

            <Box
              p={{ base: 6, md: 7 }}
              rounded="3xl"
              bg="abm.paper"
              border="1px solid"
              borderColor="abm.line"
              maxW="520px"
            >
              <Text fontWeight="900" color="abm.navy" mb={2}>
                Prefer email?
              </Text>

              <Link
                href="mailto:admin@abmcodeworks.com"
                color="abm.teal"
                fontWeight="800"
                fontSize={{ base: "md", md: "lg" }}
              >
                admin@abmcodeworks.com
              </Link>
            </Box>
          </Stack>

          <Box
            as="form"
            onSubmit={handleSubmit}
            bg="abm.paper"
            p={{ base: 6, md: 8, xl: 10 }}
            rounded="3xl"
            border="1px solid"
            borderColor="abm.line"
            boxShadow="0 24px 70px rgba(11,23,42,0.10)"
            w="100%"
          >
            <VStack spacing={5} align="stretch">
              <FormControl isRequired>
                <FormLabel fontWeight="800">Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  bg="white"
                  borderColor="abm.line"
                  rounded="xl"
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontWeight="800">Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  bg="white"
                  borderColor="abm.line"
                  rounded="xl"
                  size="lg"
                />
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="800">Project type</FormLabel>
                <Input
                  type="text"
                  name="project_type"
                  placeholder="Website, app, dashboard, school system..."
                  bg="white"
                  borderColor="abm.line"
                  rounded="xl"
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontWeight="800">Message</FormLabel>
                <Textarea
                  name="message"
                  rows={7}
                  placeholder="Tell us what you need built or improved."
                  bg="white"
                  borderColor="abm.line"
                  rounded="xl"
                />
              </FormControl>

              {recaptchaReady ? (
                <Box overflowX="auto">
                  <ReCAPTCHA
                    sitekey={recaptchaSiteKey}
                    onChange={setRecaptchaToken}
                    onExpired={() => setRecaptchaToken(null)}
                    onErrored={() => {
                      setRecaptchaToken(null);
                      console.error(
                        "reCAPTCHA error. Check that your site key is v2 Checkbox and that the current domain is allowed.",
                      );
                    }}
                  />
                </Box>
              ) : (
                <Box
                  p={4}
                  rounded="xl"
                  bg="orange.50"
                  color="orange.900"
                  border="1px solid"
                  borderColor="orange.200"
                  fontSize="sm"
                >
                  reCAPTCHA is currently disabled. Set{" "}
                  <strong>VITE_ENABLE_RECAPTCHA=true</strong> and add a valid{" "}
                  <strong>VITE_RECAPTCHA_SITE_KEY</strong> before going live.
                </Box>
              )}

              <Button
                type="submit"
                size="lg"
                rounded="full"
                bg="abm.teal"
                color="white"
                isDisabled={recaptchaReady && (!recaptchaToken || isSubmitting)}
                isLoading={isSubmitting}
                loadingText="Sending"
                rightIcon={<FaArrowRight />}
                _hover={{
                  bg: "abm.tealDark",
                  transform: "translateY(-2px)",
                  boxShadow: "0 18px 35px rgba(44,122,123,0.25)",
                }}
              >
                Send message
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Contact;
