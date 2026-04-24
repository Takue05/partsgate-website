import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import PageHero from '../components/PageHero'

const videos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Conveyor System Installation',
    category: 'Conveyor Systems',
    client: 'Zimplats',
  },
  {
    id: 'AmrONbJo2kM',
    title: 'Rubber Wear Resistant Lining',
    category: 'Wear Resistant Lining',
    client: 'Mimosa Mine',
  },
  {
    id: 'x6x4bYOnTJ4',
    title: 'Pulley/ Drum Lagging on Site',
    category: 'Lagging',
    client: 'Hwange Colliery',
  },
  {
    id: 'M7lc1UVf-VE',
    title: 'Ceramic Lining Application',
    category: 'Ceramic Lining',
    client: 'Unki Mine',
  },
  {
    id: 'aqz-KE-bpKQ',
    title: 'Shaft Laser Alignment',
    category: 'Laser Alignment',
    client: 'Metallon Gold',
  },
  {
    id: 'YR5ApYxkU-U',
    title: 'Plant Maintenance Services',
    category: 'Plant Maintenance',
    client: 'Lafarge Zimbabwe',
  },
]

const clients = [
  'Zimplats', 'Mimosa Mine', 'Unki Mine', 'Metallon Gold',
  'Lafarge Zimbabwe', 'Hwange Colliery', 'ZESA', 'Delta Beverages',
]

function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false)
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`

  return (
    <div className="group bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-52 bg-black overflow-hidden">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            width="100%"
            height="100%"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={thumb}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
              aria-label={`Play ${video.title}`}
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play size={26} className="text-white ml-1" fill="white" />
              </div>
            </button>
            <div className="absolute top-3 left-3 bg-primary text-white text-xs font-heading font-semibold uppercase tracking-wide px-3 py-1">
              {video.category}
            </div>
          </>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold text-gray-400 font-body mb-1">{video.client}</p>
        <h3 className="font-heading font-bold text-dark text-lg leading-tight group-hover:text-primary transition-colors">
          {video.title}
        </h3>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <>
      <PageHero title="Projects" breadcrumbs={[{ label: 'Projects' }]} />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="section-title">Our Work</p>
          <h2 className="section-heading mb-4">Engineering Projects Across Zimbabwe</h2>
          <p className="text-gray-500 font-body leading-relaxed">
            With over two decades of experience, Partsgate Engineering has completed hundreds of engineering projects for Zimbabwe's leading mining, manufacturing and industrial companies.
          </p>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-title">Our Clients</p>
            <h2 className="section-heading">Companies We've Served</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div key={client} className="bg-white border border-gray-100 py-8 px-6 text-center hover:border-primary hover:shadow-md transition-all group">
                <div className="font-heading font-bold text-xl text-gray-300 group-hover:text-primary transition-colors uppercase tracking-wide">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="font-heading font-black text-white text-4xl uppercase mb-4">
            Start Your Project With Us
          </h3>
          <p className="text-white/80 mb-8 font-body max-w-xl mx-auto">
            Contact our expert engineering team to discuss your project requirements and get a comprehensive quote.
          </p>
          <Link to="/contact-us" className="bg-white text-primary font-heading font-bold uppercase tracking-wide px-8 py-3 text-sm hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Get In Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
