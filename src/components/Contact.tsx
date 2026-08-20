import React, { useState, useRef } from "react";
import { contactInfo } from "../data/contact"; // Adjust relative path if contact.ts is located elsewhere
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import RevealOnScroll from "./RevealOnScroll";
import ElectricBorder from "./ElectricBorder";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Github from "@thesvg/react/github";
import Linkedin from "@thesvg/react/linkedin";
import Viber from "@thesvg/react/viber";
import Whatsapp from "@thesvg/react/whatsapp";

const THROTTLE_KEY = "contact_form_last_sent";
const COOLDOWN_TIME = 60 * 1000; // 60 seconds throttle

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "info" | null;
    msg: string;
  }>({ type: null, msg: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check localStorage throttling
    const lastSent = localStorage.getItem(THROTTLE_KEY);
    if (lastSent) {
      const timePassed = Date.now() - parseInt(lastSent, 10);
      if (timePassed < COOLDOWN_TIME) {
        const remaining = Math.ceil((COOLDOWN_TIME - timePassed) / 1000);
        setStatus({
          type: "info",
          msg: `Please wait ${remaining}s before sending another message.`,
        });
        return;
      }
    }

    if (!captchaToken) {
      setStatus({
        type: "error",
        msg: "Please complete the reCAPTCHA verification.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, msg: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.user_name,
          email: formData.user_email,
          reply_to: formData.user_email,
          message: formData.message,
          "g-recaptcha-response": captchaToken,
        },
        publicKey
      );

      localStorage.setItem(THROTTLE_KEY, Date.now().toString());

      setStatus({
        type: "success",
        msg: "Thank you! Your message has been sent successfully.",
      });

      setFormData({ user_name: "", user_email: "", message: "" });
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setCaptchaToken(null);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus({
        type: "error",
        msg: "Failed to send message. Please try again or reach out directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1100px] px-[var(--spacing-24)] py-[var(--spacing-80)]"
    >
      <RevealOnScroll>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-[var(--spacing-48)]">
          <p className="font-[family-name:var(--font-mono)] text-[var(--text-caption)] uppercase tracking-[0.2em] text-[var(--color-cyan-ink)] font-semibold mb-2">
            SAY HELLO
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[36px] sm:text-[48px] font-bold text-[var(--color-text-primary)] leading-tight mb-3">
            Let's Connect
          </h2>
          <p className="max-w-xl font-[family-name:var(--font-mono)] text-[var(--text-body-sm)] sm:text-[var(--text-body)] text-[var(--color-text-body)] leading-relaxed">
            Have a project in mind, a question, or just want to connect? Send a
            message or hit me up via direct channels.
          </p>
        </div>

        {/* Two Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* LEFT COLUMN: Contact Info inside Animated Electric Border */}
          <ElectricBorder
            color="#06b6d4"
            borderRadius={20}
            className="lg:col-span-5 h-full p-2"
          >
            <div className="flex flex-col justify-between space-y-8 h-full bg-[var(--color-carbon)] p-7 sm:p-9 rounded-[16px] border border-[var(--color-border)] shadow-sm">
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-[22px] font-bold text-[var(--color-text-primary)] mb-3">
                  Let's talk business
                </h3>
                <p className="font-[family-name:var(--font-mono)] text-[var(--text-body-sm)] text-[var(--color-text-body)] leading-relaxed mb-8">
                  I'm open to freelance opportunities, full-time engineering
                  roles, and technical collaborations.
                </p>

                {/* Direct Links List */}
                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-4 group p-2 -ml-2 rounded-lg transition-colors hover:bg-[var(--color-void)]/40"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-carbon)] text-[var(--color-text-primary)] transition-all group-hover:border-[var(--color-cyan-ink)] group-hover:text-[var(--color-cyan-ink)] group-hover:shadow-[0_0_12px_var(--color-cyan-glow)]">
                      <EnvelopeIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[var(--color-text-body)]">
                        Email
                      </p>
                      <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-cyan-ink)] transition-colors">
                        {contactInfo.email}
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-4 group p-2 -ml-2 rounded-lg transition-colors hover:bg-[var(--color-void)]/40"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-carbon)] text-[var(--color-text-primary)] transition-all group-hover:border-[var(--color-cyan-ink)] group-hover:text-[var(--color-cyan-ink)] group-hover:shadow-[0_0_12px_var(--color-cyan-glow)]">
                      <PhoneIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[var(--color-text-body)]">
                        Phone / Mobile
                      </p>
                      <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-cyan-ink)] transition-colors">
                        {contactInfo.phone}
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-2 -ml-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-carbon)] text-[var(--color-text-primary)]">
                      <MapPinIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[var(--color-text-body)]">
                        Location
                      </p>
                      <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-primary)]">
                        Calamba, Laguna, Philippines
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Badges Row */}
              <div className="pt-6 border-t border-[var(--color-border)]">
                <h3 className="font-[family-name:var(--font-display)] text-[22px] font-bold text-[var(--color-text-primary)] mb-4">
                  Connect with Me
                </h3>
                <div className="flex items-center gap-3">
                  {/* GitHub */}
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-carbon)] text-[var(--color-text-primary)] transition-all hover:border-[var(--color-cyan-ink)] hover:text-[var(--color-cyan-ink)] hover:shadow-[0_0_12px_var(--color-cyan-glow)]"
                  >
                    <Github variant="mono" className="h-5 w-5" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-carbon)] text-[var(--color-text-primary)] transition-all hover:border-[var(--color-cyan-ink)] hover:text-[var(--color-cyan-ink)] hover:shadow-[0_0_12px_var(--color-cyan-glow)]"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>

                  {/* Viber */}
                  <a
                    href={`viber://chat?number=${contactInfo.phone.replace(/[^0-9]/g, "")}`}
                    aria-label="Viber Chat"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-carbon)] text-[var(--color-text-primary)] transition-all hover:border-[var(--color-cyan-ink)] hover:text-[var(--color-cyan-ink)] hover:shadow-[0_0_12px_var(--color-cyan-glow)]"
                  >
                    <Viber className="h-5 w-5" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Chat"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-carbon)] text-[var(--color-text-primary)] transition-all hover:border-[var(--color-cyan-ink)] hover:text-[var(--color-cyan-ink)] hover:shadow-[0_0_12px_var(--color-cyan-glow)]"
                  >
                    <Whatsapp className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </ElectricBorder>

          {/* RIGHT COLUMN: Form with Uiverse.io Glow Effect */}
          <div className="lg:col-span-7 h-full">
            <div className="group/card rounded-[22px] bg-gradient-to-br from-[var(--color-cyan-ink)] via-[var(--color-cyan-subtle)] to-[var(--color-cyan-ink)] p-[2px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(82,225,254,0.35)] h-full">
              <div className="rounded-[20px] bg-[var(--color-carbon)] p-6 sm:p-8 transition-transform duration-200 group-hover/card:scale-[0.995] h-full flex flex-col justify-between">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <p className="font-[family-name:var(--font-mono)] text-center text-[var(--color-cyan-ink)] font-semibold text-lg mb-1">
                    Get In Touch
                  </p>

                  {/* Name Input */}
                  <div className="flex items-center rounded-xl bg-[var(--color-carbon)] p-2.5 transition-all shadow-[inset_2px_4px_8px_rgba(0,0,0,0.3)] border border-[var(--color-border)] focus-within:border-[var(--color-cyan-ink)]">
                    <input
                      required
                      type="text"
                      name="user_name"
                      placeholder="Name"
                      value={formData.user_name}
                      onChange={handleChange}
                      className="w-full bg-transparent px-3 text-[var(--color-text-primary)] font-[family-name:var(--font-mono)] text-sm outline-none placeholder:text-[var(--color-text-body)]"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex items-center rounded-xl bg-[var(--color-carbon)] p-2.5 transition-all shadow-[inset_2px_4px_8px_rgba(0,0,0,0.3)] border border-[var(--color-border)] focus-within:border-[var(--color-cyan-ink)]">
                    <input
                      required
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      value={formData.user_email}
                      onChange={handleChange}
                      className="w-full bg-transparent px-3 text-[var(--color-text-primary)] font-[family-name:var(--font-mono)] text-sm outline-none placeholder:text-[var(--color-text-body)]"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="flex items-center rounded-xl bg-[var(--color-carbon)] p-2.5 transition-all shadow-[inset_2px_4px_8px_rgba(0,0,0,0.3)] border border-[var(--color-border)] focus-within:border-[var(--color-cyan-ink)]">
                    <textarea
                      required
                      rows={4}
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent px-3 text-[var(--color-text-primary)] font-[family-name:var(--font-mono)] text-sm outline-none placeholder:text-[var(--color-text-body)] resize-none"
                    />
                  </div>

                  {/* reCAPTCHA Widget */}
                  <div className="flex justify-center my-1 overflow-x-auto">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || ""}
                      onChange={handleCaptchaChange}
                      theme="dark"
                    />
                  </div>

                  {/* Status Banner */}
                  {status.msg && (
                    <div
                      className={`p-3 rounded-lg text-center font-[family-name:var(--font-mono)] text-xs transition-all ${
                        status.type === "success"
                          ? "bg-[var(--color-cyan-subtle)] text-[var(--color-cyan-ink)] border border-[var(--color-cyan-ink)]"
                          : status.type === "error"
                          ? "bg-red-500/10 text-red-400 border border-red-500/30"
                          : "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                      }`}
                    >
                      {status.msg}
                    </div>
                  )}

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-[family-name:var(--font-mono)] font-bold text-sm text-[var(--color-cyan-ink)] border border-[var(--color-cyan-ink)] bg-transparent transition-all duration-300 hover:bg-[var(--color-cyan-ink)] hover:text-[#000] hover:shadow-[inset_2px_4px_8px_rgba(0,0,0,0.3)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <PaperAirplaneIcon className="h-5 w-5" />
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}