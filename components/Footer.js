import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-12">
      <div className="container text-center">
        <div className="flex justify-center gap-7 text-[#91a0b5]">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="mt-7 flex justify-center gap-6 text-[#91a0b5]">
          <a href="mailto:sumitshah83840@gmail.com"><Mail /></a>
          <a href="tel:+917783083840"><Phone /></a>
          <a href="https://github.com/sumitshah83326"><Github /></a>
          <a href="https://www.linkedin.com/in/sumitshah83840"><Linkedin /></a>
        </div>
        <p className="mt-7 text-sm text-[#91a0b5]">© 2026 Sumit Shah. Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
