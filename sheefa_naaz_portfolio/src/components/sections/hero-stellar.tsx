"use client";

import { useEffect, useState, useRef } from "react";

const ROLES = [
  "Full-Stack Engineer",
  "System Architect",
  "Performance Engineer",
  "Open Source Contributor",
];

const SKILLS = [
  { name: "React / Next.js", level: 92 },
  { name: "Node.js / Go", level: 85 },
  { name: "System Design", level: 88 },
  { name: "Cloud / DevOps", level: 80 },
];

const STATS = [
  { value: "2+", label: "Years Building", sub: "production systems" },
  { value: "1500+", label: "Enterprise Users", sub: "served daily" },
  { value: "5+", label: "Products Shipped", sub: "end-to-end" },
];

const TIMELINE = [
  { year: "2024", role: "Senior SWE", company: "Scale Corp", color: "#10b981" },
  {
    year: "2023",
    role: "Full-Stack Dev",
    company: "StartupXYZ",
    color: "#06b6d4",
  },
  { year: "2022", role: "SWE Intern", company: "TechBase", color: "#8b5cf6" },
];

export default function HeroStellar() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let i = typing ? 0 : role.length;
    const interval = setInterval(
      () => {
        if (typing) {
          setDisplayed(role.slice(0, i + 1));
          i++;
          if (i === role.length) {
            clearInterval(interval);
            setTimeout(() => setTyping(false), 1800);
          }
        } else {
          setDisplayed(role.slice(0, i - 1));
          i--;
          if (i === 0) {
            clearInterval(interval);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
            setTyping(true);
          }
        }
      },
      typing ? 60 : 35,
    );
    return () => clearInterval(interval);
  }, [roleIndex, typing]);

  useEffect(() => {
    const handleMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const s = {
    hero: {
      position: "relative",
      minHeight: "100vh",
      background: "#0a0a0f",
      overflow: "hidden",
      fontFamily: "'DM Mono', 'Fira Code', monospace",
      color: "#e2e8f0",
    },
    // Dot grid background
    dotGrid: {
      position: "absolute",
      inset: 0,
      backgroundImage:
        "radial-gradient(circle, rgba(16,185,129,0.18) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
      zIndex: 0,
    },
    // Mouse-follow glow
    glow: {
      position: "absolute",
      width: 600,
      height: 600,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
      transform: "translate(-50%, -50%)",
      left: mousePos.x,
      top: mousePos.y,
      zIndex: 0,
      pointerEvents: "none",
      transition: "left 0.15s ease, top 0.15s ease",
    },
    // Corner accent lines
    cornerTL: {
      position: "absolute",
      top: 24,
      left: 24,
      width: 48,
      height: 48,
      borderTop: "2px solid #10b981",
      borderLeft: "2px solid #10b981",
      zIndex: 2,
    },
    cornerBR: {
      position: "absolute",
      bottom: 24,
      right: 24,
      width: 48,
      height: 48,
      borderBottom: "2px solid #10b981",
      borderRight: "2px solid #10b981",
      zIndex: 2,
    },
    // Main layout
    wrapper: {
      position: "relative",
      zIndex: 1,
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 32px",
      display: "grid",
      gridTemplateColumns: "1fr 400px",
      gap: 64,
      alignItems: "center",
      minHeight: "100vh",
    },
    // LEFT column
    left: {
      paddingTop: 80,
      paddingBottom: 80,
      opacity: loaded ? 1 : 0,
      transform: loaded ? "translateY(0)" : "translateY(32px)",
      transition: "opacity 0.8s ease, transform 0.8s ease",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 14px",
      background: "rgba(16,185,129,0.08)",
      border: "1px solid rgba(16,185,129,0.3)",
      borderRadius: 4,
      fontSize: 12,
      letterSpacing: "0.12em",
      color: "#10b981",
      textTransform: "uppercase",
      marginBottom: 32,
    },
    dot: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "#10b981",
      animation: "pulse 2s infinite",
    },
    name: {
      fontSize: "clamp(44px, 6vw, 72px)",
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
      marginBottom: 8,
      fontFamily: "'Space Grotesk', 'DM Sans', sans-serif",
      background:
        "linear-gradient(135deg, #f0fdf4 0%, #a7f3d0 50%, #10b981 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    roleRow: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 28,
      height: 36,
    },
    roleLabel: {
      fontSize: 13,
      color: "#64748b",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    roleText: {
      fontSize: 20,
      color: "#06b6d4",
      fontFamily: "'DM Mono', monospace",
      fontWeight: 500,
    },
    cursor: {
      display: "inline-block",
      width: 2,
      height: 22,
      background: "#06b6d4",
      marginLeft: 3,
      verticalAlign: "middle",
      animation: "blink 1s step-end infinite",
    },
    tagline: {
      fontSize: 16,
      lineHeight: 1.75,
      color: "#94a3b8",
      maxWidth: 500,
      marginBottom: 40,
    },
    statsRow: {
      display: "flex",
      gap: 40,
      marginBottom: 48,
      paddingTop: 8,
      borderTop: "1px solid rgba(255,255,255,0.06)",
      paddingTop: 32,
    },
    stat: {
      display: "flex",
      flexDirection: "column",
    },
    statVal: {
      fontSize: 36,
      fontWeight: 700,
      color: "#10b981",
      lineHeight: 1,
      fontFamily: "'Space Grotesk', sans-serif",
    },
    statLabel: {
      fontSize: 13,
      color: "#e2e8f0",
      fontWeight: 500,
      marginTop: 4,
    },
    statSub: {
      fontSize: 11,
      color: "#475569",
      marginTop: 2,
      letterSpacing: "0.05em",
    },
    ctaRow: {
      display: "flex",
      gap: 16,
      marginBottom: 40,
      flexWrap: "wrap",
    },
    btnPrimary: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 28px",
      background: "#10b981",
      color: "#0a0a0f",
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      borderRadius: 4,
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s ease",
      textDecoration: "none",
    },
    btnSecondary: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "13px 28px",
      background: "transparent",
      color: "#e2e8f0",
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      borderRadius: 4,
      border: "1px solid rgba(255,255,255,0.15)",
      cursor: "pointer",
      transition: "all 0.2s ease",
      textDecoration: "none",
    },
    socialRow: {
      display: "flex",
      alignItems: "center",
      gap: 12,
    },
    socialLink: {
      width: 40,
      height: 40,
      borderRadius: 4,
      border: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#64748b",
      textDecoration: "none",
      fontSize: 16,
      transition: "all 0.2s ease",
      background: "rgba(255,255,255,0.02)",
    },
    divider: {
      width: 1,
      height: 24,
      background: "rgba(255,255,255,0.08)",
      margin: "0 4px",
    },
    availability: {
      fontSize: 12,
      color: "#64748b",
      letterSpacing: "0.06em",
    },
    // RIGHT column — panel
    right: {
      paddingTop: 80,
      paddingBottom: 80,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      opacity: loaded ? 1 : 0,
      transform: loaded ? "translateX(0)" : "translateX(32px)",
      transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
    },
    panel: {
      background: "rgba(255,255,255,0.025)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 8,
      padding: "20px 24px",
    },
    panelLabel: {
      fontSize: 10,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "#475569",
      marginBottom: 16,
      display: "flex",
      alignItems: "center",
      gap: 8,
    },
    panelLine: {
      flex: 1,
      height: 1,
      background: "rgba(255,255,255,0.05)",
    },
    skillRow: {
      marginBottom: 14,
      cursor: "default",
    },
    skillHeader: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6,
      fontSize: 13,
      color: "#cbd5e1",
    },
    skillPct: {
      color: "#10b981",
      fontFamily: "'DM Mono', monospace",
    },
    skillTrack: {
      height: 3,
      background: "rgba(255,255,255,0.06)",
      borderRadius: 2,
      overflow: "hidden",
    },
    skillFill: (pct, active) => ({
      height: "100%",
      width: loaded ? `${pct}%` : "0%",
      background: active
        ? "linear-gradient(90deg, #06b6d4, #10b981)"
        : "linear-gradient(90deg, #10b981, #a7f3d0)",
      borderRadius: 2,
      transition: `width 1.2s cubic-bezier(0.22, 1, 0.36, 1)`,
    }),
    // Timeline
    timelineItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: 16,
      marginBottom: 16,
    },
    timelineDot: (color) => ({
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: color,
      marginTop: 4,
      flexShrink: 0,
      boxShadow: `0 0 8px ${color}66`,
    }),
    timelineContent: {
      flex: 1,
    },
    timelineRole: {
      fontSize: 14,
      fontWeight: 600,
      color: "#e2e8f0",
      lineHeight: 1.4,
    },
    timelineMeta: {
      fontSize: 12,
      color: "#64748b",
      marginTop: 2,
    },
    // Code snippet
    codeBlock: {
      background: "#050508",
      border: "1px solid rgba(16,185,129,0.15)",
      borderRadius: 6,
      padding: "16px 20px",
      fontFamily: "'DM Mono', 'Fira Code', monospace",
      fontSize: 12,
      lineHeight: 1.8,
    },
    // Scroll indicator
    scroll: {
      position: "absolute",
      bottom: 36,
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      zIndex: 2,
      opacity: 0.4,
    },
    scrollText: {
      fontSize: 10,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "#64748b",
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.85)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scrollBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        .hero-btn-primary:hover { background: #059669 !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(16,185,129,0.35); }
        .hero-btn-secondary:hover { border-color: rgba(255,255,255,0.3) !important; background: rgba(255,255,255,0.04) !important; }
        .social-link:hover { border-color: rgba(16,185,129,0.4) !important; color: #10b981 !important; background: rgba(16,185,129,0.06) !important; }
        .skill-row:hover .skill-label { color: #10b981; }
      `}</style>

      <section style={s.hero} ref={heroRef}>
        {/* Dot grid */}
        <div style={s.dotGrid} />
        {/* Mouse glow */}
        <div style={s.glow} />
        {/* Corner accents */}
        <div style={s.cornerTL} />
        <div style={s.cornerBR} />

        {/* Top nav bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 40px",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
            background: "rgba(10,10,15,0.7)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 13,
              color: "#10b981",
              letterSpacing: "0.08em",
            }}
          >
            <span style={{ color: "#475569" }}>{"// "}</span>sheefanaaz.dev
          </div>
          <div
            style={{
              display: "flex",
              gap: 28,
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {["Work", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "#64748b",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#10b981")}
                onMouseLeave={(e) => (e.target.style.color = "#64748b")}
              >
                {item}
              </a>
            ))}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#475569",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            <span style={{ color: "#10b981" }}>●</span> Open to work
          </div>
        </div>

        {/* Main grid */}
        <div style={s.wrapper}>
          {/* LEFT */}
          <div style={s.left}>
            {/* Badge */}
            <div style={s.badge}>
              <div style={s.dot} />
              Available for Senior / Staff Roles
            </div>

            {/* Name */}
            <h1 style={s.name}>Sheefa Naaz</h1>

            {/* Typed role */}
            <div style={s.roleRow}>
              <span style={s.roleLabel}>I am a</span>
              <span style={s.roleText}>
                {displayed}
                <span style={s.cursor} />
              </span>
            </div>

            {/* Tagline */}
            <p style={s.tagline}>
              I build systems that scale. Obsessed with performance, clean
              architecture, and shipping products that real users love — from
              greenfield MVPs to enterprise-grade platforms.
            </p>

            {/* Stats */}
            <div style={s.statsRow}>
              {STATS.map((st) => (
                <div key={st.label} style={s.stat}>
                  <span style={s.statVal}>{st.value}</span>
                  <span style={s.statLabel}>{st.label}</span>
                  <span style={s.statSub}>{st.sub}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={s.ctaRow}>
              <a
                href="#projects"
                className="hero-btn-primary"
                style={s.btnPrimary}
              >
                View My Work
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="mailto:sheefanaaz@example.com"
                className="hero-btn-secondary"
                style={s.btnSecondary}
              >
                Download Resume
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
            </div>

            {/* Socials */}
            <div style={s.socialRow}>
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/sheefanaaz123",
                  icon: (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/sheefanaaz",
                  icon: (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: "Email",
                  href: "mailto:sheefanaaz@example.com",
                  icon: (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 7l10 7 10-7" />
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={s.socialLink}
                  title={label}
                >
                  {icon}
                </a>
              ))}
              <div style={s.divider} />
              <span style={s.availability}>Connect with me</span>
            </div>
          </div>

          {/* RIGHT */}
          <div style={s.right}>
            {/* Skills panel */}
            <div style={s.panel}>
              <div style={s.panelLabel}>
                Core Skills <div style={s.panelLine} />
              </div>
              {SKILLS.map((sk, i) => (
                <div
                  key={sk.name}
                  className="skill-row"
                  style={{
                    ...s.skillRow,
                    marginBottom: i === SKILLS.length - 1 ? 0 : 14,
                  }}
                  onMouseEnter={() => setActiveSkill(i)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div style={s.skillHeader}>
                    <span
                      className="skill-label"
                      style={{ transition: "color 0.2s" }}
                    >
                      {sk.name}
                    </span>
                    <span style={s.skillPct}>{sk.level}%</span>
                  </div>
                  <div style={s.skillTrack}>
                    <div style={s.skillFill(sk.level, activeSkill === i)} />
                  </div>
                </div>
              ))}
            </div>

            {/* Code snippet */}
            <div style={s.codeBlock}>
              <div style={{ color: "#475569", marginBottom: 4 }}>
                // philosophy.js
              </div>
              <div>
                <span style={{ color: "#06b6d4" }}>const</span>
                <span style={{ color: "#e2e8f0" }}> engineer</span>
                <span style={{ color: "#64748b" }}> = {"{"}</span>
              </div>
              <div style={{ paddingLeft: 16 }}>
                <div>
                  <span style={{ color: "#94a3b8" }}>approach</span>
                  <span style={{ color: "#64748b" }}>: </span>
                  <span style={{ color: "#10b981" }}>
                    'solve the right problem'
                  </span>
                  <span style={{ color: "#64748b" }}>,</span>
                </div>
                <div>
                  <span style={{ color: "#94a3b8" }}>values</span>
                  <span style={{ color: "#64748b" }}>: </span>
                  <span style={{ color: "#10b981" }}>
                    'clarity over cleverness'
                  </span>
                  <span style={{ color: "#64748b" }}>,</span>
                </div>
                <div>
                  <span style={{ color: "#94a3b8" }}>output</span>
                  <span style={{ color: "#64748b" }}>: </span>
                  <span style={{ color: "#10b981" }}>'ships, not slides'</span>
                  <span style={{ color: "#64748b" }}>,</span>
                </div>
              </div>
              <div>
                <span style={{ color: "#64748b" }}>{"}"}</span>
              </div>
              <div style={{ marginTop: 8, color: "#8b5cf6" }}>
                export default engineer;
              </div>
            </div>

            {/* Timeline panel */}
            <div style={s.panel}>
              <div style={s.panelLabel}>
                Experience <div style={s.panelLine} />
              </div>
              {TIMELINE.map((t, i) => (
                <div
                  key={t.year}
                  style={{
                    ...s.timelineItem,
                    marginBottom: i === TIMELINE.length - 1 ? 0 : 16,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 0,
                    }}
                  >
                    <div style={s.timelineDot(t.color)} />
                    {i < TIMELINE.length - 1 && (
                      <div
                        style={{
                          width: 1,
                          flex: 1,
                          background: "rgba(255,255,255,0.05)",
                          marginTop: 4,
                          minHeight: 24,
                        }}
                      />
                    )}
                  </div>
                  <div style={s.timelineContent}>
                    <div style={s.timelineRole}>{t.role}</div>
                    <div style={s.timelineMeta}>
                      {t.company} · {t.year}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#475569",
                      letterSpacing: "0.08em",
                      paddingTop: 2,
                    }}
                  >
                    {t.year}
                  </div>
                </div>
              ))}
            </div>

            {/* Open to work chip */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 20px",
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.2)",
                borderRadius: 8,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#10b981",
                    animation: "pulse 2s infinite",
                  }}
                />
                <span
                  style={{ fontSize: 13, color: "#e2e8f0", fontWeight: 500 }}
                >
                  Open to opportunities
                </span>
              </div>
              <span
                style={{
                  fontSize: 11,
                  color: "#10b981",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                Full-time · Remote
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={s.scroll}>
          <span style={s.scrollText}>Scroll</span>
          <div style={{ animation: "scrollBounce 2s ease-in-out infinite" }}>
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
              <rect
                x="1"
                y="1"
                width="12"
                height="18"
                rx="6"
                stroke="#475569"
                strokeWidth="1.5"
              />
              <circle cx="7" cy="6" r="2" fill="#10b981" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
