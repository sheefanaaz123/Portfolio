'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { BarChart3, Users, Zap, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

const StatsStellarEnhanced = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const stats = [
    {
      icon: TrendingUp,
      value: '2+',
      label: 'Years Building',
      description: 'Production experience in full-stack development',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Users,
      value: '1500+',
      label: 'Enterprise Users',
      description: 'Systems serving active production users',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Zap,
      value: '60%',
      label: 'Performance Gain',
      description: 'Data processing optimization achieved',
      color: 'from-emerald-400 to-green-500',
    },
    {
      icon: BarChart3,
      value: '5+',
      label: 'Projects Shipped',
      description: 'Full-stack applications in production',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            By The Numbers
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Quantifiable impact and measurable achievements across all projects and initiatives
          </motion.p>
        </motion.div>

        {/* Stats Grid with Scroll-triggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const cardRef = useRef(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ['start 0.85', 'center 0.4'],
            });

            const scale = useTransform(cardProgress, [0, 1], [0.7, 1]);
            const opacity = useTransform(cardProgress, [0, 1], [0, 1]);
            const y = useTransform(cardProgress, [0, 1], [40, 0]);
            const rotate = useTransform(cardProgress, [0, 1], [-10 + idx * 3, 0]);

            return (
              <motion.div
                key={idx}
                ref={cardRef}
                style={{
                  scale,
                  opacity,
                  y,
                  rotate,
                }}
                initial={{ opacity: 0 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Animated Card Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl border border-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(16, 185, 129, 0)',
                      '0 0 20 10 rgba(16, 185, 129, 0.1)',
                      '0 0 0 0 rgba(16, 185, 129, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.3,
                  }}
                />

                {/* Content */}
                <div className="relative p-8 rounded-2xl border border-emerald-500/10 group-hover:border-emerald-500/30 transition-colors space-y-4">
                  {/* Icon with Rotation Animation */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    whileInView={{ scale: 1 }}
                    initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} p-3 flex items-center justify-center text-white shadow-lg`}
                  >
                    <Icon size={28} />
                  </motion.div>

                  {/* Value with Counter Effect */}
                  <div>
                    <motion.div
                      className="text-4xl sm:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 + idx * 0.05, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    <motion.p
                      className="text-lg font-semibold text-foreground mt-2"
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.05, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {stat.label}
                    </motion.p>
                  </div>

                  {/* Description */}
                  <motion.p
                    className="text-sm text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + idx * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {stat.description}
                  </motion.p>

                  {/* Animated Accent Line */}
                  <motion.div
                    className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                  />

                  {/* Floating Particle Animation */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      scale: [1, 1.2, 1],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: idx * 0.3,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsStellarEnhanced;
