'use client';

import { motion } from 'motion/react';
import Navigation from '@/components/navigation';
import HeroStellar from '@/components/sections/hero-stellar';
import FeaturedWorkStellarEnhanced from '@/components/sections/featured-work-stellar-enhanced';
import StatsStellarEnhanced from '@/components/sections/stats-stellar-enhanced';
import SkillsStellarEnhanced from '@/components/sections/skills-stellar-enhanced';
import ExperienceStellarEnhanced from '@/components/sections/experience-stellar-enhanced';
import ContactStellar from '@/components/sections/contact-stellar';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Animated background gradients - subtle and elegant */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.35, 0.2],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-br from-teal-500/10 to-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 30, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>

      <Navigation />
      <HeroStellar />
      <FeaturedWorkStellarEnhanced />
      <StatsStellarEnhanced />
      <SkillsStellarEnhanced />
      <ExperienceStellarEnhanced />
      <ContactStellar />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-emerald-500/10 bg-gradient-to-b from-background to-emerald-500/5 py-12 px-4"
      >
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="text-muted-foreground">
            Designed & built with <span className="text-emerald-400">✦</span> by Sheefu
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </motion.footer>
    </main>
  );
}
