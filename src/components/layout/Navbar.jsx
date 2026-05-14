import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import NavLink from "../ui/NavLink";
import MobileNavLink from "../ui/MobileNavLink";
import { navItems } from "../../data/siteData";

function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="1000"
      bg="rgba(11, 23, 42, 0.92)"
      color="white"
      backdropFilter="blur(16px)"
      borderBottom="1px solid rgba(255,255,255,0.12)"
      w="100%"
    >
      <Container
        maxW="1800px"
        px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
        py={3}
      >
        <Flex align="center" justify="space-between" gap={6} w="100%">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
            <HStack spacing={3}>
              <Box
                bg="white"
                rounded="2xl"
                p={2}
                boxShadow="0 14px 30px rgba(0,0,0,0.22)"
                flexShrink={0}
              >
                <Image src={logo} alt="ABM Codeworks logo" boxSize="34px" />
              </Box>

              <Box>
                <Text fontWeight="900" lineHeight="1">
                  ABM Codeworks
                </Text>
                <Text
                  fontSize="xs"
                  color="whiteAlpha.700"
                  display={{ base: "none", sm: "block" }}
                >
                  Web, mobile and cloud systems
                </Text>
              </Box>
            </HStack>
          </Link>

          <HStack display={{ base: "none", lg: "flex" }} spacing={7}>
            {navItems.map((item) => (
              <NavLink key={item.label} href={item.href}>
                {item.label}
              </NavLink>
            ))}

            <Button
              as={RouterLink}
              to="/contact"
              size="sm"
              rounded="full"
              bg="abm.teal"
              color="white"
              _hover={{ bg: "abm.tealDark", transform: "translateY(-1px)" }}
            >
              Contact Us
            </Button>
          </HStack>

          <IconButton
            aria-label={isOpen ? "Close menu" : "Open menu"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ base: "inline-flex", lg: "none" }}
            onClick={onToggle}
            variant="ghost"
            color="white"
            _hover={{ bg: "whiteAlpha.200" }}
          />
        </Flex>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <Box
          display={{ lg: "none" }}
          bg="abm.navy2"
          borderTop="1px solid rgba(255,255,255,0.12)"
          maxH="calc(100vh - 72px)"
          overflowY="auto"
          w="100%"
        >
          <Container maxW="1800px" px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}>
            <VStack align="stretch" spacing={1} py={5}>
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                >
                  {item.label}
                </MobileNavLink>
              ))}

              <Button
                as={RouterLink}
                to="/contact"
                mt={3}
                rounded="full"
                bg="abm.teal"
                color="white"
                onClick={onClose}
                _hover={{ bg: "abm.tealDark" }}
              >
                Contact Us
              </Button>
            </VStack>
          </Container>
        </Box>
      </Collapse>
    </Box>
  );
}

export default Navbar;
