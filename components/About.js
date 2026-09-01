"use client";

import {
  GraduationCap,
  CalendarDays,
  BookOpen,
  MapPin,
  TrendingUp,
} from "lucide-react";

const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Machine Learning",
  "Computer Networks",
  "Database Management",
  "Web Technologies",
  "Object Oriented Programming",
];

const proficiency = [
  { skill: "Full Stack Development", value: 90 },
  { skill: "AI/ML", value: 85 },
  { skill: "Cloud Computing", value: 80 },
  { skill: "Problem Solving", value: 95 },
];

export default function About() {
  return (
    <section id="about" className="py-24 transition-all duration-300">
      <div className="container">
        {/* Heading */}
        <h2 className="section-title">About Me</h2>

        <p className="section-subtitle max-w-2xl">
          I'm a passionate Computer Science Engineering student at KIIT
          University with a strong foundation in full-stack development, AI/ML,
          and mobile app development. I love solving complex problems and
          building innovative solutions.
        </p>

        {/* Main Grid */}
        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          {/* LEFT SECTION */}
          <div>
            {/* My Journey */}
            <div className="flex items-center gap-2">
              <TrendingUp
                size={18}
                strokeWidth={2}
                style={{ color: "var(--gold)" }}
              />
              <h3
                className="text-2xl font-bold"
                style={{ color: "var(--text)" }}
              >
                My Journey
              </h3>
            </div>

            <div
              className="mt-5 space-y-6 text-[15px] leading-8"
              style={{ color: "var(--muted)" }}
            >
              <p>
                Currently pursuing a B.Tech in Computer Science and Engineering
                at KIIT University with a CGPA of{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--gold)" }}
                >
                  9.77/10
                </span>
                . I've built full-stack applications, AI-powered platforms, AI
                assistants, and desktop tools ranging from a civic-tech issue
                reporter to an AI Resume Analyzer.
              </p>

              <p>
                My work spans AI-powered legal assistance, mock interviews,
                agricultural intelligence, and smart attendance systems. I'm
                always eager to explore new technologies and continuously improve
                my software engineering skills through projects and competitive
                programming.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div
                className="rounded-xl py-5 text-center"
                style={{
                  background: "var(--surface)",
                  border: "1px solid rgba(255,157,0,0.28)",
                }}
              >
                <h3
                  className="text-3xl font-bold"
                  style={{ color: "var(--gold)" }}
                >
                  9.77/10
                </h3>

                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--muted)" }}
                >
                  Current GPA
                </p>
              </div>

              <div
                className="rounded-xl py-5 text-center"
                style={{
                  background: "var(--surface)",
                  border: "1px solid rgba(255,157,0,0.28)",
                }}
              >
                <h3
                  className="text-3xl font-bold"
                  style={{ color: "var(--gold)" }}
                >
                  6+
                </h3>

                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--muted)" }}
                >
                  Projects Built
                </p>
              </div>
            </div>

            {/* Technical Proficiency */}
            <div className="mt-10">
              <h4
                className="mb-6 text-xl font-bold"
                style={{ color: "var(--text)" }}
              >
                Technical Proficiency
              </h4>

              <div className="space-y-5">
                {proficiency.map((item) => (
                  <div key={item.skill}>
                    <div className="mb-2 flex justify-between text-sm font-medium">
                      <span style={{ color: "var(--text)" }}>{item.skill}</span>

                      <span style={{ color: "var(--muted)" }}>
                        {item.value}%
                      </span>
                    </div>

                    <div
                      className="h-[7px] w-full rounded-full"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                    >
                      <div
                        className="h-[7px] rounded-full transition-all duration-700"
                        style={{
                          width: `${item.value}%`,
                          background:
                            "linear-gradient(to right,#ff9d00,#f59e0b)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION — Education Card */}
          <div
            className="self-start rounded-2xl p-7"
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(255,157,0,0.32)",
            }}
          >
            {/* Education Heading */}
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  background: "rgba(255,157,0,0.12)",
                }}
              >
                <GraduationCap
                  size={20}
                  strokeWidth={2}
                  style={{ color: "var(--gold)" }}
                />
              </div>

              <h3
                className="text-xl font-bold"
                style={{ color: "var(--text)" }}
              >
                Education
              </h3>
            </div>

            {/* Degree */}
            <div className="mt-7">
              <h4
                className="text-xl font-bold leading-8"
                style={{ color: "var(--text)" }}
              >
                B.Tech in Computer Science and Engineering
              </h4>

              <p
                className="mt-1 text-[15px]"
                style={{ color: "var(--muted)" }}
              >
                KIIT University
              </p>

              {/* Date + GPA */}
              <div
                className="mt-4 flex flex-wrap items-center gap-4 text-sm"
                style={{ color: "var(--muted)" }}
              >
                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={15}
                    strokeWidth={1.8}
                    style={{ color: "var(--gold)" }}
                  />

                  <span>September 2023 – June 2027</span>
                </div>

                <span>
                  GPA:
                  <span
                    className="ml-1 font-semibold"
                    style={{ color: "var(--gold)" }}
                  >
                    9.77/10
                  </span>
                </span>
              </div>
            </div>

            {/* Coursework */}
            <div className="mt-7">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen
                  size={17}
                  strokeWidth={1.8}
                  style={{ color: "var(--gold)" }}
                />

                <h5
                  className="text-base font-bold"
                  style={{ color: "var(--text)" }}
                >
                  Relevant Coursework
                </h5>
              </div>

              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all duration-300 hover:border-amber-400"
                    style={{
                      background: "var(--surface-2)",
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div
              className="my-7 h-px w-full"
              style={{ background: "var(--border)" }}
            />

            {/* Location */}
            <div
              className="flex items-center gap-3 text-sm"
              style={{ color: "var(--muted)" }}
            >
              <MapPin
                size={16}
                strokeWidth={1.8}
                style={{ color: "var(--gold)" }}
              />

              <span>Based in India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}