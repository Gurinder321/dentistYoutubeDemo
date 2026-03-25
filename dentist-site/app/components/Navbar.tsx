'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, Phone } from '@phosphor-icons/react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.1 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border border-zinc-200/60 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)]'
            : 'bg-white/60 backdrop-blur-md border border-zinc-100/80'
        } rounded-2xl px-5 py-3`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-teal-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1C5.5 1 3.5 3 3.5 5.5c0 1.2.4 2.3 1.1 3.1L8 14l3.4-5.4c.7-.8 1.1-1.9 1.1-3.1C12.5 3 10.5 1 8 1z" fill="white" fillOpacity="0.9"/>
                <circle cx="8" cy="5.5" r="1.5" fill="white" fillOpacity="0.5"/>
              </svg>
            </div>
            <div>
              <span className="text-zinc-900 font-semibold text-sm tracking-tight">Lumina Dental</span>
              <span className="text-teal-600 font-medium text-[10px] block leading-none tracking-widest uppercase">Las Vegas</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-xl transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+14304304300" className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-teal-600 transition-colors">
              <Phone size={14} weight="fill" />
              <span className="font-mono">430 430 4300</span>
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-xl hover:bg-teal-700 active:scale-[0.98] transition-all duration-200"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-zinc-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-20 left-4 right-4 z-40 bg-white/90 backdrop-blur-xl border border-zinc-200/60 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-4"
          >
            <nav className="flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-xl transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="border-t border-zinc-100 mt-2 pt-3">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full px-4 py-3 bg-teal-600 text-white text-sm font-medium rounded-xl text-center hover:bg-teal-700 transition-colors"
                >
                  Book Appointment
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
