"use client";

import { useState, useRef, useEffect } from "react";

const EXPERIENCES = [
  {
    id: "01",
    title: "Software Development Engineer - I",
    company: "HighRadius Technologies",
    period: "Jul 2025 – Present",
    type: "Full-time",
    color: "#10b981",
    tag: "Current",
    metrics: [
      { value: "1500+", label: "Enterprise Users" },
      { value: "React + TS", label: "Frontend Stack" },
      { value: "ECharts", label: "Data Visualization" },
    ],
    achievements: [
      "Built scalable task-driven and workflow-oriented React + TypeScript interfaces for enterprise financial platforms, improving efficiency across multi-step business processes.",
      "Designed and implemented complex Redux Toolkit state management systems supporting role-based access, multi-module workflows, and dynamic UI states.",
      "Developed data-rich interfaces with advanced filtering, search, sorting, and prioritization capabilities for large enterprise datasets.",
      "Optimized performance of large-scale UI components and Apache ECharts visualizations, improving responsiveness for 1500+ enterprise users.",
      "Contributed to data-driven workflow and reporting systems that enhanced productivity across enterprise financial operations.",
      "Enhanced dashboard usability by developing a top-level Time Range filter using Ant Design with relative, real-time, and anchored date controls.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Ant Design",
      "Apache ECharts",
      "REST APIs",
      "Performance Optimization",
    ],
  },
  {
    id: "02",
    title: "Product Intern",
    company: "HighRadius Technologies",
    period: "May 2024 – Jun 2025",
    type: "Internship",
    color: "#06b6d4",
    tag: "Internship",
    metrics: [
      { value: "9%", label: "Bundle Reduction" },
      { value: "React 18", label: "Migration" },
      { value: "RTL", label: "Testing" },
    ],
    achievements: [
      "Migrated legacy test suites to React Testing Library during the React 16 → React 18 upgrade, improving reliability and maintainability.",
      "Reduced frontend bundle size by approximately 9% through dependency optimization and efficient asset management.",
      "Implemented asynchronous data fetching, caching strategies, and debounced API requests to improve responsiveness in data-heavy applications.",
      "Automated Excel report generation with persistent formatting, eliminating manual post-processing for enterprise users.",
      "Worked extensively with React, TypeScript, Redux Toolkit, and API-driven architectures to build scalable SaaS workflows.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Testing Library",
      "Jest",
      "Webpack",
      "REST APIs",
    ],
  },
];

const HIGHLIGHTS = [
  {
    icon: "⬡",
    value: "Hacktoberfest",
    label: "Open Source Contributor",
    color: "#10b981",
  },
  {
    icon: "◈",
    value: "1500+",
    label: "Enterprise Users Served",
    color: "#06b6d4",
  },
  { icon: "◆", value: "60%", label: "Performance Gain", color: "#8b5cf6" },
  { icon: "◉", value: "9.01 / 10", label: "Academic CGPA", color: "#f59e0b" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

function MetricPill({ value, label, color }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px 18px",
        background: `${color}0d`,
        border: `1px solid ${color}33`,
        borderRadius: 6,
        minWidth: 80,
      }}
    >
      <span
        style={{
          fontSize: 22,
          fontWeight: 700,
          color,
          fontFamily: "'DM Mono', monospace",
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: 10,
          color: "#64748b",
          marginTop: 4,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function ExperienceCard({ exp, index, isActive, onClick }) {
  const [cardRef, cardVisible] = useInView();

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      style={{
        opacity: cardVisible ? 1 : 0,
        transform: cardVisible ? "translateX(0)" : "translateX(-28px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
        cursor: "pointer",
      }}
    >
      {/* Card shell */}
      <div
        style={{
          position: "relative",
          background: isActive
            ? "rgba(255,255,255,0.035)"
            : "rgba(255,255,255,0.015)",
          border: `1px solid ${isActive ? exp.color + "55" : "rgba(255,255,255,0.07)"}`,
          borderRadius: 10,
          padding: "28px 32px",
          transition: "all 0.3s ease",
          overflow: "hidden",
        }}
      >
        {/* Left color bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: isActive ? 3 : 0,
            background: `linear-gradient(180deg, ${exp.color}, transparent)`,
            borderRadius: "10px 0 0 10px",
            transition: "width 0.3s ease",
          }}
        />

        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 20,
            gap: 16,
          }}
        >
          <div>
            {/* Index + tag */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  color: exp.color,
                  letterSpacing: "0.15em",
                }}
              >
                {exp.id}
              </span>
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "2px 8px",
                  background: `${exp.color}18`,
                  border: `1px solid ${exp.color}44`,
                  borderRadius: 4,
                  color: exp.color,
                }}
              >
                {exp.tag}
              </span>
            </div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#f1f5f9",
                lineHeight: 1.2,
                fontFamily: "'Syne', sans-serif",
                marginBottom: 4,
                transition: "color 0.2s",
              }}
            >
              {exp.title}
            </h3>
            <p
              style={{
                fontSize: 14,
                color: exp.color,
                fontWeight: 600,
                letterSpacing: "0.04em",
              }}
            >
              {exp.company}
            </p>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div
              style={{
                fontSize: 12,
                color: "#475569",
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.06em",
              }}
            >
              {exp.period}
            </div>
            <div
              style={{
                marginTop: 6,
                fontSize: 11,
                color: "#64748b",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {exp.type}
            </div>
          </div>
        </div>

        {/* Metrics row */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 24,
            flexWrap: "wrap",
          }}
        >
          {exp.metrics.map((m) => (
            <MetricPill
              key={m.label}
              value={m.value}
              label={m.label}
              color={exp.color}
            />
          ))}
        </div>

        {/* Achievements — expand on active */}
        <div
          style={{
            maxHeight: isActive ? 600 : 0,
            overflow: "hidden",
            transition: "max-height 0.5s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: 20,
              marginBottom: 20,
            }}
          >
            {exp.achievements.map((a, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  marginBottom: 12,
                  alignItems: "flex-start",
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateX(0)" : "translateX(-8px)",
                  transition: `opacity 0.4s ease ${0.1 + i * 0.06}s, transform 0.4s ease ${0.1 + i * 0.06}s`,
                }}
              >
                <span
                  style={{
                    color: exp.color,
                    fontSize: 14,
                    lineHeight: 1.7,
                    flexShrink: 0,
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  →
                </span>
                <span
                  style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7 }}
                >
                  {a}
                </span>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {exp.skills.map((sk) => (
              <span
                key={sk}
                style={{
                  fontSize: 11,
                  color: exp.color,
                  padding: "4px 12px",
                  background: `${exp.color}10`,
                  border: `1px solid ${exp.color}30`,
                  borderRadius: 4,
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.06em",
                }}
              >
                {sk}
              </span>
            ))}
          </div>
        </div>

        {/* Collapsed hint */}
        {!isActive && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12,
              color: "#475569",
              fontFamily: "'DM Mono', monospace",
              marginTop: 4,
            }}
          >
            <span style={{ color: exp.color }}>+</span> Click to expand{" "}
            {exp.achievements.length} achievements
          </div>
        )}
      </div>
    </div>
  );
}

