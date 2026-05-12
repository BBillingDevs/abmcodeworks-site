import { Box, HStack, Image, Link, Text } from "@chakra-ui/react";

function ClientLogo({ href, src, alt, name, index }) {
  return (
    <Link
      href={href}
      isExternal
      _hover={{ textDecoration: "none" }}
      aria-label={alt}
      role="group"
    >
      <Box
        overflow="hidden"
        bg="white"
        rounded="3xl"
        border="1px solid"
        borderColor="abm.line"
        boxShadow="0 18px 50px rgba(11,23,42,0.06)"
        transition="all 0.22s ease"
        _hover={{
          transform: "translateY(-4px)",
          boxShadow: "0 26px 70px rgba(11,23,42,0.11)",
          borderColor: "abm.teal",
        }}
      >
        <HStack
          px={4}
          py={3}
          bg="abm.navy"
          justify="space-between"
          borderBottom="1px solid"
          borderColor="rgba(255,255,255,0.12)"
        >
          <HStack spacing={2}>
            <Box boxSize="8px" rounded="full" bg="#FF6B6B" />
            <Box boxSize="8px" rounded="full" bg="#FFD166" />
            <Box boxSize="8px" rounded="full" bg="#06D6A0" />
          </HStack>

          <Text
            fontSize="xs"
            color="whiteAlpha.600"
            fontFamily="mono"
            fontWeight="900"
          >
            client-{String(index || 1).padStart(2, "0")}
          </Text>
        </HStack>

        <Box h="150px" display="grid" placeItems="center" p={7} bg="white">
          <Image
            src={src}
            alt={alt}
            maxH="90px"
            maxW="190px"
            objectFit="contain"
            filter="grayscale(100%)"
            opacity="0.78"
            transition="all 0.22s ease"
            _groupHover={{
              filter: "grayscale(0%)",
              opacity: 1,
            }}
          />
        </Box>

        <Box px={5} pb={5}>
          <Text
            color="abm.navy"
            fontWeight="900"
            textAlign="center"
            noOfLines={1}
          >
            {name || alt}
          </Text>
        </Box>
      </Box>
    </Link>
  );
}

export default ClientLogo;
