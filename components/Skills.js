import {
  Code2,
  Layers,
  Wrench,
  Database,
  Zap,
  Brain,
  Cloud,
  Lightbulb,
} from "lucide-react";


/* =====================================================
   SKILL GROUPS
===================================================== */

const groups = {
  Languages: [
    "C++",
    "C",
    "Java",
    "JavaScript",
    "Python",
    "SQL",
    "HTML5",
    "CSS3",
  ],

  "Libraries / Frameworks": [
    "React.js",
    "Next.js",
    "Node.js",
    "React Native",
    "Express.js",
    "FastAPI",
    "OpenCV",
  ],

  "Tools / Technologies": [
    "Linux",
    "REST API",
    "Jupyter Notebook",
    "VS Code",
    "AWS",
    "Tailwind CSS",
    "Git & GitHub",
  ],

  Databases: [
    "MySQL",
    "MongoDB",
    "Redis",
    "Firebase",
    "Appwrite",
  ],
};


/* =====================================================
   EXPERTISE AREAS
===================================================== */

const expertise = [
  {
    icon: Zap,
    name: "Full Stack Development",
    value: 90,
  },

  {
    icon: Brain,
    name: "AI / ML",
    value: 85,
  },

  {
    icon: Cloud,
    name: "Cloud Computing",
    value: 80,
  },

  {
    icon: Lightbulb,
    name: "Problem Solving",
    value: 95,
  },
];


/* =====================================================
   CATEGORY ICONS
===================================================== */

const groupIcons = {
  Languages: Code2,
  "Libraries / Frameworks": Layers,
  "Tools / Technologies": Wrench,
  Databases: Database,
};


/* =====================================================
   SKILLS COMPONENT
===================================================== */

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 transition-all duration-300"
    >
      <div className="container">

        {/* =================================================
            MAIN HEADING
        ================================================= */}

        <h2 className="section-title">
          Technical Arsenal
        </h2>

        <p className="section-subtitle">
          Technologies and tools I use to build modern,
          scalable, and AI-powered applications.
        </p>


        {/* =================================================
            EXPERTISE AREAS
        ================================================= */}

        <h3
          className="mt-16 text-center text-2xl font-bold"
          style={{
            color: "var(--text)",
          }}
        >
          Expertise Areas
        </h3>


        <div
          className="
            mx-auto
            mt-8
            grid
            max-w-3xl
            gap-6
            sm:grid-cols-2
          "
        >

          {expertise.map(
            ({ icon: Icon, name, value }) => (

              <div
                key={name}
                className="
                  group
                  rounded-2xl
                  border
                  p-6
                  transition-all
                  duration-300
                  ease-in-out
                  hover:-translate-y-1
                "
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  boxShadow: "0 12px 30px var(--shadow)",
                }}
              >

                {/* Title + Percentage */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    text-sm
                    font-bold
                  "
                  style={{
                    color: "var(--text)",
                  }}
                >

                  <span className="flex items-center gap-3">

                    {/* STATIC ICON */}

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                      "
                      style={{
                        background:
                          "rgba(255,157,0,0.12)",
                        color: "var(--gold)",
                      }}
                    >

                      <Icon
                        size={20}
                        strokeWidth={2}
                      />

                    </span>

                    {name}

                  </span>


                  {/* Percentage */}

                  <span
                    style={{
                      color: "var(--gold)",
                    }}
                  >
                    {value}%
                  </span>

                </div>


                {/* Progress Bar Background */}

                <div
                  className="
                    mt-5
                    h-2
                    overflow-hidden
                    rounded-full
                  "
                  style={{
                    background: "var(--border)",
                  }}
                >

                  {/* Progress */}

                  <div
                    className="
                      h-full
                      rounded-full
                      transition-all
                      duration-700
                    "
                    style={{
                      width: `${value}%`,
                      background: "var(--gold)",
                    }}
                  />

                </div>

              </div>

            )
          )}

        </div>


        {/* =================================================
            SKILL CATEGORY CARDS
        ================================================= */}

        <div
          className="
            mt-14
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {Object.entries(groups).map(
            ([title, items]) => {

              const Icon = groupIcons[title];

              return (

                <div
                  key={title}

                  className="
                    group
                    rounded-2xl
                    border
                    p-6

                    transition-all
                    duration-300
                    ease-in-out

                    hover:-translate-y-1

                    hover:!border-[#ff9d00]

                    hover:shadow-[0_0_25px_rgba(255,157,0,0.12)]
                  "

                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                    boxShadow:
                      "0 12px 30px var(--shadow)",
                  }}
                >

                  {/* =================================================
                      CATEGORY ICON
                  ================================================= */}

                  <div
                    className="
                      mx-auto
                      mb-5

                      flex
                      h-12
                      w-12
                      items-center
                      justify-center

                      rounded-full

                      transition-all
                      duration-500
                      ease-in-out

                      group-hover:scale-110
                    "
                    style={{
                      background: "var(--gold)",
                      color: "#000",
                    }}
                  >

                    <Icon
                      size={24}
                      strokeWidth={2}

                      className="
                        transition-transform
                        duration-700
                        ease-in-out

                        group-hover:rotate-[360deg]
                      "
                    />

                  </div>


                  {/* =================================================
                      CATEGORY TITLE
                  ================================================= */}

                  <h4
                    className="
                      text-center
                      text-lg
                      font-bold

                      transition-colors
                      duration-300

                      group-hover:text-[#ff9d00]
                    "
                    style={{
                      color: "var(--text)",
                    }}
                  >
                    {title}
                  </h4>


                  {/* =================================================
                      SKILL BADGES
                  ================================================= */}

                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      justify-center
                      gap-2
                    "
                  >

                    {items.map((item) => (

                      <span
                        key={item}

                        className="
                          rounded-full
                          border
                          px-3
                          py-2
                          text-xs
                          font-semibold

                          transition-all
                          duration-300
                          ease-in-out

                          hover:-translate-y-0.5

                          hover:!border-[#ff9d00]

                          hover:text-[#ff9d00]

                          hover:shadow-[0_0_8px_rgba(255,157,0,0.08)]
                        "

                        style={{
                          background:
                            "var(--surface-2)",
                          borderColor:
                            "var(--border)",
                          color: "var(--text)",
                        }}
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </div>

              );
            }
          )}

        </div>

      </div>
    </section>
  );
}