'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle } from '@phosphor-icons/react';
import Image from 'next/image';

const stats = [
  { value: '2,400+', label: 'Patients served' },
  { value: '14 yrs', label: 'In practice' },
  { value: '4.9', label: 'Google rating' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-zinc-50">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-teal-50/40" />
        <div className="absolute top-1/4 right-[45%] w-px h-64 bg-zinc-200" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-100 rounded-full mb-6"
            >
              <CheckCircle size={14} weight="fill" className="text-teal-600" />
              <span className="text-teal-700 text-xs font-medium tracking-wide">Accepting New Patients — Las Vegas, NV</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tighter leading-[1.05] text-zinc-900 mb-6"
            >
              A smile you{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-teal-600">carry</span>
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                  <path d="M0 5 Q25 0 50 5 Q75 10 100 5" stroke="#14b8a6" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </span>{' '}
              with you.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
              className="text-zinc-500 text-lg leading-relaxed max-w-[52ch] mb-8"
            >
              Premium dental care in the heart of Las Vegas. From routine cleanings to complete smile transformations, we treat every patient with precision and compassion.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-700 active:scale-[0.98] transition-all duration-200 shadow-[0_4px_16px_-4px_rgba(13,148,136,0.4)]"
              >
                Book a Free Consult
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-zinc-700 font-medium rounded-xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.98] transition-all duration-200"
              >
                View Services
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-8"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-2xl font-bold tracking-tight text-zinc-900">{stat.value}</span>
                  <span className="text-xs text-zinc-400 font-medium">{stat.label}</span>
                </motion.div>
              ))}
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} weight="fill" className="text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-zinc-400 font-medium">247 reviews</span>
              </div>
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.35 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-h-[580px] shadow-[0_32px_64px_-20px_rgba(0,0,0,0.12)]">
                <Image
                  src="https://picsum.photos/seed/dental-smile-pro/800/1000"
                  alt="Dr. Maren Ellison — Lumina Dental Las Vegas"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent" />
              </div>

              {/* Floating card — appointment */}
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white border border-zinc-100 rounded-2xl p-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                  <span className="text-xs text-zinc-400 font-medium">Next available</span>
                </div>
                <p className="text-sm font-semibold text-zinc-900">Tomorrow, 9:00 AM</p>
                <p className="text-xs text-zinc-400 mt-0.5">Cosmetic consultation</p>
              </motion.div>

              {/* Floating badge — rating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.9 }}
                className="absolute top-6 -right-4 bg-teal-600 text-white rounded-2xl px-4 py-3 shadow-[0_8px_24px_-8px_rgba(13,148,136,0.5)]"
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Star size={12} weight="fill" className="text-teal-200" />
                  <span className="font-bold text-sm">4.9</span>
                </div>
                <p className="text-teal-200 text-[10px] font-medium">Top Rated</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-zinc-300 to-transparent"
        />
      </motion.div>
    </section>
  );
}
