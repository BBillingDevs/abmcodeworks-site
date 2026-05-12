import { Box, Heading, HStack, Icon, Text } from "@chakra-ui/react";

function ServiceCard({ icon, title, desc, index }) {
  return (
    <Box
      position="relative"
      overflow="hidden"
      p={7}
      rounded="3xl"
      bg="white"
      border="1px solid"
      borderColor="abm.line"
      boxShadow="0 20px 55px rgba(11,23,42,0.06)"
      transition="all 0.22s ease"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "0 28px 75px rgba(11,23,42,0.11)",
        borderColor: "abm.teal",
      }}
    >
      <Box
        position="absolute"
        top="-60px"
        right="-60px"
        boxSize="150px"
        rounded="full"
        bg="abm.soft"
        opacity="0.95"
      />

      <HStack justify="space-between" align="start" mb={6} position="relative">
        <Box
          w="56px"
          h="56px"
          rounded="2xl"
          bg="abm.navy"
          display="grid"
          placeItems="center"
          boxShadow="0 16px 35px rgba(11,23,42,0.18)"
        >
          <Icon as={icon} boxSize={6} color="abm.gold" />
        </Box>

        <Text fontFamily="mono" color="abm.teal" fontWeight="900" fontSize="sm">
          /{String(index || 1).padStart(2, "0")}
        </Text>
      </HStack>

      <Heading as="h3" size="md" color="abm.navy" mb={3} position="relative">
        {title}
      </Heading>

      <Text color="gray.600" lineHeight="1.75" position="relative">
        {desc}
      </Text>
    </Box>
  );
}

export default ServiceCard;
