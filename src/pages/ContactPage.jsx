import { Box } from "@chakra-ui/react";

import Seo from "../components/seo/Seo";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHero from "../components/ui/PageHero";
import Contact from "../components/home/Contact";
import useContactForm from "../hooks/useContactForm";

function ContactPage() {
    const contactForm = useContactForm();

    return (
        <Box bg="abm.paper">
            <Seo
                title="Contact ABM Codeworks | Website & Software Development Zimbabwe"
                description="Contact ABM Codeworks to discuss website design, software development, mobile app development, e-commerce systems, dashboards and custom digital projects in Zimbabwe."
                path="/contact"
            />

            <Navbar />

            <Box as="main">
                <PageHero
                    eyebrow="Contact ABM Codeworks"
                    title="Tell us what you need built, fixed or improved."
                    text="Whether you need a website, mobile app, dashboard, e-commerce system, school platform or custom software, send us a message and we will help you shape the next step."
                    primaryHref="#contact-form"
                    primaryLabel="Send a message"
                    secondaryHref="/case-studies"
                    secondaryLabel="View our work"
                />

                <Contact {...contactForm} sectionId="contact-form" />
            </Box>

            <Footer />
        </Box>
    );
}

export default ContactPage;
