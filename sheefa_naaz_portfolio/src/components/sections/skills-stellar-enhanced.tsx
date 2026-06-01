'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { Code2, Database, Cloud, Zap } from 'lucide-react';
import { useRef } from 'react';

const SkillsStellarEnhanced = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      color: 'from-emerald-500 to-teal-500',
      skills: ['React 19', 'TypeScript', 'Redux', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'Testing Library'],
    },
    {
      icon: Database,
      title: 'Backend & Data',
      color: 'from-cyan-500 to-blue-500',
      skills: ['Node.js', 'Python', 'Flask', 'RESTful APIs', 'JWT Auth', 'Data Analysis', 'System Design'],
    },
    {
      icon: Cloud,
      title: 'DevOps & Tools',
      color: 'from-teal-500 to-green-500',
      skills: ['Git', 'GitHub', 'CI/CD', 'Docker', 'Performance Optimization', 'Bundle Analysis'],
    },
    {
      icon: Zap,
      title: 'Specializations',
      color: 'from-emerald-400 to-cyan-400',
      skills: ['Enterprise Systems', 'State Management', 'Performance', 'Code Review', 'System Architecture', 'ML Integration'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Advanced Scroll Animation */}
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
              Technical Arsenal
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl font-display font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit built through years of production experience and continuous learning.
          </motion.p>
        </motion.div>

        {/* Skills Grid with Staggered and Scale Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const cardRef = useRef(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ['start 0.8', 'center 0.4'],
            });

            const scale = useTransform(cardProgress, [0, 1], [0.8, 1]);
            const opacity = useTransform(cardProgress, [0, 1], [0, 1]);
            const rotate = useTransform(cardProgress, [0, 1], [-5 + idx * 2, 0]);

            return (
              <motion.div
                key={idx}
                ref={cardRef}
                style={{
                  scale,
                  opacity,
                  rotate,
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card with Gradient Border */}
                <motion.div
                  className="relative p-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent hover:border-emerald-500/40 transition-all"
                  whileHover={{ y: -4 }}
                >
                  {/* Animated Background Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/5"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Header with Icon */}
                  <motion.div
                    className="flex items-center gap-4 mb-6 relative z-10"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-3 flex items-center justify-center text-white shadow-lg`}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-display font-bold text-foreground group-hover:text-emerald-400 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + idx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {category.title}
                    </motion.h3>
                  </motion.div>

                  {/* Skills List with Wave Effect */}
                  <motion.div
                    className="space-y-3 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.25 + idx * 0.05 + i * 0.03,
                          duration: 0.4,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 group/item"
                      >
                        <motion.div
                          className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
                          whileHover={{ scale: 1.8, boxShadow: '0 0 20px rgba(52, 211, 153, 0.6)' }}
                          transition={{ duration: 0.2 }}
                        />
                        <motion.span
                          className="text-muted-foreground group-hover/item:text-emerald-400 transition-colors"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {skill}
                        </motion.span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Animated Accent Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  {/* Corner Accent Animation */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0, 0.1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: idx * 0.5,
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 relative overflow-hidden"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-teal-500/0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 0%'],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-xl font-display font-bold text-foreground mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              Continuous Learning
            </motion.h3>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              viewport={{ once: true }}
            >
              Passionate about staying ahead of industry trends. Active contributor to open-source projects, Hacktoberfest
              participant, and regular learner of emerging technologies in the software engineering landscape.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsStellarEnhanced;
