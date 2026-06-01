'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const ExperienceStellarEnhanced = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'HighRadius Technologies',
      period: '2022 - Present',
      type: 'Full-time',
      achievements: [
        'Architected multi-tiered React + TypeScript systems serving 1500+ enterprise users',
        'Reduced frontend bundle size by 9% through strategic optimization',
        'Migrated complex test suites to React 18 with 85% test coverage',
        'Designed and implemented robust Redux state management for financial data visualization',
        'Led code reviews and mentored junior developers on best practices',
      ],
      skills: ['React', 'TypeScript', 'Redux', 'System Design', 'Performance Optimization'],
      highlight: true,
    },
    {
      title: 'Full-Stack Developer',
      company: 'Independent Projects',
      period: '2021 - 2022',
      type: 'Freelance',
      achievements: [
        'Built AI-powered analytics dashboard with real-time data visualization',
        'Developed computer vision pipeline using YOLOv5 and OpenCV',
        'Created full-stack applications with Node.js backend and React frontend',
        'Implemented JWT authentication and role-based access control',
        'Deployed applications on cloud infrastructure with CI/CD pipelines',
      ],
      skills: ['React', 'Node.js', 'Python', 'ML', 'DevOps'],
      highlight: false,
    },
  ];

  const achievements = [
    { icon: '🏆', title: 'Hacktoberfest Contributor', description: 'Open-source contributions recognized' },
    { icon: '📊', title: '1500+ Users Served', description: 'Enterprise-scale systems' },
    { icon: '⚡', title: '60% Performance Gain', description: 'Data processing optimization' },
    { icon: '🎓', title: '9.01/10 CGPA', description: 'Academic excellence' },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Scroll Animation */}
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
              Professional Journey
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl font-display font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience & <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </motion.h2>
        </motion.div>

        {/* Timeline with Advanced Scroll Animations */}
        <div className="space-y-12 mb-16">
          {experiences.map((exp, idx) => {
            const expRef = useRef(null);
            const { scrollYProgress: expProgress } = useScroll({
              target: expRef,
              offset: ['start 0.8', 'center 0.3'],
            });

            const contentX = useTransform(expProgress, [0, 1], [-50, 0]);
            const contentOpacity = useTransform(expProgress, [0, 1], [0, 1]);
            const lineScale = useTransform(expProgress, [0, 1], [0, 1]);

            return (
              <motion.div
                key={idx}
                ref={expRef}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Animated Timeline Line */}
                <motion.div
                  style={{ scaleY: lineScale, opacity: contentOpacity }}
                  className="absolute left-0 top-12 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-transparent origin-top"
                />

                {/* Timeline Dot with Pulse Animation */}
                <motion.div
                  className="absolute left-0 top-6 w-3 h-3 bg-emerald-500 rounded-full -translate-x-1 ring-4 ring-background"
                  whileHover={{ scale: 1.2 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-emerald-500/50"
                    animate={{ scale: [1, 1.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content Card with Scroll-based Animation */}
                <motion.div
                  style={{ x: contentX, opacity: contentOpacity }}
                  className="ml-8 p-6 rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent hover:border-emerald-500/40 transition-all"
                  whileHover={{ y: -4 }}
                >
                  {/* Animated Background Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/5"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Header */}
                  <motion.div
                    className="flex items-start justify-between mb-4 relative z-10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-emerald-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                      <motion.span
                        className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full mt-2"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {exp.type}
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Achievements with Staggered Animation */}
                  <motion.ul
                    className="space-y-2 mb-6 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.35 + idx * 0.1 + i * 0.04,
                          duration: 0.4,
                        }}
                        viewport={{ once: true }}
                        className="flex gap-3 text-muted-foreground group/item"
                      >
                        <motion.span
                          className="text-emerald-400 font-bold flex-shrink-0"
                          whileHover={{ x: 4 }}
                        >
                          →
                        </motion.span>
                        <span className="group-hover/item:text-foreground transition-colors">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Skills with Wave Effect */}
                  <motion.div
                    className="flex flex-wrap gap-2 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.08, y: -2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.45 + idx * 0.1 + i * 0.03,
                          duration: 0.3,
                        }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20 hover:border-emerald-500/50 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Grid with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-4 mb-8"
        >
          <motion.h3
            className="text-2xl font-display font-bold text-foreground"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            viewport={{ once: true }}
          >
            Highlights
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4 + idx * 0.05,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6, borderColor: 'rgba(16, 185, 129, 0.5)' }}
                className="p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors relative overflow-hidden"
              >
                {/* Animated Background on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="text-3xl mb-2 relative z-10"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.3 }}
                  whileHover={{ scale: 1.2 }}
                >
                  {achievement.icon}
                </motion.div>

                <h4 className="font-semibold text-foreground mb-1 relative z-10">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground relative z-10">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceStellarEnhanced;
