import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'

const projects = [
  {
    title: 'Zimplats Conveyor System Overhaul',
    category: 'Conveyor Systems',
    desc: 'Complete design, manufacture, installation and maintenance of conveyor systems at Zimplats platinum mine operations.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    client: 'Zimplats',
    year: '2022',
  },
  {
    title: 'Mimosa Mine Rubber Lining Project',
    category: 'Wear Resistant Lining',
    desc: 'Full rubber lining application for pipes and tanks at Mimosa Mining operations to prevent corrosion and abrasion damage.',
    img: 'https://images.unsplash.com/photo-1565791380713-1756b9a05343?w=800&q=80',
    client: 'Mimosa Mine',
    year: '2022',
  },
  {
    title: 'Lafarge Zimbabwe Belt Audit',
    category: 'Belt Surveys & Audits',
    desc: 'Comprehensive on-site belt surveys and audits at Lafarge Zimbabwe cement operations. Delivered full report with maintenance recommendations.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    client: 'Lafarge Zimbabwe',
    year: '2021',
  },
  {
    title: 'Metallon Gold Plant Maintenance',
    category: 'Plant Maintenance',
    desc: 'Engineering maintenance services and predictive/preventive maintenance for Metallon Gold group mining plants across Zimbabwe.',
    img: 'https://images.unsplash.com/photo-1581092334651-ddf19e8abe6c?w=800&q=80',
    client: 'Metallon Gold',
    year: '2021',
  },
  {
    title: 'Unki Mine Idler Roller Supply',
    category: 'Idler Rollers',
    desc: 'Manufacture and supply of high quality conveyor idlers of all sizes for Unki Mine platinum operations.',
    img: 'https://images.unsplash.com/photo-1567361808960-dec9e8b003bc?w=800&q=80',
    client: 'Unki Mine',
    year: '2020',
  },
  {
    title: 'Hwange Colliery Ceramic Lining',
    category: 'Ceramic Lining',
    desc: 'Installation of alumina ceramic tile wear resistant lining to protect equipment from abrasion at Hwange Colliery.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    client: 'Hwange Colliery',
    year: '2020',
  },
  {
    title: 'Shaft Laser Alignment – Mining Complex',
    category: 'Laser Alignment',
    desc: 'Precision laser alignment of rotating machinery across multiple mining facilities, significantly reducing bearing replacement costs.',
    img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80',
    client: 'Various Clients',
    year: '2019',
  },
  {
    title: 'Hot Vulcanizing – Conveyor Belt Splicing',
    category: 'Vulcanizing',
    desc: 'Hot and cold vulcanizing of steel and plied conveyor belting at multiple industrial facilities across Zimbabwe.',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
    client: 'Multiple Clients',
    year: '2019',
  },
]

const categories = ['All', 'Conveyor Systems', 'Wear Resistant Lining', 'Plant Maintenance', 'Idler Rollers', 'Laser Alignment', 'Vulcanizing']

const clients = [
  'Zimplats', 'Mimosa Mine', 'Unki Mine', 'Metallon Gold',
  'Lafarge Zimbabwe', 'Hwange Colliery', 'ZESA', 'Delta Beverages',
]

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
            With over two decades of experience, Orac Systems has completed hundreds of engineering projects for Zimbabwe's leading mining, manufacturing and industrial companies.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="group bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="overflow-hidden h-48 relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-white text-xs font-heading font-semibold uppercase tracking-wide px-3 py-1">
                    {project.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-gray-400 font-body mb-2">
                    <span className="font-semibold text-gray-500">{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-heading font-bold text-dark text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-body">{project.desc}</p>
                </div>
              </div>
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