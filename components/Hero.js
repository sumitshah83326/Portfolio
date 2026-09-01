import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const badges = [
    "Full-Stack Developer",
    "AI/ML Enthusiast",
    "Competitive Programmer",
  ];

  return (
    <section id="home" className="min-h-screen pt-24">
      <div className="container grid min-h-[calc(100vh-96px)] items-center gap-16 py-16 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          {/* Availability Badge */}
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold transition-all duration-300"
            style={{
              borderColor: "var(--gold-dark)",
              color: "var(--text)",
              background: "var(--surface)",
            }}
          >
            <Sparkles size={14} color="#ff9d00" />
            Available for Opportunities
          </div>

          {/* Heading */}
          <h1
            className="text-5xl font-black leading-[1.05] transition-colors duration-300 sm:text-6xl lg:text-7xl"
            style={{ color: "var(--text)" }}
          >
            Hi, I'm <span style={{ color: "var(--gold)" }}>Sumit</span>
            <br />
            <span style={{ color: "var(--gold)" }}>Shah</span>
          </h1>

          {/* Description */}
          <p
            className="mt-7 max-w-2xl text-lg leading-8 transition-colors duration-300"
            style={{ color: "var(--muted)" }}
          >
            Computer Science Undergraduate at KIIT University with expertise in
            Full-Stack Development, AI/ML, and Competitive Programming.
            Passionate about building innovative solutions that make a difference
            — CGPA 9.77/10, 1750+ LeetCode Rating, and 500+ problems solved.
          </p>

          {/* Skills */}
          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300"
                style={{
                  background: "var(--surface)",
                  color: "var(--text)",
                  borderColor: "var(--border)",
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg px-6 py-3 font-bold text-black transition-all duration-300 hover:scale-105"
              style={{ background: "var(--gold)" }}
            >
              Get In Touch
              <ArrowRight size={18} />
            </a>

            <a
              href="/assets/resume.pdf"
              download
              className="flex items-center gap-2 rounded-lg border px-6 py-3 font-bold transition-all duration-300 hover:border-[#ff9d00]"
              style={{
                background: "var(--surface)",
                color: "var(--text)",
                borderColor: "var(--border)",
              }}
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div
            className="mt-10 flex gap-6 transition-colors duration-300"
            style={{ color: "var(--muted)" }}
          >
            <a
              href="mailto:sumitshah83840@gmail.com"
              className="transition hover:text-[#ff9d00]"
            >
              <Mail size={24} />
            </a>

            <a
              href="tel:+917783083840"
              className="transition hover:text-[#ff9d00]"
            >
              <Phone size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/sumitshah83840"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#ff9d00]"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="https://github.com/sumitshah83326"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#ff9d00]"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div
          className="mx-auto w-full max-w-[430px] rounded-2xl p-8 transition-all duration-300"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            boxShadow: "0 20px 50px var(--shadow)",
          }}
        >
          {/* Profile Image */}
          <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border-4 border-[#ff9d00]">
            <img
              src="/assets/profile.jpeg"
              alt="Sumit Shah"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 text-center">
            <div>
              <h2
                className="text-3xl font-extrabold"
                style={{ color: "var(--text)" }}
              >
                1750+
              </h2>

              <p
                className="mt-1 text-sm"
                style={{ color: "var(--muted)" }}
              >
                LeetCode Rating
              </p>
            </div>

            <div>
              <h2
                className="text-3xl font-extrabold"
                style={{ color: "var(--text)" }}
              >
                500+
              </h2>

              <p
                className="mt-1 text-sm"
                style={{ color: "var(--muted)" }}
              >
                Problems Solved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}