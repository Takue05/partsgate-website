import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'

const services = [
  {
    id: 'vulcanizing',
    title: 'Hot & Cold Vulcanizing',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    content: [
      'Orac Systems specializes in hot and cold vulcanizing, both steel and plied conveyor belting and general service around the conveyor.',
      'We have state-of-the-art vulcanizing equipment which can take up to 1500mm splice length.',
      'Our experienced team ensures high-quality splicing results that extend the life of your conveyor belts and minimize downtime during repairs.',
    ],
    points: [],
  },
  {
    id: 'rubber-lining',
    title: 'Rubber Wear Resistant Lining',
    img: 'https://images.unsplash.com/photo-1565791380713-1756b9a05343?w=800&q=80',
    content: [
      'When a metal is immersed in liquid which contains water or corrosive substances, the problem of corrosion occurs. Rubber Lining solves the problem.',
      'Rubber Lining is an application method used to protect multiple types of systems by lining corrosion and abrasion-resistant rubber upon the surface or inside of pipes and tanks.',
      'Our Rubber Lining is applied by hand by Orac Systems' , 'experienced staff', 'ensuring a durable finished product.',
    ],
    points: [
      'Excellent resistance to corrosive and abrasive chemicals and materials — acids, alkalis, salt water, slurries, sand, shot blast media, crushed rock',
      'Noise and vibration reduction',
      'Electrical and thermal insulation',
      'Product protection',
    ],
    subtitle: 'Operational Benefits of Rubber Lining',
  },
  {
    id: 'idler-rollers',
    title: 'Manufacturing of Idler Rollers and Frames',
    img: 'https://images.unsplash.com/photo-1567361808960-dec9e8b003bc?w=800&q=80',
    content: [
      'Orac Systems is the leading conveyor specialist manufacturer and supplier of high quality conveyor idlers of all sizes, suitable for the mining industry, heavy manufacturing industry, agro processing, food industry and construction industry.',
      'We manufacture troughing and return idlers fitted with high quality bearings and seals for extended life.',
      'We also offer a full package of conveyor system structural designs, manufacturing, installations and maintenance of conveyor idlers, conveyor frames, conveyor belts and hot splicing that enables our customers to do one-stop shopping.',
    ],
    points: [],
  },
  {
    id: 'ceramic-lining',
    title: 'Wear Resistant Lining – Ceramic',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    content: [
      'Protecting your plant and infrastructure from abrasion, chemicals, acid/alkali and heat will extend the lifetime of your asset, reduce maintenance and downtime from damage.',
      'Orac Systems provides solutions through wear resistance lining services including Ceramic Lining.',
      'Orac Systems specializes in Ceramic Lining solutions that extend the life of your equipment, thereby keeping your systems at a maximum operational level.',
      'Our industrial workhorse, and most frequently specified wear material, is our alumina ceramic tile — a fine-grain, high-grade alumina made from exceptionally pure and uniformly controlled alpha aluminium oxide.',
    ],
    points: [],
  },
  {
    id: 'plant-maintenance',
    title: 'Plant Maintenance Services',
    img: 'https://images.unsplash.com/photo-1581092334651-ddf19e8abe6c?w=800&q=80',
    content: [
      'Orac Systems offers Engineering Maintenance Services, Predictive/Preventive Building Maintenance, and Capital Planning to enable practical and effective asset management partnerships.',
      'We have a highly-qualified team of mechanical personnel who have vast experience and expertise in different industrial and mining environments.',
      'Orac Systems has been involved in some of the key companies in Zimbabwe such as Zimplats, Mimosa, Unki, Metallon Gold, Lafarge Zimbabwe and many more.',
    ],
    points: [],
  },
  {
    id: 'conveyor-systems',
    title: 'Conveyor Systems Design, Manufacture, Installations & Maintenance',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
    content: [
      'Orac Systems is a leading company in Conveyor System Management and Maintenance. We have a trained and experienced staff of field technicians who have taken part in new project installations, routine service inspections, conveyor belt maintenance contract work, Hot/Cold Splicing, and 24-hour emergency services.',
      'We can supply all types of conveyor belting, Rubber or PVC, depending on the customer\'s requirement.',
      'Orac Systems offers on-site belt surveys and audits to assess your exact conveyor conditions requirements. We then provide you with a comprehensive report with recommendations to assist you to plan for maintenance works.',
    ],
    points: [
      'Conveyor Systems Design & Manufacturing',
      'Conveyor Belts and Components Supply',
      'Conveyor Repair Services',
      'Conveyor Belt Splicing (Hot or Cold Splicing)',
      'Conveyor Belt Adhesives',
      'PVC and Rubber Conveyors',
      'Fasteners',
      'Belt Audits / Surveys',
    ],
    subtitle: 'Our Services Include:',
  },
  {
    id: 'shaft-alignment',
    title: 'Shaft Laser Alignment Services',
    img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80',
    content: [
      'It\'s a known fact – all rotating machinery is susceptible to misalignment. If you\'re still using rulers and dial indicators to ensure your rotating machinery is properly aligned, you could be losing thousands of dollars per year in replacement bearing costs, hours of unnecessary repair time, and crippling unplanned downtime.',
      'Correctly aligned and regularly controlled machines significantly reduce operating and maintenance costs.',
      'Conventional methods for shaft alignment, such as straightedge, thickness gauge or dial gauge, are very time consuming. The quality of results also highly depends on the experience of the operator. Our precision laser alignment delivers accurate and repeatable results every time.',
    ],
    points: [],
  },
  {
    id: 'drum-lagging',
    title: 'Pulley / Drum Lagging',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    content: [
      'There are a few basic reasons for the application of lagging to both driven and non-driven pulleys. Lagging is applied to nearly all conveyors to address at least one (if not all) of the basic points below.',
      'In addition, lagging should be applied in a way that the lagging itself does not wear prematurely due to abrasion, or delaminating from the pulley, as well as cause belt wear.',
    ],
    points: [
      'Lagging serves as a protective layer guarding the pulley from premature failure due to abrasion',
      'Lagging can protect the conveyor belting from similar wear failure caused by abrasion',
      'Lagging creates an increase in friction between the pulley and belt — needed when torque transfer is required through the pulley to the belt',
    ],
  },
]

