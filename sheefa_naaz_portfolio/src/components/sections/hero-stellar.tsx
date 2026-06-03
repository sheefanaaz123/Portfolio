"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { StatsFs } from "node:fs";

const ROLES = [
  "Full-Stack Engineer",
  "System Architect",
  "Performance Engineer",
  "Open Source Contributor",
];

const SKILLS = [
  { name: "React / Next.js", level: 92 },
  { name: "Node.js / Go", level: 85 },
  { name: "Python / Flask", level: 88 },
  { name: "Cloud / DevOps", level: 80 },
];

const STATS = [
  { value: "2", label: "Years Building", sub: "production systems" },
  { value: "1500", label: "Enterprise Users", sub: "served daily" },
  { value: "3", label: "Products Shipped", sub: "end-to-end" },
];

const TIMELINE = [
  {
    year: "July 2025 - Present",
    role: "Software Development Engineer 1",
    company: "HighRadius Technologies Pvt. Ltd.",
    color: "#10b981",
  },
  {
    year: "May 2024 - June 2025",
    role: "Product Intern",
    company: "HighRadius Technologies Pvt. Ltd.",
    color: "#06b6d4",
  },
  // { year: "2022", role: "SWE Intern", company: "TechBase", color: "#8b5cf6" },
];

// Stagger container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Item variants for staggered animations
const itemVariants: any = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
    },
  },
};

// Blur in effect
const blurInVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Floating animation
const floatVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  float: {
    y: [-8, 8, -8],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Gradient text animation
const gradientVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

// Scale on hover
const scaleHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

// Counter component
function Counter({ end, duration = 2 }: { end: any; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [end, duration]);

  return <span>{count}</span>;
}

// Morphing background shape
function MorphingShape() {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
    >
      {/* Morphing blob 1 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)",
          top: "-10%",
          left: "-5%",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Morphing blob 2 */}
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)",
          bottom: "-10%",
          right: "-5%",
          filter: "blur(50px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Morphing blob 3 */}
      <motion.div
        className="absolute w-72 h-72 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
          top: "50%",
          right: "10%",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </motion.div>
  );
}

// Animated gradient text
function GradientText({ children }: { children: string }) {
  return (
    <motion.span
      variants={gradientVariants}
      className="inline-block"
      style={{
        background:
          "linear-gradient(135deg, #f0fdf4 0%, #a7f3d0 50%, #10b981 100%)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      animate={{
        backgroundPosition: ["0% center", "100% center", "0% center"],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}

// Typing animation
function TypedText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let index = isTyping ? displayedText.length : displayedText.length - 1;

    const timer = setInterval(
      () => {
        if (isTyping) {
          if (index < role.length) {
            setDisplayedText(role.slice(0, index + 1));
            index++;
          } else {
            setTimeout(() => setIsTyping(false), 1500);
          }
        } else {
          if (index > 0) {
            setDisplayedText(role.slice(0, index));
            index--;
          } else {
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
            setIsTyping(true);
          }
        }
      },
      isTyping ? 50 : 30,
    );

    return () => clearInterval(timer);
  }, [roleIndex, displayedText, isTyping]);

  return (
    <motion.div variants={itemVariants} className="flex items-center gap-2 h-9">
      <span className="text-sm text-slate-500 uppercase tracking-wider">
        I am a
      </span>
      <motion.span
        className="text-xl font-medium text-cyan-400 font-mono"
        animate={{
          textShadow: [
            "0 0 0px rgba(6,182,212,0)",
            "0 0 12px rgba(6,182,212,0.6)",
            "0 0 0px rgba(6,182,212,0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {displayedText}
        <motion.span
          className="inline-block w-0.5 h-5 ml-1 bg-cyan-400"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </motion.span>
    </motion.div>
  );
}

// Animated button
interface AnimatedButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

function AnimatedButton({
  href,
  variant = "primary",
  children,
  icon,
}: AnimatedButtonProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.a
      href={href}
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -3 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      className={`inline-flex items-center gap-2 px-7 py-3 rounded-md font-bold text-sm uppercase tracking-wide transition-all ${
        variant === "primary"
          ? "bg-emerald-500 text-black hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/40"
          : "border border-white/15 text-white hover:border-white/30 hover:bg-white/5"
      }`}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background on hover */}
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600"
          initial={{ x: "-100%" }}
          animate={isHovering ? { x: "100%" } : { x: "-100%" }}
          transition={{ duration: 0.5 }}
          style={{ zIndex: -1 }}
        />
      )}
      {children}
      {icon}
    </motion.a>
  );
}

// Skill card with hover effect
function SkillCard({ name, level }: { name: string; level: number }) {
  return (
    <motion.div variants={itemVariants} whileHover={{ x: 4 }} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-slate-300 group-hover:text-emerald-400 transition-colors">
          {name}
        </span>
        <span className="text-sm font-mono text-emerald-500 font-bold">
          {level}%
        </span>
      </div>
      <motion.div className="h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </motion.div>
    </motion.div>
  );
}

