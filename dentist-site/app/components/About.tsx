'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Certificate, Heart } from '@phosphor-icons/react';
import Image from 'next/image';

const credentials = [
  { icon: GraduationCap, text: 'DMD, UNLV School of Dental Medicine', subtext: 'Class of 2011' },
  { icon: Certificate, text: 'Board Certified — American Dental Association', subtext: 'Active member since 2012' },
  { icon: Heart, text: 'Fellowship — Academy of General Dentistry', subtext: 'Las Vegas Chapter' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 bg-zinc-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-h-[560px] shadow-[0_24px_48px_-16px_rgba(0,0,0,0.1)]">
              <Image
                src="https://picsum.photos/seed/dentist-doctor-vegas/600/800"
                alt="Dr. Maren Ellison"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-transparent to-transparent" />
              {/* Name card overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl p-4">
                <p className="font-bold text-zinc-900 text-base tracking-tight">Dr. Maren Ellison, DMD</p>
                <p className="text-teal-600 text-xs font-medium mt-0.5">Lead Dentist & Founder</p>
              </div>
            </div>

            {/* Accent — years badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: -3 } : {}}
              transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.6 }}
              className="absolute -top-4 -right-4 bg-teal-600 text-white rounded-2xl px-5 py-4 shadow-[0_12px_28px_-8px_rgba(13,148,136,0.45)]"
            >
              <p className="text-3xl font-bold leading-none">14+</p>
              <p className="text-teal-200 text-xs font-medium mt-1">Years in Las Vegas</p>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-teal-600 text-xs font-semibold tracking-widest uppercase block mb-3"
            >
              Meet Your Dentist
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 leading-tight mb-5"
            >
              Trained with precision.<br />Driven by care.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
              className="text-zinc-500 leading-relaxed mb-4 max-w-[50ch]"
            >
              After graduating top of her class at UNLV's School of Dental Medicine, Dr. Ellison returned to Las Vegas to open Lumina Dental — a practice built on the belief that exceptional dentistry should feel effortless for patients.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.47 }}
              className="text-zinc-500 leading-relaxed mb-8 max-w-[50ch]"
            >
              Her focus spans cosmetic reconstruction, full-arch implants, and anxiety-free general care for patients of all ages. She has treated over 2,400 patients across Southern Nevada.
            </motion.p>

            {/* Credentials */}
            <div className="flex flex-col gap-4">
              {credentials.map((cred, i) => {
                const Icon = cred.icon;
                return (
                  <motion.div
                    key={cred.text}
                    initial={{ opacity: 0, x: 12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 w-8 h-8 rounded-xl bg-white border border-zinc-100 shadow-sm flex-shrink-0 flex items-center justify-center">
                      <Icon size={16} weight="duotone" className="text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-800">{cred.text}</p>
                      <p className="text-xs text-zinc-400 mt-0.5">{cred.subtext}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
