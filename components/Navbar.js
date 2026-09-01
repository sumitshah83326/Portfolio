"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const links = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Achievements",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle(
      "light",
      savedTheme === "light"
    );
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle(
      "light",
      newTheme === "light"
    );
  };

  return (
    <header
      className="fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300"
      style={{
        backgroundColor: "var(--navbar-bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <nav className="container flex h-[62px] items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 font-bold">
          <div className="h-10 w-10 overflow-hidden rounded-full border border-[#ff9d00]">
            <img
              src="/assets/profile.jpeg"
              alt="Sumit Shah"
              className="h-full w-full object-cover"
            />
          </div>

          <span className="text-lg font-bold text-[#ff9d00]">
            Sumit Shah
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-bold transition hover:text-[#ff9d00]"
              style={{ color: "var(--text)" }}
            >
              {link}
            </a>
          ))}

          {/* Theme Button */}
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:border-[#ff9d00] hover:text-[#ff9d00]"
            style={{
              borderColor: "var(--border)",
              color: "var(--text)",
            }}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{ color: "var(--text)" }}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="border-t md:hidden transition-all duration-300"
          style={{
            backgroundColor: "var(--navbar-bg)",
            borderColor: "var(--border)",
          }}
        >
          <div className="container flex flex-col py-3">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="border-b py-3 font-semibold transition hover:text-[#ff9d00]"
                style={{
                  color: "var(--text)",
                  borderColor: "var(--border)",
                }}
              >
                {link}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="mt-4 flex items-center gap-3 rounded-lg border px-4 py-2 transition hover:border-[#ff9d00]"
              style={{
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}