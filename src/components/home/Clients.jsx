import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import SectionEyebrow from "../ui/SectionEyebrow";
import ClientLogo from "../ui/ClientLogo";
import { clients } from "../../data/siteData";

function Clients() {
  return (
    <Box id="clients" bg="abm.paper" w="100%">
      <Container
        maxW="1600px"
        px={{ base: 4, md: 8, xl: 10 }}
        py={{ base: 16, md: 24 }}
      >
        <Stack spacing={4} textAlign="center" maxW="860px" mx="auto" mb={12}>
          <SectionEyebrow>Selected clients</SectionEyebrow>

          <Heading as="h2" size="2xl" color="abm.navy" letterSpacing="-0.045em">
            Project windows opened for education, tourism, conservation, retail
            and commerce.
          </Heading>

          <Text color="gray.600" fontSize="lg" lineHeight="1.8">
            A small selection of organisations and products supported through
            web, app, e-commerce and custom software work.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={6}>
          {clients.map((client, index) => (
            <ClientLogo key={client.alt} index={index + 1} {...client} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Clients;
