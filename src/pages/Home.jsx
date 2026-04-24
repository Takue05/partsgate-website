import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Award, Clock, Wrench, Shield, FileText, Tag } from 'lucide-react'
import Logo from '../components/Logo'

const services = [
  {
    title: 'Pulley / Drum Lagging',
    desc: 'Protecting pulleys from premature failure while increasing friction between pulley and belt for optimal torque transfer.',
    img: '/images/services/pulley-lagging.png',
  },
  {
    title: 'Plant Maintenance Service',
    desc: 'Engineering Maintenance Services, Predictive/Preventive Building Maintenance, and Capital Planning for effective asset management.',
    img: '/images/home/plant-maintance.png',
  },
  {
    title: 'Hot & Cold Vulcanizing',
    desc: 'State-of-the-art vulcanizing equipment handling up to 1500mm splice length for steel and plied conveyor belting.',
    img: '/images/home/vulcanizing.png',
  },
  {
    title: 'Conveyor Systems',
    desc: 'Design, manufacture, installation and maintenance. Conveyor belt management, splicing, audits and 24-hour emergency services.',
    img: '/images/home/conveyor-systems.png',
  },
  {
    title: 'Wear Resistant Lining – Rubber',
    desc: 'Rubber lining for excellent resistance to corrosive and abrasive chemicals. Noise reduction, thermal insulation and product protection.',
    img: '/images/home/rubber-linning.png',
  },
  {
    title: 'Supplier of Idler Rollers',
    desc: 'High quality conveyor idlers of all sizes for mining, heavy manufacturing, agro processing, food and construction industries.',
    img: '/images/home/idler-rollers.png',
  },
  {
    title: 'Wear Resistant Lining – Ceramic',
    desc: 'Alumina ceramic tile lining solutions that extend equipment life, keeping your systems at maximum operational level.',
    img: '/images/home/ceramic-lining.png',
  },
  {
    title: 'Shaft Laser Alignment',
    desc: 'Precision laser alignment services that significantly reduce operating and maintenance costs. Protecting machinery from misalignment damage.',
    img: '/images/home/shaft-laser-1.png',
  },
]

const stats = [
  { value: '20+', label: 'Years Experience', icon: Clock },
  { value: '50+', label: 'Projects Completed', icon: CheckCircle },
  { value: '10+', label: 'Expert Staff', icon: Users },
  { value: '20+', label: 'Industry Clients', icon: Award },
]