export default function OurServices() {
  return (
    <>
      <PageHero title="Our Services" breadcrumbs={[{ label: 'Our Services' }]} />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center max-w-3xl mx-auto">
          <p className="section-title">What We Offer</p>
          <h2 className="section-heading mb-4">Comprehensive Engineering Solutions</h2>
          <p className="text-gray-500 font-body leading-relaxed">
            We provide innovative product solutions for sustainable progress. Our professional team works to increase productivity and cost-effectiveness across mining, manufacturing and heavy industrial sectors in Zimbabwe and the region.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className={`relative ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[16/10] overflow-hidden shadow-xl">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className={`absolute -bottom-3 ${i % 2 !== 0 ? '-right-3' : '-left-3'} w-24 h-24 bg-primary -z-10`} />
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="w-10 h-1 bg-primary mb-4" />
                <h2 className="font-heading font-bold text-dark text-3xl md:text-4xl leading-tight mb-5">
                  {svc.title}
                </h2>
                {svc.content.map((para, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed mb-3 font-body">{para}</p>
                ))}
                {svc.subtitle && (
                  <h4 className="font-heading font-bold text-dark text-lg mt-5 mb-3">{svc.subtitle}</h4>
                )}
                {svc.points.length > 0 && (
                  <ul className="space-y-2 mt-3">
                    {svc.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-gray-600 font-body text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="font-heading font-black text-white text-4xl uppercase mb-4">
            Need Engineering Services?
          </h3>
          <p className="text-gray-400 mb-8 font-body max-w-xl mx-auto">
            Contact our team for a free consultation and quote on any of our engineering services.
          </p>
          <Link to="/contact-us" className="btn-primary inline-flex items-center gap-2">
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}