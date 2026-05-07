import { useState } from "react";

const ENABLE_RECAPTCHA = import.meta.env.VITE_ENABLE_RECAPTCHA !== "false";
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export default function useContactForm() {
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const recaptchaReady = ENABLE_RECAPTCHA && Boolean(RECAPTCHA_SITE_KEY);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (recaptchaReady && !recaptchaToken) {
            alert("Please verify that you are not a robot.");
            return;
        }

        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: formData.get("name") || "",
            email: formData.get("email") || "",
            project_type: formData.get("project_type") || "",
            message: formData.get("message") || "",
            recaptchaToken: recaptchaToken || "",
        };

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || "Failed to send message.");
            }

            alert("Message sent successfully!");
            form.reset();
            setRecaptchaToken(null);
        } catch (error) {
            console.error("Contact form error:", error);
            alert(error.message || "Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        handleSubmit,
        recaptchaReady,
        recaptchaToken,
        setRecaptchaToken,
        isSubmitting,
        recaptchaSiteKey: RECAPTCHA_SITE_KEY,
    };
}
