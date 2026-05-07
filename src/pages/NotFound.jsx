import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import Seo from "../components/seo/Seo";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function NotFound() {
    return (
        <Box bg="abm.paper">
            <Seo
                title="Page Not Found | ABM Codeworks"
                description="The page you are looking for could not be found."
                path="/404"
                noindex
            />

            <Navbar />

            <Box minH="70vh" display="grid" placeItems="center" px={6}>
                <Stack spacing={4} textAlign="center" maxW="560px">
                    <Text
                        color="abm.teal"
                        fontWeight="900"
                        letterSpacing="0.18em"
                        textTransform="uppercase"
                    >
                        404
                    </Text>

                    <Heading as="h1" size="2xl" color="abm.navy">
                        Page not found
                    </Heading>

                    <Text color="gray.600">
                        The page may have moved, or the address may be incorrect.
                    </Text>

                    <Button
                        as={RouterLink}
                        to="/"
                        alignSelf="center"
                        rounded="full"
                        bg="abm.teal"
                        color="white"
                        _hover={{ bg: "abm.tealDark" }}
                    >
                        Go home
                    </Button>
                </Stack>
            </Box>

            <Footer />
        </Box>
    );
}

export default NotFound;
