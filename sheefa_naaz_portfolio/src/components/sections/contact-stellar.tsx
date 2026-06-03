"use client";

import { motion } from "motion/react";
import {
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Copy,
  Check,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

const ContactStellar = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent, text: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Enterprise Users Served", value: "1,500+" },
    { label: "Response Time", value: "< 24h" },
  ];

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "sheefanaaz6417@gmail.com",
      href: "mailto:sheefanaaz6417@gmail.com",
      description: "Best for opportunities",
      copyable: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sheefa-naaz",
      href: "https://www.linkedin.com/in/sheefa-naaz/",
      description: "View full profile & endorsements",
      copyable: false,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sheefanaaz123",
      href: "https://github.com/sheefanaaz123",
      description: "Explore my code & projects",
      copyable: false,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal-500/8 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-emerald-500/50" />
          <span className="text-emerald-400 text-sm font-mono tracking-widest uppercase">
            Get in Touch
          </span>
          <div className="h-px w-12 bg-emerald-500/50" />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Open to{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Frontend Roles
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-base max-w-xl mx-auto mb-4 leading-relaxed"
        >
          SDE-I at HighRadius with 2+ years building enterprise React +
          TypeScript products. Available for full-time frontend roles — remote
          or hybrid.
        </motion.p>

        {/* Location + availability pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12 flex-wrap"
        >
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-full px-3 py-1.5">
            <MapPin size={12} className="text-emerald-400" />
            Hyderabad, India · Open to Remote
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs border border-emerald-500/30 text-emerald-400 rounded-full px-3 py-1.5 bg-emerald-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-full px-3 py-1.5">
            <Clock size={12} className="text-emerald-400" />
            Responds within 24h
          </span>
        </motion.div>

        {/* Stats row — credibility for hiring managers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mb-10 max-w-lg mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold text-emerald-400">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 via-background to-teal-500/3 p-8 md:p-10"
        >
          {/* Contact links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {contacts.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={idx}
                  href={contact.href}
                  target={contact.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group relative p-5 rounded-xl border border-border hover:border-emerald-500/40 bg-background/50 hover:bg-emerald-500/5 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                      <Icon size={16} />
                    </div>
                    {contact.copyable ? (
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => handleCopy(e, contact.value)}
                        className="p-1.5 hover:bg-emerald-500/10 rounded-lg transition-colors"
                        title="Copy email"
                      >
                        {copied ? (
                          <Check size={14} className="text-emerald-400" />
                        ) : (
                          <Copy
                            size={14}
                            className="text-muted-foreground/50 group-hover:text-emerald-400 transition-colors"
                          />
                        )}
                      </motion.button>
                    ) : (
                      <ExternalLink
                        size={13}
                        className="text-muted-foreground/30 group-hover:text-emerald-400/60 transition-colors mt-1"
                      />
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground mb-1">
                    {contact.description}
                  </p>
                  <p className="text-sm font-medium text-foreground group-hover:text-emerald-400 transition-colors truncate">
                    {contact.label}
                  </p>
                  <p className="text-xs text-muted-foreground/60 truncate mt-0.5">
                    {contact.value}
                  </p>
                </motion.a>
              );
            })}
          </div>

          {/* What I'm looking for — key for hiring managers */}
          <div className="rounded-xl border border-border bg-background/40 p-5 mb-8">
            <p className="text-xs text-emerald-400 font-mono uppercase tracking-wider mb-3">
              What I'm looking for
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Frontend / Fullstack Roles",
                "React + TypeScript",
                "SaaS / Enterprise Products",
                "Remote or Hybrid",
                "Product-Driven Teams",
                "AI / Data Platforms",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full border border-emerald-500/20 text-muted-foreground bg-emerald-500/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:sheefanaaz6417@gmail.com"
              className="flex-1 px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 text-sm"
            >
              Email Me Directly
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.linkedin.com/in/sheefa-naaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3.5 border border-emerald-500/40 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all flex items-center justify-center gap-2 text-sm"
            >
              View LinkedIn Profile
              <Linkedin size={16} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              href="https://sheefanaaz123.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3.5 border border-border text-muted-foreground font-semibold rounded-xl hover:bg-muted/30 transition-all flex items-center justify-center gap-2 text-sm"
            >
              View Portfolio
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </motion.div>

        {/* Resume download nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-xs text-muted-foreground">
            Looking for my resume?{" "}
            <a
              href="https://sheefanaaz123.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors"
            >
              Download PDF ↗
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactStellar;
