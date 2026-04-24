import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Youtube } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Our Services', path: '/our-services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact Us', path: '/contact-us' },
]

const services = [
  'Conveyor Systems Design & Manufacture',
  'Hot & Cold Vulcanizing',
  'Rubber Wear Resistant Lining',
  'Ceramic Wear Resistant Lining',
  'Pulley / Drum Lagging',
  'Shaft Laser Alignment',
  'Manufacturing of Idler Rollers',
  'Plant Maintenance Services',
]

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo size="md" variant="dark" />
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Your Engineering, Maintenance, Wear Resistant Lining and Conveyor Specialist. Serving Zimbabwe's heavy industry and mining sectors since 2003.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/partsgate.Company" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-dark-2 flex items-center justify-center hover:bg-primary transition-colors rounded-sm">
                <Facebook size={16} />
              </a>
              <a href="https://x.com/partsgate" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-dark-2 flex items-center justify-center hover:bg-primary transition-colors rounded-sm">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="http://www.youtube.com/channel/UCGI1teERVbIS0bXV6A74slQ" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-dark-2 flex items-center justify-center hover:bg-primary transition-colors rounded-sm">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg uppercase tracking-wide mb-5 pb-2 border-b border-dark-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-sm hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="text-primary">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg uppercase tracking-wide mb-5 pb-2 border-b border-dark-2">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/our-services" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                    <span className="text-primary">›</span> {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg uppercase tracking-wide mb-5 pb-2 border-b border-dark-2">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>6 Richwell Ave, Mabelreign, Harare, Zimbabwe</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+263777477333" className="block hover:text-primary transition-colors">+263 777 477 333</a>
                  <a href="tel:+263716067473" className="block hover:text-primary transition-colors">+263 716 067 473</a>
                  <a href="tel:+263788870454" className="block hover:text-primary transition-colors">+263 788 870 454</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:sales@partsgate.co.zw" className="hover:text-primary transition-colors">
                  sales@partsgate.co.zw
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-2">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <span>© {new Date().getFullYear()} Partsgate Engineering. All rights reserved.</span>
          <span>Handon Enterprises (Pvt) Ltd t/a Partsgate Engineering</span>
        </div>
      </div>
    </footer>
  )
}