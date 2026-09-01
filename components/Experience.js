"use client";

import { CalendarDays, MapPin } from "lucide-react";

const skills = [
  "Web Development",
  "REST APIs",
  "Content Strategy",
  "Community Management",
];

const responsibilities = [
  "Designed and developed the official IEEE CTSoc/CIS Society website with a fully responsive and user-friendly interface.",
  "Organized and coordinated technical events including the OCIT Summit and CUBE-X Ideathon, mentoring participants throughout the events.",
  "Managed technical content, event announcements, and community engagement across society platforms.",
  "Integrated REST APIs to fetch real-time event data and optimized website performance, responsiveness, and cross-browser compatibility.",
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 transition-all duration-300">
      <div className="container">
        {/* Section Heading */}
        <h2 className="section-title">Experience</h2>

        <p className="section-subtitle">
          My professional journey and leadership experience.
        </p>

        {/* Experience Card */}
        <div
          className="mx-auto mt-14 max-w-5xl rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            boxShadow: "0 15px 40px var(--shadow)",
          }}
        >
          {/* Header */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            {/* Left Side */}
            <div>
              <h3
                className="text-2xl font-bold transition-colors duration-300"
                style={{ color: "var(--text)" }}
              >
                Technical / Content Lead
              </h3>

              <p
                className="mt-2 text-lg font-bold"
                style={{ color: "var(--gold)" }}
              >
                IEEE CTSoc / CIS Society
              </p>
            </div>

            {/* Right Side (Lucide Icons) */}
            <div
              className="flex flex-col gap-3 text-sm transition-colors duration-300 sm:items-end"
              style={{ color: "var(--muted)" }}
            >
              <div className="flex items-center gap-2">
                <CalendarDays
                  size={16}
                  strokeWidth={1.8}
                  style={{ color: "var(--gold)" }}
                />
                <span>Aug 2025 – Present</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin
                  size={16}
                  strokeWidth={1.8}
                  style={{ color: "var(--gold)" }}
                />
                <span>Remote</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="my-8 h-px w-full"
            style={{ background: "var(--border)" }}
          />

          {/* Responsibilities */}
          <ul
            className="space-y-6 leading-8 transition-colors duration-300"
            style={{ color: "var(--muted)" }}
          >
            {responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span
                  className="mt-3 h-2 w-2 rounded-full flex-shrink-0"
                  style={{ background: "var(--gold)" }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Skill Badges */}
          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 hover:scale-105 hover:border-amber-400"
                style={{
                  background: "var(--surface-2)",
                  color: "var(--text)",
                  borderColor: "var(--border)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}