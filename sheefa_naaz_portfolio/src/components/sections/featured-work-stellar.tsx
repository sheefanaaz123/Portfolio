'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';

interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  impact: string;
  tags: string[];
  github: string;
  demo?: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

const FeaturedWorkStellar = () => {
  const projects: FeaturedProject[] = [
    {
      id: '1',
      title: 'Enterprise Analytics Dashboard',
      description: 'AI-powered analytics platform serving 1500+ enterprise users with real-time data visualization, predictive insights, and role-based access control.',
      impact: 'Reduced data processing time by 60%',
      tags: ['React', 'TypeScript', 'Redux', 'Flask', 'ECharts', 'JWT Auth'],
      github: 'https://github.com/sheefanaaz123/Analytics-App',
      demo: 'https://analytics-app-demo.com',
      image: 'analytics',
      metrics: [
        { label: 'Users Served', value: '1500+' },
        { label: 'Dashboard Performance', value: '9.2/10' },
        { label: 'Data Accuracy', value: '99.8%' },
      ],
    },
    {
      id: '2',
      title: 'Intelligent Systems Architecture',
      description: 'Multi-tiered React + TypeScript system handling complex state management for financial data visualization and real-time updates at enterprise scale.',
      impact: 'Bundle size reduction: 9% improvement',
      tags: ['React', 'TypeScript', 'Redux', 'System Design', 'Performance'],
      github: 'https://github.com/sheefanaaz123/InsightIQ',
      image: 'systems',
      metrics: [
        { label: 'Load Time', value: '1.2s' },
        { label: 'Bundle Size', value: '↓9%' },
        { label: 'Test Coverage', value: '85%' },
      ],
    },
    {
      id: '3',
      title: 'Computer Vision Pipeline',
      description: 'Real-time vehicle detection and counting system using YOLOv5 and OpenCV. Deployed for automated traffic monitoring and analysis.',
      impact: 'Processing 30+ frames per second',
      tags: ['Python', 'YOLOv5', 'OpenCV', 'ML', 'Real-time Processing'],
      github: 'https://github.com/sheefanaaz123/Vehicle-Detection-and-Counting',
      image: 'cv',
      metrics: [
        { label: 'Detection Accuracy', value: '94%' },
        { label: 'Processing Speed', value: '30 FPS' },
        { label: 'Latency', value: '<50ms' },
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
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
              Featured Work
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-foreground">
            Projects That <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Move the Needle
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Selected projects demonstrating expertise in full-stack development, system architecture, and
            delivering measurable business impact at enterprise scale.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <motion.div
                  className={`space-y-6 order-${idx % 2 === 0 ? '1' : '2'}`}
                  whileHover={{ x: idx % 2 === 0 ? 10 : -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-3">
                    <h3 className="text-3xl sm:text-4xl font-display font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Impact Badge */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
                  >
                    <TrendingUp size={18} className="text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-400">{project.impact}</span>
                  </motion.div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {project.metrics.map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i }}
                        viewport={{ once: true }}
                        className="p-3 bg-card border border-emerald-500/20 rounded-lg"
                      >
                        <div className="text-2xl font-bold text-emerald-400">{metric.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500/20 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/30 transition-all border border-emerald-500/30"
                    >
                      <Github size={18} />
                      GitHub
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 border-2 border-emerald-500/50 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </motion.div>

                {/* Visual Element */}
                <motion.div
                  className={`order-${idx % 2 === 0 ? '2' : '1'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative h-80 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 rounded-2xl border border-emerald-500/20 overflow-hidden group/card">
                    {/* Background animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />

                    {/* Content */}
                    <div className="relative h-full flex flex-col items-center justify-center p-8 space-y-4">
                      <div className="text-5xl">
                        {project.image === 'analytics'
                          ? '📊'
                          : project.image === 'systems'
                            ? '🏗️'
                            : '🎥'}
                      </div>
                      <h4 className="text-lg font-semibold text-center text-foreground">
                        {project.title}
                      </h4>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        className="absolute top-4 right-4 w-8 h-8 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Divider */}
              {idx < projects.length - 1 && (
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent my-12"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center pt-12"
        >
          <p className="text-muted-foreground mb-6">Want to explore more projects?</p>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/sheefanaaz123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
          >
            Explore GitHub Profile
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWorkStellar;
