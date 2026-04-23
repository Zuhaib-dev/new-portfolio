"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, CheckCircle, Send } from "lucide-react";
import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "zuhaibrashid01@gmail.com",
    href: "mailto:zuhaibrashid01@gmail.com",
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6006414088",
    href: "tel:+916006414088",
    color: "text-green-500 bg-green-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Srinagar, India",
    href: null,
    color: "text-orange-500 bg-orange-500/10",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/Zuhaib",
    href: "https://www.linkedin.com/in/zuhaib-rashid-661345318/",
    color: "text-sky-500 bg-sky-500/10",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Zuhaib-dev",
  },
  {
    icon: FaXTwitter,
    label: "Twitter / X",
    href: "https://x.com/xuhaib_x9",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zuhaib-rashid-661345318/",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: If the 'website' field is filled, it's likely a bot
    if (formData.website) {
      console.warn("Honeypot filled. Bot detected.");
      // Pretend it succeeded to not alert the bot
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);


    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to send message",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Let's Talk
        </p>
        <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
        <p className="text-muted-foreground text-sm mb-10">
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* ── Left: Info ── */}
          <div className="space-y-6">
            {/* Contact cards */}
            <div className="space-y-3">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-4 rounded-xl border border-border/50 bg-muted/20 px-4 py-3 hover:bg-muted/40 transition-colors"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.color}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium truncate">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );

                return item.href ? (
                  <Link
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-muted/30 hover:bg-muted/60 transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability note */}
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">
                  Available for new projects
                </p>
              </div>
              <p className="text-xs text-muted-foreground mt-1 ml-4">
                Typical response time: within 24 hours
              </p>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="rounded-2xl border border-border/50 bg-muted/20 p-6 pt-5">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center h-full gap-4 py-10"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 border border-green-500/20">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Message Sent!</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Thanks for reaching out. I'll get back to you within 24
                      hours.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsSuccess(false)}
                  >
                    Send Another
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Honeypot field (hidden from users but visible to bots) */}
                    <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} aria-hidden="true">
                      <Input
                        id="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-1.5">

                      <label
                        htmlFor="name"
                        className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="message"
                        className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
                      >
                        Message
                      </label>
                      <span className="text-xs text-muted-foreground">
                        {formData.message.length}/500
                      </span>
                    </div>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      maxLength={500}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
