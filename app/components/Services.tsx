'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Tooth, Sparkle, Lightning, FirstAid, Syringe, SmileyXEyes } from '@phosphor-icons/react';

const services = [
  {
    icon: Tooth,
    title: 'General Dentistry',
    description: 'Comprehensive exams, professional cleanings, fillings, and preventive care to maintain lifelong oral health.',
    tags: ['Cleanings', 'Fillings', 'X-Rays'],
    accent: 'bg-zinc-50 border-zinc-200',
    span: 'lg:col-span-2',
  },
  {
    icon: Sparkle,
    title: 'Teeth Whitening',
    description: 'In-office and take-home whitening treatments delivering up to 8 shades brighter in a single session.',
    tags: ['In-Office', 'Take-Home'],
    accent: 'bg-teal-50 border-teal-100',
    span: 'lg:col-span-1',
  },
  {
    icon: Lightning,
    title: 'Dental Implants',
    description: 'Titanium root replacements that look, feel, and function exactly like natural teeth — built to last decades.',
    tags: ['Single', 'Full Arch', 'All-on-4'],
    accent: 'bg-zinc-50 border-zinc-200',
    span: 'lg:col-span-1',
  },
  {
    icon: SmileyXEyes,
    title: 'Invisalign',
    description: 'Clear aligner therapy for straighter teeth without brackets or wires — discreet, comfortable, effective.',
    tags: ['Lite', 'Full', 'Teen'],
    accent: 'bg-teal-50 border-teal-100',
    span: 'lg:col-span-1',
  },
  {
    icon: Sparkle,
    title: 'Cosmetic Dentistry',
    description: 'Veneers, bonding, and smile makeovers designed to give you the confidence to show every tooth.',
    tags: ['Veneers', 'Bonding', 'Makeovers'],
    accent: 'bg-zinc-50 border-zinc-200',
    span: 'lg:col-span-1',
  },
  {
    icon: FirstAid,
    title: 'Emergency Care',
    description: 'Same-day appointments for toothaches, broken teeth, and dental injuries — available 6 days a week.',
    tags: ['Same-Day', '6 Days/Week'],
    accent: 'bg-rose-50 border-rose-100',
    span: 'lg:col-span-2',
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-teal-600 text-xs font-semibold tracking-widest uppercase block mb-3"
            >
              What We Offer
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 leading-tight"
            >
              Full-spectrum dental care.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
            className="text-zinc-500 text-lg leading-relaxed max-w-[55ch] self-end"
          >
            Whether you need a routine checkup or a complete smile transformation, our Las Vegas practice handles every need under one roof — no referrals, no runaround.
          </motion.p>
        </div>

        {/* Services grid — asymmetric, no 3-equal-cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 + i * 0.08 }}
                className={`group ${service.span} p-6 rounded-2xl border ${service.accent} hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.08)] transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon size={20} weight="duotone" className="text-teal-600" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-medium text-zinc-400 bg-white/70 border border-zinc-100 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">{service.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
