import { Phone, Mail, MapPin, Facebook, Youtube } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-dark text-gray-300 text-sm py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="tel:+263777477333" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone size={13} />
            <span>+263 777 477 333 | +263 716 067 473</span>
          </a>
          <a href="mailto:sales@partsgate.co.zw" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail size={13} />
            <span>sales@partsgate.co.zw</span>
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} />
            <span>6 Richwell Ave, Mabelreign, Harare</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/partsgate.Company" target="_blank" rel="noopener noreferrer"
            className="hover:text-primary transition-colors">
            <Facebook size={15} />
          </a>
          <a href="https://x.com/partsgate" target="_blank" rel="noopener noreferrer"
            className="hover:text-primary transition-colors">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="http://www.youtube.com/channel/UCGI1teERVbIS0bXV6A74slQ" target="_blank" rel="noopener noreferrer"
            className="hover:text-primary transition-colors">
            <Youtube size={15} />
          </a>
        </div>
      </div>
    </div>
  )
}