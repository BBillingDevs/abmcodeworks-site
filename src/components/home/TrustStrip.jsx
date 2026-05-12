import {
  Box,
  Container,
  HStack,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { trustItems } from "../../data/siteData";

function TrustStrip() {
  return (
    <Box
      bg="abm.navy2"
      borderY="1px solid"
      borderColor="rgba(255,255,255,0.10)"
      color="white"
    >
      <Container maxW="7xl" py={5}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          {trustItems.map((item) => (
            <TrustItem key={item.text} {...item} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function TrustItem({ icon, text }) {
  return (
    <HStack
      spacing={3}
      rounded="2xl"
      px={4}
      py={4}
      bg="rgba(255,255,255,0.055)"
      border="1px solid rgba(255,255,255,0.09)"
    >
      <Box
        boxSize="38px"
        rounded="xl"
        bg="rgba(44,122,123,0.22)"
        display="grid"
        placeItems="center"
        flexShrink={0}
      >
        <Icon as={icon} color="abm.gold" boxSize={5} />
      </Box>

      <Text fontWeight="800" color="whiteAlpha.850" lineHeight="1.45">
        {text}
      </Text>
    </HStack>
  );
}

export default TrustStrip;
