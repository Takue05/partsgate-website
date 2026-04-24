export default function Logo({ variant = 'light' }) {
  return (
    <div className="flex items-center">
      <div className="bg-primary text-white font-heading font-black text-2xl px-3 py-1 leading-none">
        PARTSGATE
      </div>
      <div className={`${variant === 'dark' ? 'bg-dark-2' : 'bg-dark'} text-white font-heading font-medium text-xs px-2 py-1 leading-none tracking-widest uppercase ml-0.5`}>
        Engineering
      </div>
    </div>
  )
}
