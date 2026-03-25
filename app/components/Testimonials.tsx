'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, CaretLeft, CaretRight, Quotes } from '@phosphor-icons/react';

const testimonials = [
  {
    name: 'Reina Castillo',
    title: 'Dental implant patient',
    location: 'Summerlin, Las Vegas',
    avatar: 'RC',
    rating: 5,
    text: "I came in terrified. I'd avoided the dentist for seven years. Dr. Ellison and her team made the whole experience feel like nothing — the sedation, the staff checking in, the follow-up texts. I finally have my full smile back and I\'m not scared of dentists anymore.",
    date: 'February 2026',
  },
  {
    name: 'Damien Okafor',
    title: 'Invisalign & whitening',
    location: 'Henderson, NV',
    avatar: 'DO',
    rating: 5,
    text: "Finished my Invisalign treatment in 11 months — faster than predicted. The before/after is genuinely shocking. I didn't expect the results to be that dramatic. Worth every penny. The staff at Lumina are incredibly professional and friendly.",
    date: 'January 2026',
  },
  {
    name: 'Priya Menon',
    title: 'Emergency patient',
    location: 'Downtown Las Vegas',
    avatar: 'PM',
    rating: 5,
    text: "Cracked my tooth on a Friday night. Called the after-hours line and had a real person call me back in 20 minutes to book a 8am Saturday slot. Fixed same morning. This is how dental care should work everywhere.",
    date: 'March 2026',
  },
  {
    name: 'Trevor Whitfield',
    title: 'Family care — 3 kids',
    location: 'North Las Vegas',
    avatar: 'TW',
    rating: 5,
    text: "My youngest has serious anxiety around anything medical. Dr. Ellison\'s team spent extra time with her, showed her all the tools, let her pick the flavor of polish. She actually looked forward to her second appointment. That\'s genuinely remarkable.",
    date: 'December 2025',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));
  const current = testimonials[active];

  return (
    <section id="testimonials" className="py-24 bg-zinc-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-teal-600 text-xs font-semibold tracking-widest uppercase block mb-3"
            >
              Patient Stories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 leading-tight"
            >
              Real people.<br />Real results.
            </motion.h2>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl border border-zinc-200 bg-white flex items-center justify-center hover:bg-zinc-50 hover:border-zinc-300 active:scale-[0.96] transition-all"
              aria-label="Previous"
            >
              <CaretLeft size={16} weight="bold" className="text-zinc-600" />
            </button>
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active ? 'w-6 h-2 bg-teal-600' : 'w-2 h-2 bg-zinc-300 hover:bg-zinc-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-xl border border-zinc-200 bg-white flex items-center justify-center hover:bg-zinc-50 hover:border-zinc-300 active:scale-[0.96] transition-all"
              aria-label="Next"
            >
              <CaretRight size={16} weight="bold" className="text-zinc-600" />
            </button>
          </motion.div>
        </div>

        {/* Testimonial display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-6"
          >
            {/* Author card */}
            <div className="bg-white border border-zinc-100 rounded-3xl p-8 flex flex-col justify-between shadow-[0_8px_24px_-8px_rgba(0,0,0,0.05)]">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center mb-4">
                  <span className="text-teal-700 font-bold text-lg tracking-tight">{current.avatar}</span>
                </div>
                <p className="font-bold text-zinc-900 text-lg tracking-tight">{current.name}</p>
                <p className="text-teal-600 text-sm font-medium mt-0.5">{current.title}</p>
                <p className="text-zinc-400 text-xs mt-1">{current.location}</p>
              </div>
              <div className="mt-6">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={14} weight="fill" className="text-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-400 text-xs">{current.date}</p>
              </div>
            </div>

            {/* Quote card */}
            <div className="bg-teal-600 rounded-3xl p-8 lg:p-10 flex flex-col justify-between shadow-[0_8px_24px_-8px_rgba(13,148,136,0.3)]">
              <Quotes size={36} weight="fill" className="text-teal-400/60 mb-4" />
              <p className="text-white text-lg md:text-xl leading-relaxed font-light">
                {current.text}
              </p>
              <div className="mt-6 pt-6 border-t border-teal-500/40">
                <p className="text-teal-200 text-sm font-medium">Lumina Dental — Las Vegas</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All reviews link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-400"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} weight="fill" className="text-amber-400" />
            ))}
          </div>
          <span>247 verified Google reviews · Average 4.9</span>
        </motion.div>
      </div>
    </section>
  );
}
