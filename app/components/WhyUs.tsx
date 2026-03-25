'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, ShieldCheck, CurrencyDollar, Smiley, MapPin, Headset } from '@phosphor-icons/react';

const reasons = [
  {
    icon: Clock,
    title: 'Same-Day Emergency Slots',
    description: 'Dental pain doesn\'t wait for Monday. We hold appointment slots every day for urgent cases.',
    accent: 'from-teal-50 to-white',
  },
  {
    icon: ShieldCheck,
    title: 'All Major Insurance Accepted',
    description: 'Delta Dental, Cigna, United Concordia, Aetna, and more — plus interest-free financing plans.',
    accent: 'from-zinc-50 to-white',
  },
  {
    icon: Smiley,
    title: 'Anxiety-Free Environment',
    description: 'Nitrous oxide, oral sedation, and a calm team trained specifically for dental anxiety patients.',
    accent: 'from-teal-50 to-white',
  },
  {
    icon: MapPin,
    title: 'Central Las Vegas Location',
    description: 'Minutes from the Strip on W Charleston Blvd — easy parking, easy access from every neighborhood.',
    accent: 'from-zinc-50 to-white',
  },
  {
    icon: CurrencyDollar,
    title: 'Transparent Pricing',
    description: 'Written estimates before every procedure. No surprise charges. Ever. Financing with 0% APR available.',
    accent: 'from-zinc-50 to-white',
  },
  {
    icon: Headset,
    title: 'After-Hours Support',
    description: 'Text or call our dedicated line after hours for guidance — a real staff member responds within 30 minutes.',
    accent: 'from-teal-50 to-white',
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="text-teal-600 text-xs font-semibold tracking-widest uppercase block mb-3"
          >
            Why Lumina Dental
          </motion.span>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 leading-tight max-w-lg"
            >
              Built differently, from the ground up.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
              className="text-zinc-500 leading-relaxed max-w-[44ch] lg:mb-1"
            >
              We designed every part of Lumina Dental around what patients actually want — speed, honesty, and comfort.
            </motion.p>
          </div>
        </div>

        {/* Grid — 2-col zig-zag, not 3-equal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 + i * 0.08 }}
                className={`group flex gap-5 p-6 rounded-2xl bg-gradient-to-br ${reason.accent} border border-zinc-100 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.07)] transition-all duration-300`}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Icon size={22} weight="duotone" className="text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1.5 tracking-tight">{reason.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
