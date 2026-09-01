import { Trophy, ExternalLink, Users, GraduationCap,BookOpen,CircleDot,Award} from "lucide-react";

const cards = [
  {
    title: "Research Publications",
    icon: <BookOpen size={22} color="#ff9d00" />,
    items: [
      [
        "AI for Financial Fraud Detection",
        "Review Paper — In Progress",
        "Currently researching Explainable AI (XAI), Generative AI, Graph Neural Networks, and real-time intelligent financial security systems for fraud detection.",
      ],
    ],
  },

  {
    title: "Competitive Programming",
    icon: <Trophy size={22} color="#ff9d00" />,
    type: "cp",
    rating: "1750+",
    solved: "Solved  500+ coding problems across platforms",
    description:
      "Active on LeetCode and CodeChef (3-Star), consistently participating in contests and improving problem-solving skills.",
    profiles: [
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/Lucky_Mohan/",
      },
      {
        name: "CodeChef",
        url: "https://www.codechef.com/users/sumit_3364",
      },
    ],
    items: [
      [
        "Rank 1882 — LeetCode Weekly Contest 486",
        "Global Competitive Ranking",
        "Competed among thousands of participants globally in a weekly contest.",
      ],
    ],
  },

  {
    title: "Academic Excellence",
    icon: <GraduationCap size={22} color="#ff9d00" />,
    items: [
      [
        "Semester Topper — 5th & 6th Semesters",
        "Perfect 10.0/10.0 SGPA in both",
        "Achieved a perfect SGPA in two consecutive semesters at KIIT University.",
      ],
      [
        "9.77 / 10 CGPA",
        "KIIT University — B.Tech CSE",
        "Maintained consistent academic excellence throughout the Computer Science program.",
      ],
    ],
  },

  {
    title: "Hackathons & Leadership",
    icon: <Users size={22} color="#ff9d00" />,
    items: [
      [
        "Smart India Hackathon 2025",
        "Reached 2nd Round through University-Level Selection",
        "Qualified through internal university selection rounds for Smart India Hackathon.",
      ],
      [
        "Team Lead — Nyay-Setu",
        "Led a 6-Member Civic-Tech Team",
        "Led the development of Nyay-Setu and currently serves as Technical / Content Lead at IEEE CTSoc/CIS Society.",
      ],
    ],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 transition-all duration-300">
      <div className="container">
        {/* Heading */}
        <h2 className="section-title">Achievements</h2>

        <p className="section-subtitle">
          Recognition, awards, milestones, and achievements throughout my journey.
        </p>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "0 12px 30px var(--shadow)",
              }}
            >
              {/* Card Heading */}
              <h3
                className="flex items-center gap-3 text-xl font-bold"
                style={{ color: "var(--text)" }}
              >
                {card.icon}
                {card.title}
              </h3>

              {/* Competitive Programming Layout */}
              {card.type === "cp" ? (
                <div className="mt-6">
                  <div
                    className="border-l-2 pl-5"
                    style={{ borderColor: "var(--gold)" }}
                  >
                    <h4
                      className="text-2xl font-bold"
                      style={{ color: "var(--text)" }}
                    >
                      LeetCode Knight (Rating: {card.rating})
                    </h4>

                    <p
                      className="mt-3 font-semibold"
                      style={{ color: "var(--gold)" }}
                    >
                      {card.solved}
                    </p>

                    <p
                      className="mt-3 leading-7"
                      style={{ color: "var(--muted)" }}
                    >
                      {card.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {card.profiles.map((profile) => (
                        <a
                          key={profile.name}
                          href={profile.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:border-[#ff9d00]"
                          style={{
                            borderColor: "var(--border)",
                            background: "var(--surface-2)",
                            color: "var(--text)",
                          }}
                        >
                          <ExternalLink size={16} />
                          {profile.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Contest Achievement */}
                  <div
                    className="mt-8 border-l-2 pl-5"
                    style={{ borderColor: "var(--gold)" }}
                  >
                    <h4
                      className="font-bold"
                      style={{ color: "var(--text)" }}
                    >
                      {card.items[0][0]}
                    </h4>

                    <p
                      className="mt-2 text-sm font-semibold"
                      style={{ color: "var(--gold)" }}
                    >
                      {card.items[0][1]}
                    </p>

                    <p
                      className="mt-2 text-sm leading-6"
                      style={{ color: "var(--muted)" }}
                    >
                      {card.items[0][2]}
                    </p>
                  </div>
                </div>
              ) : (
                /* Other Cards */
                <div className="mt-6 space-y-7">
                  {card.items.map(([title, subtitle, description]) => (
                    <div
                      key={title}
                      className="border-l-2 pl-4"
                      style={{ borderColor: "var(--gold)" }}
                    >
                      <h4
                        className="font-bold"
                        style={{ color: "var(--text)" }}
                      >
                        {title}
                      </h4>

                      <p
                        className="mt-2 text-sm font-semibold"
                        style={{ color: "var(--gold)" }}
                      >
                        {subtitle}
                      </p>

                      <p
                        className="mt-2 text-sm leading-6"
                        style={{ color: "var(--muted)" }}
                      >
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Achievement Pills */}
<div className="mt-10 flex flex-wrap justify-center gap-3">
  {[
    {
      text: "500+ Problems Solved",
      icon: <CircleDot size={17} color="#ff9d00" />,
    },
    {
      text: "Multiple Hackathon Winner",
      icon: <Award size={17} color="#ff9d00" />,
    },
    {
      text: "Research Publications",
      icon: <BookOpen size={17} color="#ff9d00" />,
    },
    {
      text: "IEEE Technical Lead",
      icon: <Users size={17} color="#ff9d00" />,
    },
  ].map((item) => (
    <span
      key={item.text}
      className="flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 hover:border-[#ff9d00]"
      style={{
        background: "var(--surface-2)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
    >
      {item.icon}
      {item.text}
    </span>
  ))}
</div>
</div>
</section>
  );
}