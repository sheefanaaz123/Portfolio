'use client';

import { motion } from 'motion/react';
import { Briefcase, Award } from 'lucide-react';

const ExperienceStellar = () => {
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
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 mb-16"
        >
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500" />
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
              Professional Journey
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-foreground">
            Experience & <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12 mb-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-12 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-0 top-6 w-3 h-3 bg-emerald-500 rounded-full -translate-x-1 ring-4 ring-background"
              />

              {/* Content */}
              <div className="ml-8 p-6 rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent hover:border-emerald-500/40 transition-all">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-emerald-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full mt-2">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-2 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                      viewport={{ once: true }}
                      className="flex gap-3 text-muted-foreground group/item"
                    >
                      <span className="text-emerald-400 font-bold flex-shrink-0 group-hover/item:text-emerald-300">
                        →
                      </span>
                      <span className="group-hover/item:text-foreground transition-colors">
                        {achievement}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-4 mb-8"
        >
          <h3 className="text-2xl font-display font-bold text-foreground">Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors"
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceStellar;
