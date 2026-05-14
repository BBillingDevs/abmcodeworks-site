import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "cookie_consent_v1";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!savedConsent) {
      setShowBanner(true);
      return;
    }

    try {
      const consent = JSON.parse(savedConsent);

      if (consent.analytics) {
        loadAnalytics();
      }

      if (consent.marketing) {
        loadMarketing();
      }
    } catch {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      setShowBanner(true);
    }
  }, []);

  function saveConsent(consent) {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({
        necessary: true,
        analytics: consent.analytics,
        marketing: consent.marketing,
        savedAt: new Date().toISOString(),
      }),
    );

    if (consent.analytics) {
      loadAnalytics();
    }

    if (consent.marketing) {
      loadMarketing();
    }

    setShowBanner(false);
    setShowSettings(false);
  }

  function acceptOptionalCookies() {
    saveConsent({
      analytics: true,
      marketing: true,
    });
  }

  function rejectOptionalCookies() {
    saveConsent({
      analytics: false,
      marketing: false,
    });
  }

  function saveCustomSettings() {
    saveConsent({
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    });
  }

  function loadAnalytics() {
    if (window.__analyticsLoaded) return;
    window.__analyticsLoaded = true;

    // Example: Google Analytics
    // Replace G-XXXXXXXXXX with your real GA4 measurement ID.
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "G-XXXXXXXXXX");
  }

  function loadMarketing() {
    if (window.__marketingLoaded) return;
    window.__marketingLoaded = true;

    // Add Meta Pixel / Google Ads / TikTok Pixel here later.
    console.log("Marketing cookies accepted.");
  }

  if (!showBanner) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.banner}>
        {!showSettings ? (
          <>
            <h2 style={styles.title}>Cookie preferences</h2>

            <p style={styles.text}>
              We use essential cookies to make this website work. We would also
              like to use optional cookies to understand how visitors use the
              site and improve it.
            </p>

            <div style={styles.buttonRow}>
              <button
                style={styles.primaryButton}
                onClick={acceptOptionalCookies}
              >
                Accept optional cookies
              </button>

              <button
                style={styles.secondaryButton}
                onClick={rejectOptionalCookies}
              >
                Reject optional cookies
              </button>

              <button
                style={styles.linkButton}
                onClick={() => setShowSettings(true)}
              >
                Manage settings
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 style={styles.title}>Manage cookie settings</h2>

            <p style={styles.text}>
              Essential cookies are always active because they are needed for
              the website to work.
            </p>

            <div style={styles.settingBox}>
              <div>
                <strong>Essential cookies</strong>
                <p style={styles.smallText}>
                  Required for security, forms, checkout, login, and basic site
                  features.
                </p>
              </div>
              <span style={styles.alwaysOn}>Always on</span>
            </div>

            <label style={styles.settingBox}>
              <div>
                <strong>Analytics cookies</strong>
                <p style={styles.smallText}>
                  Help us understand which pages are visited and how the website
                  is used.
                </p>
              </div>
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
              />
            </label>

            <label style={styles.settingBox}>
              <div>
                <strong>Marketing cookies</strong>
                <p style={styles.smallText}>
                  Used for advertising, remarketing, and measuring campaigns.
                </p>
              </div>
              <input
                type="checkbox"
                checked={marketingEnabled}
                onChange={(e) => setMarketingEnabled(e.target.checked)}
              />
            </label>

            <div style={styles.buttonRow}>
              <button style={styles.primaryButton} onClick={saveCustomSettings}>
                Save settings
              </button>

              <button
                style={styles.secondaryButton}
                onClick={rejectOptionalCookies}
              >
                Reject optional cookies
              </button>

              <button
                style={styles.linkButton}
                onClick={() => setShowSettings(false)}
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: "auto 0 0 0",
    zIndex: 9999,
    padding: "16px",
    background: "rgba(0, 0, 0, 0.35)",
  },
  banner: {
    maxWidth: "920px",
    margin: "0 auto",
    background: "#ffffff",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
    color: "#142645",
  },
  title: {
    margin: "0 0 8px",
    fontSize: "22px",
    fontWeight: "700",
  },
  text: {
    margin: "0 0 18px",
    lineHeight: "1.6",
    fontSize: "15px",
  },
  smallText: {
    margin: "5px 0 0",
    fontSize: "13px",
    lineHeight: "1.5",
    color: "#475569",
  },
  buttonRow: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  primaryButton: {
    border: "0",
    borderRadius: "999px",
    padding: "11px 18px",
    background: "#0F1F39",
    color: "#ffffff",
    fontWeight: "700",
    cursor: "pointer",
  },
  secondaryButton: {
    border: "1px solid #CBD5E1",
    borderRadius: "999px",
    padding: "11px 18px",
    background: "#ffffff",
    color: "#0F1F39",
    fontWeight: "700",
    cursor: "pointer",
  },
  linkButton: {
    border: "0",
    background: "transparent",
    color: "#2C7A7B",
    fontWeight: "700",
    cursor: "pointer",
    textDecoration: "underline",
  },
  settingBox: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    alignItems: "center",
    border: "1px solid #E2E8F0",
    borderRadius: "14px",
    padding: "14px",
    marginBottom: "10px",
  },
  alwaysOn: {
    fontSize: "13px",
    fontWeight: "700",
    color: "#2C7A7B",
    whiteSpace: "nowrap",
  },
};
