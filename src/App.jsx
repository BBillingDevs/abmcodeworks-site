import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import PortfolioPage from "./pages/PortfolioPage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Eula from "./pages/Eula";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import CookieBanner from "./components/CookieBanner";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, Inter, system-ui, sans-serif",
    body: "Poppins, Inter, system-ui, sans-serif",
  },
  colors: {
    abm: {
      navy: "#07111F",
      navy2: "#0D1B2F",
      ink: "#16243E",
      teal: "#2C7A7B",
      tealDark: "#1F5F60",
      gold: "#C89B3C",
      paper: "#F5F3EC",
      soft: "#EAF2EF",
      line: "#D8DDD5",
    },
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "abm.paper",
        color: "abm.ink",
        overflowX: "hidden",
      },
      "::selection": {
        bg: "abm.teal",
        color: "white",
      },
    },
  },
});

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/contact" element={<ContactPage />} />

            <Route
              path="/website-design-zimbabwe"
              element={<ServicePage serviceKey="websiteDesign" />}
            />
            <Route
              path="/software-development-zimbabwe"
              element={<ServicePage serviceKey="softwareDevelopment" />}
            />
            <Route
              path="/web-development-zimbabwe"
              element={<ServicePage serviceKey="webDevelopment" />}
            />
            <Route
              path="/mobile-app-development-zimbabwe"
              element={<ServicePage serviceKey="mobileDevelopment" />}
            />
            <Route
              path="/ecommerce-website-development-zimbabwe"
              element={<ServicePage serviceKey="ecommerceDevelopment" />}
            />
            <Route
              path="/school-software-development-zimbabwe"
              element={<ServicePage serviceKey="schoolSoftware" />}
            />

            <Route path="/portfolio" element={<PortfolioPage />} />

            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/eula" element={<Eula />} />
            <Route path="/disclaimer" element={<Disclaimer />} />

            <Route
              path="/butterflies-of-zimbabwe/terms-and-conditions"
              element={<Navigate to="/terms" replace />}
            />
            <Route
              path="/butterflies-of-zimbabwe/privacy-policy"
              element={<Navigate to="/privacy" replace />}
            />
            <Route
              path="/butterflies-of-zimbabwe/eula"
              element={<Navigate to="/eula" replace />}
            />
            <Route
              path="/butterflies-of-zimbabwe/disclaimer"
              element={<Navigate to="/disclaimer" replace />}
            />

            <Route path="/bbdevs/*" element={<Navigate to="/" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>{" "}
        </Router>
        <CookieBanner />
      </ChakraProvider>
    </HelmetProvider>
  );
}

export default App;
