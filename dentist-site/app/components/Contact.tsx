'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Envelope, MapPin, Clock, ArrowRight, CheckCircle } from '@phosphor-icons/react';

const info = [
  {
    icon: Phone,
    label: 'Phone',
    value: '430 430 4300',
    sub: 'Mon–Sat · Call or text',
  },
  {
    icon: Envelope,
    label: 'Email',
    value: 'hello@luminadental.com',
    sub: 'We reply within 2 hours',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '2847 W Charleston Blvd',
    sub: 'Las Vegas, NV 89102',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Fri 8am–6pm',
    sub: 'Sat 8am–2pm · Closed Sun',
  },
];

const services = [
  'General Checkup',
  'Teeth Whitening',
  'Dental Implants',
  'Invisalign',
  'Cosmetic / Veneers',
  'Emergency Care',
  'Other',
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="text-teal-600 text-xs font-semibold tracking-widest uppercase block mb-3"
          >
            Book Appointment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 leading-tight"
          >
            Your first visit is on us.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
            className="text-zinc-500 mt-3 text-lg max-w-[44ch]"
          >
            Free consultation, full X-rays, and a personalized treatment plan — at no charge for new patients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
          >
            {submitted ? (
              <div className="bg-teal-50 border border-teal-100 rounded-3xl p-10 flex flex-col items-center text-center h-full justify-center min-h-[400px]">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <CheckCircle size={52} weight="fill" className="text-teal-500 mb-4" />
                </motion.div>
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-2">You're confirmed!</h3>
                <p className="text-zinc-500 text-sm max-w-[36ch] leading-relaxed">
                  We'll call or text you within 30 minutes to confirm your appointment time. Check your inbox for a summary.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-zinc-700 tracking-wide">First Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Mia"
                      className="px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-zinc-700 tracking-wide">Last Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Reyes"
                      className="px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-zinc-700 tracking-wide">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (702) 000-0000"
                      className="px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all font-mono"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-zinc-700 tracking-wide">Email</label>
                    <input
                      type="email"
                      placeholder="mia@email.com"
                      className="px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-5">
                  <label className="text-xs font-semibold text-zinc-700 tracking-wide">Service Needed</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedService(s)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all duration-200 ${
                          selectedService === s
                            ? 'bg-teal-600 text-white border-teal-600'
                            : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-6">
                  <label className="text-xs font-semibold text-zinc-700 tracking-wide">Message (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Any details about your situation or preferred appointment times..."
                    className="px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-700 active:scale-[0.99] transition-all duration-200 shadow-[0_4px_16px_-4px_rgba(13,148,136,0.35)]"
                >
                  Request Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.45 }}
            className="flex flex-col gap-4"
          >
            {info.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-start gap-4 p-5 bg-zinc-50 border border-zinc-100 rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-100 shadow-sm flex-shrink-0 flex items-center justify-center">
                    <Icon size={18} weight="duotone" className="text-teal-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold text-zinc-800">{item.value}</p>
                    <p className="text-xs text-zinc-400 mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-zinc-100 bg-zinc-100 h-40 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map-vegas/600/300')] bg-cover bg-center opacity-40" />
              <div className="relative z-10 text-center">
                <MapPin size={28} weight="fill" className="text-teal-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-zinc-700">2847 W Charleston Blvd</p>
                <p className="text-xs text-zinc-500">Las Vegas, NV 89102</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
