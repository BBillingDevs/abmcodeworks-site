import { Box, Heading, HStack, Text } from "@chakra-ui/react";

function ValueCard({ title, text, index }) {
  return (
    <Box
      p={{ base: 6, md: 7 }}
      bg={
        index % 2 === 0 ? "rgba(255,255,255,0.075)" : "rgba(255,255,255,0.045)"
      }
      borderRight={{
        base: "none",
        sm: index % 2 === 1 ? "1px solid rgba(255,255,255,0.10)" : "none",
      }}
      borderBottom="1px solid rgba(255,255,255,0.10)"
      minH="190px"
      color="white"
    >
      <HStack spacing={3} mb={4} align="flex-start">
        <Box
          boxSize="34px"
          rounded="xl"
          bg="rgba(200,155,60,0.18)"
          color="abm.gold"
          display="grid"
          placeItems="center"
          fontWeight="900"
          fontSize="sm"
          fontFamily="mono"
          flexShrink={0}
        >
          {String(index || 1).padStart(2, "0")}
        </Box>

        <Heading as="h3" size="md" color="white" lineHeight="1.25">
          {title}
        </Heading>
      </HStack>

      <Text
        color="rgba(255,255,255,0.82)"
        lineHeight="1.75"
        sx={{
          color: "rgba(255,255,255,0.82) !important",
        }}
      >
        {text}
      </Text>
    </Box>
  );
}

export default ValueCard;
