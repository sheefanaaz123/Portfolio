'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageCircle, X, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:sheefanaaz6417@gmail.com',
      color: 'bg-red-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sheefa-naaz',
      color: 'bg-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sheefanaaz123',
      color: 'bg-slate-800',
    },
  ];

  return (
    <>
      {/* Background overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/20"
          />
        )}
      </AnimatePresence>

      {/* Quick Links */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-3">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    y: 20,
                    transition: { delay: (quickLinks.length - index - 1) * 0.05 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${link.color} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow group relative`}
                  title={link.label}
                >
                  <Icon size={24} />
                  <span className="absolute right-full mr-3 px-3 py-1 bg-foreground text-background text-xs font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {link.label}
                  </span>
                </motion.a>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center font-semibold text-white ${
            isOpen
              ? 'bg-destructive hover:bg-destructive/90'
              : 'bg-primary hover:bg-primary/90 hover:shadow-2xl'
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <X size={28} />
              ) : (
                <MessageCircle size={28} />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </>
  );
};

export default FloatingContactButton;
