'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import { useRef } from 'react';
import { useScroll, useTransform } from 'motion/react';

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

const FeaturedWorkStellarEnhanced = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

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
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 mb-16"
        >
          <motion.div
            className="flex items-center gap-3"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
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
              Featured Work
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl font-display font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Projects That <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Move the Needle
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Selected projects demonstrating expertise in full-stack development, system architecture, and
            delivering measurable business impact at enterprise scale.
          </motion.p>
        </motion.div>

        {/* Projects Grid with Staggered Scroll Animations */}
        <div className="space-y-8">
          {projects.map((project, idx) => {
            const projectRef = useRef(null);
            const { scrollYProgress: projectProgress } = useScroll({
              target: projectRef,
              offset: ['start 0.8', 'center 0.3'],
            });

            const imageScale = useTransform(projectProgress, [0, 1], [0.8, 1]);
            const imageOpacity = useTransform(projectProgress, [0, 1], [0, 1]);
            const contentX = useTransform(
              projectProgress,
              [0, 1],
              [idx % 2 === 0 ? -50 : 50, 0]
            );

            return (
              <motion.div
                key={project.id}
                ref={projectRef}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Content with Scroll Animation */}
                  <motion.div
                    className={`space-y-6 order-${idx % 2 === 0 ? '1' : '2'}`}
                    style={{ x: contentX }}
                  >
                    <div className="space-y-3">
                      <motion.h3
                        className="text-3xl sm:text-4xl font-display font-bold text-foreground group-hover:text-emerald-400 transition-colors"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        className="text-lg text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        viewport={{ once: true }}
                      >
                        {project.description}
                      </motion.p>
                    </div>

                    {/* Impact Badge with Scale Animation */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileInView={{ scale: 1 }}
                      initial={{ scale: 0.9, opacity: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
                    >
                      <TrendingUp size={18} className="text-emerald-400" />
                      <span className="text-sm font-semibold text-emerald-400">{project.impact}</span>
                    </motion.div>

                    {/* Metrics with Staggered Reveal */}
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      {project.metrics.map((metric, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.05 }}
                          viewport={{ once: true }}
                          className="p-3 bg-card border border-emerald-500/20 rounded-lg hover:border-emerald-500/50 transition-colors"
                        >
                          <div className="text-2xl font-bold text-emerald-400">{metric.value}</div>
                          <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tags with Wave Animation */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25 + i * 0.03 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20 hover:border-emerald-500/50 transition-colors"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links with Slide Animation */}
                    <div className="flex gap-4 pt-4">
                      <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
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
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.35 }}
                          viewport={{ once: true }}
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

                  {/* Visual Element with Scale and Parallax */}
                  <motion.div
                    className={`order-${idx % 2 === 0 ? '2' : '1'}`}
                    style={{
                      scale: imageScale,
                      opacity: imageOpacity,
                    }}
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

                      {/* Animated glow on scroll */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 rounded-2xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      />

                      {/* Content */}
                      <div className="relative h-full flex flex-col items-center justify-center p-8 space-y-4">
                        <motion.div
                          className="text-5xl"
                          animate={{ y: [0, 10, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {project.image === 'analytics'
                            ? '📊'
                            : project.image === 'systems'
                              ? '🏗️'
                              : '🎥'}
                        </motion.div>
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

                {/* Divider with Scroll Animation */}
                {idx < projects.length - 1 && (
                  <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent my-12"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA with Fade-in Animation */}
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

export default FeaturedWorkStellarEnhanced;
