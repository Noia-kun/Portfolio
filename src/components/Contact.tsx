import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { contactInfo } from "../data/contact";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const THROTTLE_KEY = "contact_last_sent";
const THROTTLE_MS = 60_000; // 1 minute between sends

type Status = "idle" | "sending" | "success" | "error" | "throttled";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  function isThrottled(): boolean {
    const last = localStorage.getItem(THROTTLE_KEY);
    if (!last) return false;
    return Date.now() - Number(last) < THROTTLE_MS;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (isThrottled()) {
      setStatus("throttled");
      return;
    }

    const captchaToken = recaptchaRef.current?.getValue();
    if (!captchaToken) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name,
          email,
          title: "New portfolio message",
          message,
          "g-recaptcha-response": captchaToken,
        },
        { publicKey: PUBLIC_KEY }
      );

      localStorage.setItem(THROTTLE_KEY, String(Date.now()));
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      recaptchaRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      recaptchaRef.current?.reset();
    }
  }

  return (
    <section id="contact" className="mx-auto flex min-h-[100dvh] max-w-[720px] flex-col justify-center px-[var(--spacing-24)] py-[var(--spacing-80)]">
      <h2 className="mb-[var(--spacing-40)] text-center font-[family-name:var(--font-display)] text-[var(--text-heading-lg)] font-medium text-[var(--color-text-primary)]">
        Contact Me
      </h2>

      {/* Phone + socials */}
      <div className="mb-[var(--spacing-40)] flex flex-wrap justify-center gap-[var(--spacing-16)] font-[var(--font-inter)] text-[var(--text-body-sm)] text-[var(--color-text-body)]">
        <a href={`tel:${contactInfo.phone}`} className="hover:text-[var(--color-text-primary)]">
          {contactInfo.phone}
        </a>
        <span className="text-[var(--color-border)]">·</span>
        <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)]">
          GitHub
        </a>
        <span className="text-[var(--color-border)]">·</span>
        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)]">
          LinkedIn
        </a>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[var(--spacing-16)] rounded-[var(--radius-cards)] bg-[var(--color-ground)] p-[var(--spacing-32)]">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="rounded-[var(--radius-cards)] border border-[var(--color-border)] bg-[var(--color-carbon)] px-[var(--spacing-16)] py-[var(--spacing-12)] font-[var(--font-inter)] text-[var(--text-body)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-cyan)]"
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded-[var(--radius-cards)] border border-[var(--color-border)] bg-[var(--color-carbon)] px-[var(--spacing-16)] py-[var(--spacing-12)] font-[var(--font-inter)] text-[var(--text-body)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-cyan)]"
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="resize-none rounded-[var(--radius-cards)] border border-[var(--color-border)] bg-[var(--color-carbon)] px-[var(--spacing-16)] py-[var(--spacing-12)] font-[var(--font-inter)] text-[var(--text-body)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-cyan)]"/>

      <div className="origin-left scale-90 sm:scale-100">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          theme="dark"/>
      </div>

        <button
          type="submit"
          disabled={status === "sending"}
          style={{ backgroundColor: "var(--color-cyan)", color: "var(--color-void)" }}
          className="rounded-[var(--radius-pills)] px-[var(--spacing-24)] py-[var(--spacing-12)] font-[var(--font-inter)] text-[var(--text-body)] font-medium transition-opacity hover:opacity-90 disabled:opacity-50">
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-[var(--text-body-sm)]" style={{ color: "var(--color-cyan)" }}>
            Message sent — thanks for reaching out!
          </p>
        )}
        {status === "error" && (
          <p className="text-[var(--text-body-sm)] text-red-400">
            Something went wrong. Please try again or email me directly.
          </p>
        )}
        {status === "throttled" && (
          <p className="text-[var(--text-body-sm)] text-[var(--color-text-muted)]">
            Please wait a minute before sending another message.
          </p>
        )}
      </form>
    </section>
  );
}