const clients = [
  'Zimplats', 'Mimosa', 'Unki Mine', 'Metallon Gold',
  'Lafarge Zimbabwe', 'ZESA', 'Hwange Colliery', 'Delta Beverages',
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-dark overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero/image.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/40" />
        {/* Left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />

        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <div className="mb-8">
              <Logo size="lg" variant="light" />
            </div>
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary px-4 py-2 text-xs font-heading font-semibold uppercase tracking-widest mb-6">
              <Wrench size={14} />
              Zimbabwe's Engineering Leaders
            </div>
            <h1 className="font-heading font-black text-white leading-none mb-6">
              <span className="block text-6xl md:text-8xl">YOUR</span>
              <span className="block text-6xl md:text-8xl text-primary">ENGINEERING</span>
              <span className="block text-4xl md:text-5xl mt-1 text-gray-200">& CONVEYOR SPECIALIST</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl font-body">
                Partsgate Engineering is Zimbabwe's leading engineering company specialising in conveyor systems, wear resistant lining, plant maintenance and heavy industry engineering. Serving mining, manufacturing and agro-processing sectors since 2003.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/our-services" className="btn-primary flex items-center gap-2">
                Our Services <ArrowRight size={16} />
              </Link>
              <Link to="/contact-us" className="btn-outline">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary/90 py-3 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-6 md:gap-10 text-white font-heading font-semibold text-sm uppercase tracking-widest justify-center md:justify-start">
            {['Conveyor Systems', 'Wear Resistant Lining', 'Plant Maintenance', 'Shaft Laser Alignment', 'Hot & Cold Vulcanizing'].map((s, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full inline-block" />{s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-dark-2 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div className="font-heading font-black text-5xl text-primary">{value}</div>
                <div className="font-heading font-semibold text-white text-sm uppercase tracking-widest mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-title">Who We Are</p>
              <h2 className="section-heading mb-6">
                Zimbabwe's Premier Heavy Industry Engineering Company
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 font-body">
                Partsgate Engineering (Handon Enterprises Pvt Ltd) is a wholly owned Zimbabwean engineering company incorporated in May 2013. With over twenty years of experience in engineering service provision, we supply and serve the mining, manufacturing, power generation, construction and agro-processing sectors.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 font-body">
                We specialise in the provision of engineering designs, manufacture and construction of heavy industries and mining plants including conveyor systems, steelworks, pipeline equipment and associated installations. Our highly qualified team has served major clients including Zimplats, Mimosa, Unki, Metallon Gold, Lafarge Zimbabwe and many more.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Engineering Designs',
                  'Conveyor Manufacture',
                  'Plant Installations',
                  '24/7 Emergency Services',
                  'Belt Audits & Surveys',
                  'Certified Technicians',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-body text-gray-700">
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link to="/about-us" className="btn-primary inline-flex items-center gap-2">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/home/image-1.png"
                  alt="Engineering facility"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-primary/10 border-2 border-primary/30 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-dark/5 border border-dark/10 -z-10" />
              {/* Badge */}
              <div className="absolute -bottom-6 left-6 bg-primary text-white px-6 py-4 shadow-xl">
                <div className="font-heading font-black text-3xl leading-none">20+</div>
                <div className="font-heading font-semibold text-xs uppercase tracking-widest mt-1">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-title">What We Do</p>
            <h2 className="section-heading">Our Services</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-body">
              We provide innovative engineering solutions for sustainable progress. Our professional team works to increase productivity and cost-effectiveness for heavy industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="service-card bg-white group overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="overflow-hidden h-44">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="service-img w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-dark text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-body line-clamp-3">{svc.desc}</p>
                  <Link to="/our-services" className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold font-heading uppercase tracking-wide hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/our-services" className="btn-primary inline-flex items-center gap-2">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
          <img
            src="/images/home/img-2.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="section-title">Why Choose Us</p>
            <h2 className="section-heading text-white mb-10">
              We Provide Innovative Solutions for Sustainable Progress
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Reliable Service',
                  desc: 'Our trained field technicians provide 24-hour emergency services and routine inspections to keep your operations running.',
                  Icon: Shield,
                },
                {
                  title: 'Certified Mechanics',
                  desc: 'Our team of certified and experienced mechanics have worked across mining, manufacturing and industrial environments.',
                  Icon: Award,
                },
                {
                  title: 'No Hidden Costs',
                  desc: 'Transparent pricing with comprehensive reports and recommendations. What you see is what you get.',
                  Icon: FileText,
                },
                {
                  title: 'Affordable Prices',
                  desc: 'Competitive pricing without compromising quality. We work to increase productivity and cost-effectiveness on the market.',
                  Icon: Tag,
                },
              ].map(({ title, desc, Icon }) => (
                <div key={title} className="bg-dark-2 border border-dark-3 p-6 hover:border-primary transition-colors group">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-xl mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-body">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-heading font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Trusted by Zimbabwe's Leading Companies
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {clients.map((c) => (
              <span key={c} className="font-heading font-bold text-xl text-gray-300 hover:text-primary transition-colors cursor-default tracking-wide uppercase">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-white text-4xl md:text-5xl uppercase mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto font-body">
            Contact our team today for expert engineering solutions, project quotes and 24-hour emergency services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact-us" className="bg-white text-primary font-heading font-bold uppercase tracking-wide px-8 py-3 text-sm hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Contact Us <ArrowRight size={16} />
            </Link>
            <a href="tel:+263777477333" className="border-2 border-white text-white font-heading font-bold uppercase tracking-wide px-8 py-3 text-sm hover:bg-white hover:text-primary transition-colors inline-flex items-center gap-2">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}