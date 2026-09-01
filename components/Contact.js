"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  async function submit(e) {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://formspree.io/f/mljegewv",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Formspree error:", data);

        setStatus(
          data?.errors?.[0]?.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Submission error:", error);

      setStatus(
        "Unable to send message. Please try again."
      );
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container">
        {/* Heading */}
        <h2 className="section-title">Get In Touch</h2>

        <p className="section-subtitle">
          I'm always open to discussing new opportunities and interesting
          projects.
        </p>

        {/* Contact Section */}
        <div className="mt-14 grid items-start gap-8 lg:grid-cols-2">

          {/* Left Card */}
          <div className="card h-fit self-start p-8">
            <h3 className="text-2xl font-bold text-[color:var(--text)]">
              Contact Information
            </h3>

            <div className="mt-8 space-y-6">

              {/* Email */}
              <Info
                icon={<Mail size={22} />}
                label="Email"
                value="sumitshah83840@gmail.com"
                href="mailto:sumitshah83840@gmail.com"
              />

              {/* Phone */}
              <Info
                icon={<Phone size={22} />}
                label="Phone"
                value="+91 7783083840"
                href="tel:+917783083840"
              />

              {/* Location */}
              <Info
                icon={<MapPin size={22} />}
                label="Location"
                value="India"
              />

              {/* GitHub */}
              <Info
                icon={<Github size={22} />}
                label="GitHub"
                value="github.com/sumitshah83326"
                href="https://github.com/sumitshah83326"
              />

              {/* LinkedIn */}
              <Info
                icon={<Linkedin size={22} />}
                label="LinkedIn"
                value="linkedin.com/in/sumitshah83840"
                href="https://www.linkedin.com/in/sumitshah83840"
              />

            </div>
          </div>

          {/* Right Card */}
          <form
            onSubmit={submit}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold text-[color:var(--text)]">
              Send a Message
            </h3>

            {/* Name */}
            <Field
              label="Name"
              placeholder="Your name"
              value={form.name}
              onChange={(v) =>
                setForm({
                  ...form,
                  name: v,
                })
              }
            />

            {/* Email */}
            <Field
              label="Email"
              type="email"
              placeholder="your.email@example.com"
              value={form.email}
              onChange={(v) =>
                setForm({
                  ...form,
                  email: v,
                })
              }
            />

            {/* Subject */}
            <Field
              label="Subject"
              placeholder="What's this about?"
              value={form.subject}
              onChange={(v) =>
                setForm({
                  ...form,
                  subject: v,
                })
              }
            />

            {/* Message */}
            <label className="mt-5 block">
              <span className="text-sm font-semibold text-[color:var(--text)]">
                Message
              </span>

              <textarea
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className="contact-textarea mt-2 p-4 text-sm"
              />
            </label>

            {/* Button */}
            <button
              type="submit"
              disabled={status === "Sending..."}
              className="mt-6 w-full rounded-lg bg-[#ff9d00] py-3 font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "Sending..."
                ? "Sending..."
                : "Send Message"}
            </button>

            {/* Status */}
            {status && (
              <p
                className={`mt-4 text-center text-sm font-medium ${
                  status === "Message sent successfully!"
                    ? "text-green-500"
                    : status === "Sending..."
                    ? "text-[color:var(--text)]"
                    : "text-red-500"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   Contact Information Item
-------------------------------------------------- */

function Info({ icon, label, value, href }) {
  return (
    <div className="flex items-center gap-4 py-2">

      {/* Icon */}
      <div className="contact-icon flex h-10 w-10 flex-shrink-0 items-center justify-center">
        {icon}
      </div>

      {/* Text */}
      <div className="min-w-0">

        {/* Label */}
        <p className="contact-label">
          {label}
        </p>

        {/* Value */}
        {href ? (
          <a
            href={href}
            target={
              href.startsWith("http")
                ? "_blank"
                : undefined
            }
            rel="noreferrer"
            className="contact-value mt-1 block break-all text-sm"
          >
            {value}
          </a>
        ) : (
          <p className="contact-value mt-1 text-sm">
            {value}
          </p>
        )}

      </div>
    </div>
  );
}

/* --------------------------------------------------
   Input Field
-------------------------------------------------- */

function Field({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <label className="mt-5 block">

      <span className="text-sm font-semibold text-[color:var(--text)]">
        {label}
      </span>

      <input
        required
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="contact-input mt-2 px-4 py-3 text-sm"
      />

    </label>
  );
}