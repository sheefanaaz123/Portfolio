"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Code2, Database, Layers, FlaskConical } from "lucide-react";
import { useRef } from "react";

const SkillsStellarEnhanced = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  // Real skills from resume — prioritized by JD relevance
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Core",
      color: "from-emerald-500 to-teal-500",
      badge: "Primary Stack",
      skills: [
        { name: "React.js", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "JavaScript (ES6+)", level: "Expert" },
        { name: "HTML5 & CSS3", level: "Expert" },
        { name: "Redux Toolkit", level: "Advanced" },
        { name: "Redux-Saga", level: "Advanced" },
      ],
    },
    {
      icon: Layers,
      title: "UI & Visualization",
      color: "from-cyan-500 to-blue-500",
      badge: "Design Systems",
      skills: [
        { name: "Apache ECharts", level: "Advanced" },
        { name: "Ant Design (AntD)", level: "Advanced" },
        { name: "Material UI", level: "Advanced" },
        { name: "Responsive Design", level: "Expert" },
        { name: "Figma Collaboration", level: "Intermediate" },
        { name: "Data Dashboards", level: "Advanced" },
      ],
    },
    {
      icon: Database,
      title: "Backend & Integration",
      color: "from-teal-500 to-green-500",
      badge: "API Layer",
      skills: [
        { name: "REST API Integration", level: "Expert" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Flask (Python)", level: "Intermediate" },
        { name: "Async Data Fetching", level: "Advanced" },
        { name: "Caching Strategies", level: "Advanced" },
        { name: "JWT Authentication", level: "Intermediate" },
      ],
    },
    {
      icon: FlaskConical,
      title: "Testing & DevOps",
      color: "from-emerald-400 to-cyan-400",
      badge: "Quality & Delivery",
      skills: [
        { name: "Jest", level: "Advanced" },
        { name: "React Testing Library", level: "Advanced" },
        { name: "Git & GitHub", level: "Expert" },
        { name: "CI/CD Pipelines", level: "Intermediate" },
        { name: "Webpack & Bundling", level: "Advanced" },
        { name: "Performance Profiling", level: "Advanced" },
      ],
    },
  ];

  const levelColor: Record<string, string> = {
    Expert: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    Advanced: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    Intermediate: "text-muted-foreground bg-muted/30 border-border",
  };

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 mb-16"
        >
          <motion.div
            className="flex items-center gap-3"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            />
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
              Technical Skills
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl font-display font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            What I <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Build With
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            2+ years of production experience building enterprise React +
            TypeScript applications for 1,500+ users at HighRadius.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const cardRef = useRef(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start 0.85", "center 0.4"],
            });

            const scale = useTransform(cardProgress, [0, 1], [0.92, 1]);
            const opacity = useTransform(cardProgress, [0, 1], [0, 1]);

            return (
              <motion.div
                key={idx}
                ref={cardRef}
                style={{ scale, opacity }}
                className="group relative"
              >
                <motion.div
                  className="relative p-7 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent hover:border-emerald-500/40 transition-all duration-200"
                  whileHover={{ y: -4 }}
                >
                  {/* Hover glow */}
                  <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/8 via-transparent to-teal-500/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Header */}
                  <div className="flex items-center justify-between mb-5 relative z-10">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} p-2.5 flex items-center justify-center text-white shadow-md`}
                      >
                        <Icon size={20} />
                      </motion.div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full border border-emerald-500/20 text-emerald-400/70 bg-emerald-500/5 font-mono">
                      {category.badge}
                    </span>
                  </div>

                  {/* Skills with proficiency badges */}
                  <div className="space-y-2.5 relative z-10">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.2 + idx * 0.05 + i * 0.04,
                          duration: 0.35,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between group/item"
                      >
                        <div className="flex items-center gap-2.5">
                          <motion.div
                            className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex-shrink-0"
                            whileHover={{ scale: 2 }}
                          />
                          <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full border font-mono ${levelColor[skill.level]}`}
                        >
                          {skill.level}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Production experience banner — key credibility signal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            {
              stat: "9%",
              label: "Bundle size reduction",
              sub: "via Webpack optimization",
            },
            {
              stat: "35%",
              label: "Fewer API calls",
              sub: "via caching + debouncing",
            },
            {
              stat: "React 16→18",
              label: "Migration led",
              sub: "test suite rewrite with RTL",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-center"
            >
              <div className="text-2xl font-bold text-emerald-400 mb-0.5">
                {item.stat}
              </div>
              <div className="text-sm font-medium text-foreground">
                {item.label}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Medium — Stellar Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 relative rounded-3xl border border-emerald-500/25 overflow-hidden"
        >
          {/* Rich layered background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/60 via-background to-teal-950/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,184,166,0.08),transparent_60%)]" />
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(52,211,153,1) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 p-8 md:p-10">
            {/* Top row: header + stats */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                {/* Medium wordmark-style badge */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <span className="text-white font-black text-xl tracking-tight">
                      M
                    </span>
                  </div>
                  {/* Live pulse */}
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-background flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping absolute" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-2xl font-bold text-foreground">
                      Writing on Medium
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">
                    @sheefanaaz6417 · Actively publishing
                  </p>
                </div>
              </div>

              {/* Follower stat */}
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">97</div>
                  <div className="text-xs text-muted-foreground">Followers</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">3d</div>
                  <div className="text-xs text-muted-foreground">
                    Last article
                  </div>
                </div>
              </div>
            </div>

            {/* Playlist CTA */}
            <motion.a
              href="https://medium.com/@sheefanaaz6417"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="group block mb-8"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="relative rounded-2xl border border-emerald-500/20 bg-background/40 backdrop-blur-sm overflow-hidden hover:border-emerald-500/50 transition-colors duration-200"
              >
                {/* Sweep shimmer on hover */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 p-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 flex flex-col items-center justify-center gap-1.5 group-hover:border-emerald-500/50 transition-colors">
                    {[16, 12, 16].map((w, i) => (
                      <div
                        key={i}
                        className="h-0.5 bg-emerald-400/50 rounded-full group-hover:bg-emerald-400 transition-all duration-300"
                        style={{ width: w }}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-xs text-emerald-400 font-mono uppercase tracking-widest mb-1">
                      Article Playlist
                    </p>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                      Data Structures and Algorithms Deep Dives
                    </h4>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      All articles by Sheefa Naaz · Updated regularly
                    </p>
                  </div>

                  {/* Arrow button */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white transition-all duration-200">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="group-hover:translate-x-0.5 transition-transform duration-150"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 p-6">
                  {/* Playlist lines icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 flex flex-col items-center justify-center gap-1.5 group-hover:border-emerald-500/50 transition-colors">
                    {[16, 12, 16].map((w, i) => (
                      <div
                        key={i}
                        className="h-0.5 bg-emerald-400/50 rounded-full group-hover:bg-emerald-400 transition-all duration-300"
                        style={{ width: w }}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-xs text-emerald-400 font-mono uppercase tracking-widest mb-1">
                      Article Playlist
                    </p>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                      System Design for Engineers
                    </h4>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      All articles by Sheefa Naaz · Updated regularly
                    </p>
                  </div>

                  {/* Arrow button */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white transition-all duration-200">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="group-hover:translate-x-0.5 transition-transform duration-150"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </motion.a>

            {/* Topic pills */}
            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures",
                "Algorithms",
                "LeetCode",
                "Frontend System Design",
                "React",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full border border-emerald-500/20 text-emerald-400/70 bg-emerald-500/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsStellarEnhanced;
