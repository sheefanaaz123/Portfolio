'use client';

import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroStellar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden pt-20 pb-20">
      {/* Dynamic gradient background following cursor */}
      <motion.div
        className="fixed inset-0 -z-10 pointer-events-none"
        animate={{
          background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15) 0%, transparent 80%)`,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.5 }}
      />

      {/* Animated background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-teal-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            y: [0, 40, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full hover:bg-emerald-500/15 transition-colors"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-emerald-400">
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight">
                <span className="text-foreground">Building</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Scalable
                </span>
                <br />
                <span className="text-foreground">Systems</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                Software engineer obsessed with performance, elegant code, and solving complex problems at scale.
              </p>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-8 pt-4 text-sm"
            >
              <div className="space-y-1">
                <div className="text-3xl font-bold text-emerald-400">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-emerald-400">1500+</div>
                <div className="text-muted-foreground">Enterprise Users</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-emerald-400">5+</div>
                <div className="text-muted-foreground">Projects Shipped</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 group"
              >
                View My Work
                <motion.div
                  group-hover={{ x: 4 }}
                  className="transition-transform"
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 border-2 border-emerald-500/50 text-foreground font-semibold rounded-xl hover:bg-emerald-500/10 transition-all flex items-center justify-center gap-2"
              >
                Get In Touch
                <Mail size={20} />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 pt-6"
            >
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com/sheefanaaz123', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/sheefanaaz', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:sheefanaaz@example.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all"
                    title={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
              <span className="text-muted-foreground text-sm">Connect with me</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Code card showcase */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-full h-full max-w-md bg-card border border-emerald-500/20 rounded-2xl p-6 backdrop-blur-sm shadow-2xl"
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                  </div>

                  <div className="bg-background rounded p-4 font-mono text-sm space-y-2">
                    <div className="text-emerald-400">
                      <span className="text-cyan-400">const</span> solutions = {'{'}
                    </div>
                    <div className="ml-4 text-blue-300">
                      performance: <span className="text-emerald-300">'optimized'</span>,
                    </div>
                    <div className="ml-4 text-blue-300">
                      scalability: <span className="text-emerald-300">'enterprise-grade'</span>,
                    </div>
                    <div className="ml-4 text-blue-300">
                      quality: <span className="text-emerald-300">'production-ready'</span>,
                    </div>
                    <div className="text-emerald-400">
                      {'}'}
                    </div>
                    <div className="text-cyan-400">
                      await buildAwesome();
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-emerald-500/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-emerald-500 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroStellar;