// Timeline item
function TimelineItem({
  year,
  role,
  company,
  color,
  index,
}: {
  year: string;
  role: string;
  company: string;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex gap-4"
      whileHover={{ x: 2 }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-3 h-3 rounded-full"
          style={{ background: color }}
          animate={{
            boxShadow: [
              `0 0 8px ${color}66`,
              `0 0 16px ${color}99`,
              `0 0 8px ${color}66`,
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {index < TIMELINE.length - 1 && (
          <div
            className="w-0.5 h-12 mt-2"
            style={{ background: "rgba(255,255,255,0.05)" }}
          />
        )}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-100">{role}</p>
        <p className="text-xs text-slate-500">
          {company} · {year}
        </p>
      </div>
    </motion.div>
  );
}

// Social links
interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <motion.div
      variants={containerVariants}
      className="flex items-center gap-3"
    >
      {links.map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-500/5 transition-all"
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default function HeroStellarBits() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks: SocialLink[] = [
    {
      label: "GitHub",
      href: "https://github.com/sheefanaaz123",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/sheefanaaz",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
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
  ];

  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen bg-slate-950 overflow-hidden pt-20 pb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Morphing background */}
      <MorphingShape />

      {/* Animated dot grid */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(16,185,129,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "32px 32px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Corner accents */}
      <motion.div
        className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-emerald-500 pointer-events-none"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-emerald-500 pointer-events-none"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left column */}
        <motion.div className="lg:col-span-2 space-y-6">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-xs font-semibold text-emerald-400 uppercase tracking-wider"
          >
            <motion.span
              className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Available for Senior / Staff Roles
          </motion.div>

          {/* Main heading */}
          <motion.div variants={blurInVariants}>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <GradientText>Sheefa Naaz</GradientText>
            </h1>
          </motion.div>

          {/* Typed role */}
          <TypedText />

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 max-w-lg leading-relaxed"
          >
            I build systems that scale. Obsessed with performance, clean
            architecture, and shipping products that real users love — from
            greenfield MVPs to enterprise-grade platforms.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-3 gap-8 py-8 border-t border-b border-white/10"
          >
            {STATS.map((stat, i) => (
              <motion.div key={i} variants={itemVariants}>
                <motion.div
                  className="text-4xl font-bold text-emerald-500 mb-1"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Counter end={stat.value} duration={1.8} />+
                </motion.div>
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={containerVariants}
            className="flex gap-4 flex-wrap"
          >
            <AnimatedButton
              href="#projects"
              variant="primary"
              icon={
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
              }
            >
              View My Work
            </AnimatedButton>
            <AnimatedButton
              href="mailto:sheefanaaz@example.com"
              variant="secondary"
              icon={
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
              }
            >
              Download Resume
            </AnimatedButton>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 pt-4"
          >
            <SocialLinks links={socialLinks} />
            <div className="w-px h-6 bg-white/10" />
            <span className="text-xs text-slate-500">Connect with me</span>
          </motion.div>
        </motion.div>

        {/* Right column - Cards panel */}
        <motion.div
          className="lg:col-span-1 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Skills card */}
          <motion.div
            variants={floatVariants}
            animate="visible"
            whileInView="float"
            viewport={{ once: false }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-emerald-500/20 transition-all"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-6 flex items-center gap-2"
            >
              Core Skills
              <div className="flex-1 h-px bg-white/10" />
            </motion.h3>
            <motion.div variants={containerVariants} className="space-y-4">
              {SKILLS.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Timeline card */}
          <motion.div
            variants={floatVariants}
            animate="visible"
            whileInView="float"
            viewport={{ once: false }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-emerald-500/20 transition-all"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-6 flex items-center gap-2"
            >
              Experience
              <div className="flex-1 h-px bg-white/10" />
            </motion.h3>
            <motion.div variants={containerVariants} className="space-y-6">
              {TIMELINE.map((item, i) => (
                <TimelineItem key={item.year} {...item} index={i} />
              ))}
            </motion.div>
          </motion.div>

          {/* Open to work */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 rounded-xl p-4 hover:bg-emerald-500/15 hover:border-emerald-500/40 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-emerald-500"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-semibold text-slate-100">
                  Open to opportunities
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-500">
                Full-time · Remote
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        animate={{
          y: [0, 8, 0],
          opacity: [
            0.3 + (1 - scrollY / 300),
            0.3 + (1 - scrollY / 300),
            0.3 + (1 - scrollY / 300),
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest">
          Scroll
        </span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect
            x="2"
            y="2"
            width="12"
            height="18"
            rx="6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <motion.circle
            cx="8"
            cy="7"
            r="1.5"
            fill="currentColor"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </svg>
      </motion.div>
    </motion.section>
  );
}
