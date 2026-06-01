'use client';

import { motion } from 'motion/react';
import { BarChart3, Users, Zap, TrendingUp } from 'lucide-react';

const StatsStellar = () => {
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-4">
            By The Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quantifiable impact and measurable achievements across all projects and initiatives
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl border border-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="relative p-8 rounded-2xl border border-emerald-500/10 group-hover:border-emerald-500/30 transition-colors space-y-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} p-3 flex items-center justify-center text-white shadow-lg`}
                  >
                    <Icon size={28} />
                  </motion.div>

                  {/* Value */}
                  <div>
                    <motion.div
                      className="text-4xl sm:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-lg font-semibold text-foreground mt-2">{stat.label}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Accent line */}
                  <motion.div
                    className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
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

export default StatsStellar;
