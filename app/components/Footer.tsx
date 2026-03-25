import { Phone, Envelope, MapPin, InstagramLogo, FacebookLogo } from '@phosphor-icons/react/dist/ssr';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-teal-600 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1C5.5 1 3.5 3 3.5 5.5c0 1.2.4 2.3 1.1 3.1L8 14l3.4-5.4c.7-.8 1.1-1.9 1.1-3.1C12.5 3 10.5 1 8 1z" fill="white" fillOpacity="0.9"/>
                  <circle cx="8" cy="5.5" r="1.5" fill="white" fillOpacity="0.5"/>
                </svg>
              </div>
              <div>
                <span className="text-white font-semibold text-sm tracking-tight">Lumina Dental</span>
                <span className="text-teal-500 font-medium text-[10px] block leading-none tracking-widest uppercase">Las Vegas</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-[38ch] mb-6">
              Premium dental care at 2847 W Charleston Blvd. Serving Las Vegas and Henderson since 2011.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <InstagramLogo size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FacebookLogo size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Services</p>
            <ul className="flex flex-col gap-2.5 text-sm">
              {['General Dentistry', 'Teeth Whitening', 'Dental Implants', 'Invisalign', 'Cosmetic Dentistry', 'Emergency Care'].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Contact</p>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} weight="fill" className="text-teal-500 mt-0.5 flex-shrink-0" />
                <span>2847 W Charleston Blvd<br />Las Vegas, NV 89102</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} weight="fill" className="text-teal-500 flex-shrink-0" />
                <a href="tel:+14304304300" className="hover:text-white transition-colors font-mono">430 430 4300</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Envelope size={15} weight="fill" className="text-teal-500 flex-shrink-0" />
                <a href="mailto:hello@luminadental.com" className="hover:text-white transition-colors">hello@luminadental.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs">&copy; {year} Lumina Dental. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
