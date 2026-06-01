'use client';

import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ArrowRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const ContactStellar = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sheefanaaz@example.com',
      href: 'mailto:sheefanaaz@example.com',
      description: 'Direct message',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'sheefanaaz123',
      href: 'https://github.com/sheefanaaz123',
      description: 'View my projects',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Sheefa Naaz',
      href: 'https://linkedin.com/in/sheefanaaz',
      description: 'Professional profile',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-background to-teal-500/5 p-12 md:p-16"
        >
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl font-display font-bold text-foreground"
            >
              Let's Create <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Whether you have an exciting project, want to collaborate, or just want to chat about software engineering,
              I'd love to hear from you. Let's build something exceptional together.
            </motion.p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contacts.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group relative p-6 rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent hover:border-emerald-500/40 transition-all"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 p-3 flex items-center justify-center text-white mb-4"
                  >
                    <Icon size={24} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-emerald-400 transition-colors">
                    {contact.label}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{contact.description}</p>

                  {/* Value */}
                  <div className="flex items-center justify-between">
                    <code className="text-xs bg-background px-2 py-1 rounded border border-border text-foreground">
                      {contact.value}
                    </code>
                    {contact.label === 'Email' && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCopy(contact.value)}
                        className="p-2 hover:bg-emerald-500/20 rounded transition-colors"
                      >
                        {copied ? (
                          <Check size={16} className="text-emerald-400" />
                        ) : (
                          <Copy size={16} className="text-muted-foreground hover:text-emerald-400" />
                        )}
                      </motion.button>
                    )}
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:sheefanaaz@example.com"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
            >
              Send Me an Email
              <ArrowRight size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/sheefanaaz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-emerald-500/50 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all flex items-center justify-center gap-2"
            >
              Connect on LinkedIn
              <Linkedin size={20} />
            </motion.a>
          </motion.div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            I typically respond to messages within 24-48 hours. Looking forward to connecting!
          </motion.p>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Prefer exploring more first?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/sheefanaaz123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold"
          >
            Check out my GitHub
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactStellar;