export default function ExperienceStellar() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [headerRef, headerVisible] = useInView();
  const [hlRef, hlVisible] = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Mono:wght@400;500&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
      `}</style>

      <section
        id="experience"
        style={{
          background: "#0a0a0f",
          padding: "100px 0",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'DM Mono', monospace",
          color: "#e2e8f0",
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(16,185,129,0.10) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }}
        />

        {/* Scanline accent */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)",
            animation: "scanline 8s linear infinite",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 32px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* ── Section header ── */}
          <div
            ref={headerRef}
            style={{
              marginBottom: 64,
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <div style={{ width: 40, height: 2, background: "#10b981" }} />
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#10b981",
                }}
              >
                Professional Journey
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 60px)",
                fontWeight: 800,
                lineHeight: 1.05,
                fontFamily: "'Syne', sans-serif",
                color: "#f1f5f9",
                marginBottom: 8,
              }}
            >
              Experience &{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #10b981, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Achievements
              </span>
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#475569",
                maxWidth: 480,
                lineHeight: 1.7,
              }}
            >
              Click a role to see the full impact breakdown — metrics,
              accomplishments, and tech stack.
            </p>
          </div>

          {/* ── Two-column layout: timeline + cards ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "48px 1fr",
              gap: 0,
              marginBottom: 80,
            }}
          >
            {/* Timeline rail */}
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {EXPERIENCES.map((exp, i) => (
                <div
                  key={exp.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flex: i < EXPERIENCES.length - 1 ? 1 : "none",
                  }}
                >
                  {/* Node */}
                  <div
                    onClick={() => setActiveIdx(i)}
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: activeIdx === i ? exp.color : "#1e293b",
                      border: `2px solid ${exp.color}`,
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      boxShadow:
                        activeIdx === i ? `0 0 14px ${exp.color}88` : "none",
                      zIndex: 1,
                      marginTop: 32,
                    }}
                  />
                  {/* Connector line */}
                  {i < EXPERIENCES.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        width: 1,
                        background: "rgba(255,255,255,0.07)",
                        marginTop: 8,
                        minHeight: 40,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Cards column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {EXPERIENCES.map((exp, i) => (
                <ExperienceCard
                  key={exp.id}
                  exp={exp}
                  index={i}
                  isActive={activeIdx === i}
                  onClick={() => setActiveIdx(activeIdx === i ? -1 : i)}
                />
              ))}
            </div>
          </div>

          {/* ── Highlights grid ── */}
          <div
            ref={hlRef}
            style={{
              opacity: hlVisible ? 1 : 0,
              transform: hlVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            {/* Label row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 24,
              }}
            >
              <div style={{ width: 24, height: 2, background: "#10b981" }} />
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#475569",
                }}
              >
                Key Highlights
              </span>
              <div
                style={{
                  flex: 1,
                  height: 1,
                  background: "rgba(255,255,255,0.05)",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 16,
              }}
            >
              {HIGHLIGHTS.map((hl, i) => (
                <div
                  key={hl.label}
                  style={{
                    padding: "22px 24px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 8,
                    position: "relative",
                    overflow: "hidden",
                    opacity: hlVisible ? 1 : 0,
                    transform: hlVisible ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.5s ease ${0.3 + i * 0.08}s, transform 0.5s ease ${0.3 + i * 0.08}s`,
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = `1px solid ${hl.color}44`;
                    e.currentTarget.style.background = `${hl.color}08`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border =
                      "1px solid rgba(255,255,255,0.07)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  {/* Corner glyph */}
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 18,
                      fontSize: 20,
                      color: `${hl.color}30`,
                      fontFamily: "monospace",
                    }}
                  >
                    {hl.icon}
                  </div>

                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: hl.color,
                      fontFamily: "'Syne', sans-serif",
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {hl.value}
                  </div>

                  <div
                    style={{
                      fontSize: 13,
                      color: "#cbd5e1",
                      fontWeight: 500,
                      marginBottom: 2,
                      fontFamily: "sans-serif",
                    }}
                  >
                    {hl.label}
                  </div>

                  {/* Bottom accent line */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: `linear-gradient(90deg, ${hl.color}55, transparent)`,
                      borderRadius: "0 0 8px 8px",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
