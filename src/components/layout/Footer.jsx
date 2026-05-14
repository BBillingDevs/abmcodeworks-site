import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import logo from "../../assets/logo.png";

function Footer() {
  return (
    <Box as="footer" bg="abm.navy" color="white" w="100%">
      <Container
        maxW="1800px"
        px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
        py={8}
      >
        <Flex
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          gap={6}
          w="100%"
        >
          <HStack spacing={3}>
            <Box bg="white" rounded="xl" p={2} flexShrink={0}>
              <Image src={logo} alt="ABM Codeworks logo" boxSize="28px" />
            </Box>

            <Box>
              <Text fontWeight="900">ABM Codeworks</Text>
              <Text fontSize="sm" color="whiteAlpha.700">
                © {new Date().getFullYear()} All rights reserved.
              </Text>
            </Box>
          </HStack>

          <HStack spacing={5} wrap="wrap">
            <Link
              as={RouterLink}
              to="/website-design-zimbabwe"
              fontSize="sm"
              color="whiteAlpha.700"
              _hover={{ color: "white" }}
            >
              Website Design
            </Link>

            <Link
              as={RouterLink}
              to="/software-development-zimbabwe"
              fontSize="sm"
              color="whiteAlpha.700"
              _hover={{ color: "white" }}
            >
              Software Development
            </Link>

            <Link
              as={RouterLink}
              to="/portfolio"
              fontSize="sm"
              color="whiteAlpha.700"
              _hover={{ color: "white" }}
            >
              Portfolio
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
