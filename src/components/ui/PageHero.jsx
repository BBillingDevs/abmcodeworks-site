import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

import SectionEyebrow from "./SectionEyebrow";

function PageHero({ eyebrow, title, text }) {
  return (
    <Box bg="abm.navy" color="white" w="100%" overflow="hidden">
      <Container
        maxW="1800px"
        px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
        py={{ base: 20, md: 28 }}
      >
        <Stack spacing={7} maxW="1280px">
          <SectionEyebrow color="abm.gold">{eyebrow}</SectionEyebrow>

          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl", xl: "7xl" }}
            lineHeight="0.96"
            letterSpacing="-0.06em"
            maxW="1240px"
          >
            {title}
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="whiteAlpha.800"
            lineHeight="1.8"
            maxW="1040px"
          >
            {text}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

export default PageHero;
