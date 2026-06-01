'use client';

import { motion } from 'motion/react';
import { Code2, Database, Cloud, Zap } from 'lucide-react';

const SkillsStellar = () => {
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
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
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
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-foreground">
            Skills & <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive toolkit built through years of production experience and continuous learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative p-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent hover:border-emerald-500/40 transition-all">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-3 flex items-center justify-center text-white`}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full group-hover/item:scale-150 transition-transform" />
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Accent */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-teal-500/5"
        >
          <h3 className="text-xl font-display font-bold text-foreground mb-4">
            Continuous Learning
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Passionate about staying ahead of industry trends. Active contributor to open-source projects, Hacktoberfest participant, and regular learner of emerging technologies in the software engineering landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsStellar;
