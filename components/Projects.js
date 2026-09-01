"use client";

import { CalendarDays, Github } from "lucide-react";

const projects = [
  {
    title: "Nyay-Setu",
    date: "Aug 2025",
    github: "https://github.com/sumitshah83326/Nyay-Setu",
    description:
      "Led a 6-member team to build a full-featured civic-tech platform that lets citizens report and track civic issues such as potholes, street-light failures, and waste management in real time using geolocation.",
    details:
      "Integrated AI-powered legal and civic guidance with the Gemini API, nearby-services discovery via the Maps API, and a smart chatbot for common queries while optimizing performance using MongoDB and Redis for scalable issue management.",
    tech: [
      "React.js",
      "Next.js",
      "MongoDB",
      "Redis",
      "Maps API",
      "Gemini API",
    ],
  },
  {
    title: "AI Resume Analyzer",
    date: "Jan 2026",
    github: "https://github.com/sumitshah83326/AI-Resume-Analyzer",
    description:
      "Developed an AI-powered resume analysis platform using FastAPI and React to extract, analyze, and structure resume content, predict ATS scores, and highlight missing skills.",
    details:
      "Implemented NLP-based skill extraction and keyword matching using spaCy, providing ATS-focused insights through a modern responsive Tailwind CSS interface.",
    tech: ["React.js", "FastAPI", "spaCy", "Tailwind CSS"],
  },
  {
    title: "Attend-X — Smart Attendance System",
    date: "Nov 2025",
    github: "https://github.com/sumitshah83326/Face_Recognition_System",
    description:
      "A desktop-based attendance system built with Python and Tkinter, implementing LBPH face recognition with OpenCV to reduce manual attendance effort by nearly 80%.",
    details:
      "Integrated MySQL for secure student data storage along with automated attendance logging, report generation, and facial recognition authentication.",
    tech: ["Python", "Tkinter", "OpenCV", "MySQL"],
  },
  {
    title: "Redoxer",
    date: "Sep 2024",
    github: "https://github.com/sumitshah83326/Redoxer",
    description:
      "A file compression and decompression tool built using the Huffman Coding algorithm, achieving 60–70% file size reduction while improving storage efficiency.",
    details:
      "Focused on optimized data structures and algorithm design to provide fast compression and decompression for large files.",
    tech: ["Python", "Data Structures & Algorithms"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 transition-all duration-300">
      <div className="container">
        {/* Section Heading */}
        <h2 className="section-title">Featured Projects</h2>

        <p className="section-subtitle">
          A showcase of my technical projects and innovations that solve
          real-world problems.
        </p>

        {/* Project Cards */}
        <div className="mx-auto mt-16 max-w-5xl space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card rounded-2xl p-6"
              style={{
                background: "var(--surface)",
              }}
            >
              {/* Title + Featured Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <h3
                  className="text-2xl font-bold transition-colors duration-300"
                  style={{ color: "var(--text)" }}
                >
                  {project.title}
                </h3>

                <span
                  className="rounded-full px-3 py-1 text-xs font-bold"
                  style={{
                    background: "var(--gold)",
                    color: "#000",
                  }}
                >
                  ★ Featured
                </span>
              </div>

              {/* Date */}
              <div
                className="mt-3 flex items-center gap-2 text-sm transition-colors duration-300"
                style={{ color: "var(--muted)" }}
              >
                <CalendarDays size={17} strokeWidth={1.8} />
                <span>{project.date}</span>
              </div>

              {/* Description */}
              <p
                className="mt-5 leading-7 transition-colors duration-300"
                style={{ color: "var(--muted)" }}
              >
                {project.description}
              </p>

              {/* Details */}
              <p
                className="mt-4 text-sm leading-7 transition-colors duration-300"
                style={{ color: "var(--muted)" }}
              >
                {project.details}
              </p>

              {/* Technologies */}
              <div
                className="mt-6 border-t pt-5 transition-colors duration-300"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="mb-4 flex items-center gap-2 font-bold"
                  style={{ color: "var(--text)" }}
                >
                  <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                  Technologies Used
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border px-3 py-2 text-xs font-semibold transition-all duration-300 hover:scale-105 hover:border-amber-400"
                      style={{
                        background: "var(--surface-2)",
                        borderColor: "var(--border)",
                        color: "var(--text)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: "var(--gold)",
                  color: "#000",
                  boxShadow: "0 8px 20px rgba(245,158,11,0.25)",
                }}
              >
                <Github size={18} strokeWidth={2} />
                View Code
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}