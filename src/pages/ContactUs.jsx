import { useState } from 'react'
import { Phone, Mail, MapPin, Facebook, Youtube, Send, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submit
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', message: '' })
    }, 1200)
  }

  return (
    <>
      <PageHero title="Contact Us" breadcrumbs={[{ label: 'Contact Us' }]} />

      {/* Contact section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-title">Get In Touch</p>
            <h2 className="section-heading">We'd Love to Hear From You</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto font-body">
              Whether you need a quote, have a technical question, or require 24-hour emergency engineering support, our team is ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info cards */}
            <div className="lg:col-span-1 space-y-5">
              <div className="bg-dark text-white p-6 flex gap-5 group hover:bg-primary transition-colors duration-300">
                <div className="flex-shrink-0 mt-1">
                  <MapPin size={22} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base uppercase tracking-wide mb-2">Our Address</h4>
                  <p className="text-gray-300 text-sm font-body leading-relaxed group-hover:text-white/90 transition-colors">
                    Unit No 32E Kenmark Cres<br />
                    Bluffhill Industrial Park<br />
                    Harare, Zimbabwe
                  </p>
                </div>
              </div>

              <div className="bg-dark text-white p-6 flex gap-5 group hover:bg-primary transition-colors duration-300">
                <div className="flex-shrink-0 mt-1">
                  <Phone size={22} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base uppercase tracking-wide mb-2">Phone Numbers</h4>
                  <div className="text-gray-300 text-sm font-body space-y-1 group-hover:text-white/90 transition-colors">
                    <a href="tel:+263777851134" className="block hover:text-white">+263 777 851 134</a>
                    <a href="tel:+263773474208" className="block hover:text-white">+263 773 474 208</a>
                    <a href="tel:+263242310086" className="block hover:text-white">+263 242 310086/88</a>
                    <a href="tel:+2638644087595" className="block hover:text-white">+263 8644 087595</a>
                  </div>
                </div>
              </div>

              <div className="bg-dark text-white p-6 flex gap-5 group hover:bg-primary transition-colors duration-300">
                <div className="flex-shrink-0 mt-1">
                  <Mail size={22} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base uppercase tracking-wide mb-2">Email</h4>
                  <a
                    href="mailto:sales@oracsystems.co.zw"
                    className="text-gray-300 text-sm font-body hover:text-white group-hover:text-white/90 transition-colors"
                  >
                    sales@oracsystems.co.zw
                  </a>
                </div>
              </div>

              {/* Social media */}
              <div className="bg-primary p-6">
                <h4 className="font-heading font-bold text-white text-base uppercase tracking-wide mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="http://www.facebook.com/oracsystems" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="https://x.com/OracSystems" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="http://www.youtube.com/channel/UCGI1teERVbIS0bXV6A74slQ" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                    <Youtube size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="h-full flex items-center justify-center bg-gray-50 border border-gray-100 p-16 text-center">
                  <div>
                    <div className="flex justify-center mb-5">
                      <CheckCircle size={56} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-dark text-3xl mb-3">Message Sent!</h3>
                    <p className="text-gray-500 font-body max-w-sm mx-auto">
                      Thank you for contacting Orac Systems. Our team will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 border border-gray-100 p-8 md:p-10">
                  <h3 className="font-heading font-bold text-dark text-2xl uppercase mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-heading font-semibold uppercase tracking-widest text-gray-500 mb-2">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full border border-gray-200 bg-white px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-heading font-semibold uppercase tracking-widest text-gray-500 mb-2">
                          Email Address <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full border border-gray-200 bg-white px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-semibold uppercase tracking-widest text-gray-500 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+263..."
                        className="w-full border border-gray-200 bg-white px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-semibold uppercase tracking-widest text-gray-500 mb-2">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full border border-gray-200 bg-white px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 bg-gray-200 relative overflow-hidden">
        <iframe
          title="Orac Systems Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.3!2d30.972!3d-17.8252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzMwLjciUyAzMMKwNTgnMTkuMiJF!5e0!3m2!1sen!2szw!4v1620000000000!5m2!1sen!2szw"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 pointer-events-none border-t-4 border-primary" />
      </section>
    </>
  )
}