import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Target, Eye } from 'lucide-react'
import PageHero from '../components/PageHero'

const values = [
  {
    title: 'Reliable Service',
    desc: 'Our trained field technicians provide 24-hour emergency services, routine service inspections, and conveyor belt maintenance contract work.',
    icon: '✓',
    color: 'bg-primary',
  },
  {
    title: 'Certified Mechanics',
    desc: 'Highly qualified team of mechanical personnel with vast experience and expertise in different industrial and mining environments.',
    icon: '★',
    color: 'bg-primary',
  },
  {
    title: 'No Hidden Costs',
    desc: 'Transparent and honest pricing structures. We provide comprehensive reports and recommendations to assist your planning.',
    icon: '◈',
    color: 'bg-primary',
  },
  {
    title: 'Affordable Prices',
    desc: 'Competitive pricing that works to increase productivity and cost effectiveness in the market without sacrificing quality.',
    icon: '$',
    color: 'bg-primary',
  },
]

const milestones = [
  { year: '2003', event: 'Incorporated as Handon Enterprises (Pvt) Ltd, trading as Partsgate Engineering' },
  { year: '2008', event: 'Expanded into full conveyor systems design, manufacture and installation' },
  { year: '2012', event: 'Added Ceramic and Rubber Wear Resistant Lining as core service offerings' },
  { year: '2015', event: 'Became an established supplier to Zimplats, Mimosa and Unki Mine' },
  { year: '2018', event: 'Launched 24-hour emergency services division for mining sector clients' },
  { year: '2023', event: 'Celebrated 20 years of engineering excellence in Zimbabwe' },
]

export default function AboutUs() {
  return (
    <>
      <PageHero title="About Us" breadcrumbs={[{ label: 'About Us' }]} />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-title">Company Overview</p>
              <h2 className="section-heading mb-6">
                Zimbabwe's Leading Engineering Specialist
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 font-body text-lg">
                Handon Enterprises (Pvt) Ltd, trading as <strong>Partsgate Engineering</strong>, is a dynamic wholly owned Zimbabwean engineering company incorporated under the Companies Act [Chapter 24:03] in May 2003.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5 font-body">
                The company has over twenty years of experience in engineering service provision and supplies to mining, manufacturing, power generation, construction and agro-processing sectors.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 font-body">
                Partsgate Engineering specialises in the provision of engineering designs, manufacture and construction of heavy industries and mining plants which includes conveyor systems, steelworks, pipeline equipment and other associated installations.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Engineering designs, manufacture & construction',
                  'Conveyor systems & steelwork fabrication',
                  'Processing / crushing plant maintenance',
                  'General engineering services',
                  '24-hour emergency response capability',
                  'On-site belt surveys and audits',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 font-body text-gray-700">
                    <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/our-services" className="btn-primary inline-flex items-center gap-2">
                View Our Services <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                  alt="Partsgate Engineering engineering facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-36 bg-primary flex items-center justify-center shadow-xl">
                <div className="text-center text-white px-4">
                  <div className="font-heading font-black text-5xl leading-none">20+</div>
                  <div className="font-heading font-semibold text-xs uppercase tracking-widest mt-2">Years of Excellence</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-dark-2 border-2 border-dark-3 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-title">Our Direction</p>
            <h2 className="section-heading">Vision & Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-dark text-white p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <Eye size={36} className="text-primary mb-5" />
              <h3 className="font-heading font-black text-3xl text-white uppercase mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed font-body text-lg">
                To be the leading and innovative provider of diversified engineering and construction products and services in the markets we serve.
              </p>
            </div>
            <div className="bg-primary text-white p-10 relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <Target size={36} className="text-white mb-5" />
              <h3 className="font-heading font-black text-3xl text-white uppercase mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed font-body text-lg">
                To provide diversified engineering, technical and modern construction products and services in an efficient and safe manner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-title">Our Promise</p>
            <h2 className="section-heading">Why Choose Partsgate Engineering</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ title, desc, icon, color }) => (
              <div key={title} className="border border-gray-100 p-8 hover:shadow-lg hover:border-primary/20 transition-all group text-center">
                <div className={`w-16 h-16 ${color} flex items-center justify-center text-white font-heading font-black text-2xl mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                  {icon}
                </div>
                <h3 className="font-heading font-bold text-dark text-xl uppercase tracking-wide mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-body">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-title">Our Journey</p>
            <h2 className="section-heading text-white">Company Milestones</h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-dark-3 hidden md:block" />
            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="bg-dark-2 border border-dark-3 hover:border-primary transition-colors p-6">
                      <div className="font-heading font-black text-primary text-2xl mb-2">{year}</div>
                      <p className="text-gray-300 font-body text-sm leading-relaxed">{event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-5 h-5 bg-primary rounded-full border-4 border-dark flex-shrink-0 relative z-10" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-black text-white text-3xl md:text-4xl uppercase">
              Ready to Partner With Us?
            </h3>
            <p className="text-white/80 mt-1 font-body">
              Get in touch with our expert engineering team today.
            </p>
          </div>
          <Link to="/contact-us" className="bg-white text-primary font-heading font-bold uppercase tracking-wide px-8 py-3 text-sm hover:bg-gray-100 transition-colors flex-shrink-0 inline-flex items-center gap-2">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}