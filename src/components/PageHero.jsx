import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ title, breadcrumbs = [], bg = 'bg-dark' }) {
  return (
    <section className={`${bg} relative overflow-hidden py-20`}>
      {/* Industrial pattern overlay */}
      <div className="absolute inset-0 hero-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-transparent" />
      {/* Orange accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 font-body">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <ChevronRight size={14} />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-primary transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-primary">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
        <h1 className="font-heading font-black text-white text-5xl md:text-7xl uppercase tracking-tight">
          {title}
        </h1>
        <div className="w-16 h-1 bg-primary mt-4" />
      </div>
    </section>
  )
}