import React, { useState } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Mail, Phone, MapPin, Clock, Menu, X, MessageSquare, Send } from 'lucide-react'

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Head>
        <title>Voltarian Technologies - Contact</title>
        <meta name="description" content="Contact VoltaTECH for affordable hosting solutions. Reach out 24/7 for support, sales inquiries, or technical questions." />
      </Head>

      <div className="min-h-screen bg-voltarian-dark text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-voltarian-green rounded-lg flex items-center justify-center">
                  <img src="/logo.svg" alt="VoltaTECH Logo" className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold font-logo">VoltaTECH</span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="hover:text-voltarian-green transition-colors">Home</a>
                <a href="/services" className="hover:text-voltarian-green transition-colors">Services</a>
                <a href="/about" className="hover:text-voltarian-green transition-colors">About</a>
                <a href="/contact" className="text-voltarian-green transition-colors">Contact</a>
                <button className="voltarian-button">Get Started</button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-white hover:text-voltarian-green transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden border-t border-white/10 mt-4 pt-4"
                >
                  <div className="flex flex-col space-y-4">
                    <a href="/" className="hover:text-voltarian-green transition-colors">Home</a>
                    <a href="/services" className="hover:text-voltarian-green transition-colors">Services</a>
                    <a href="/about" className="hover:text-voltarian-green transition-colors">About</a>
                    <a href="/contact" className="text-voltarian-green transition-colors">Contact</a>
                    <button className="voltarian-button w-full">Get Started</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Have questions about our hosting services? Our team is here to help 24/7. 
                Reach out anytime and we'll get back to you as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="voltarian-card text-center group"
              >
                <div className="feature-icon mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Support</h3>
                <p className="text-gray-300 mb-4">Get help via email</p>
                <a href="mailto:support@voltaccept.com" className="text-voltarian-green hover:text-emerald-400 transition-colors">
                  support@voltaccept.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="voltarian-card text-center group"
              >
                <div className="feature-icon mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                <p className="text-gray-300 mb-4">Chat with our team</p>
                <button className="text-voltarian-green hover:text-emerald-400 transition-colors">
                  Start Chat
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="voltarian-card text-center group"
              >
                <div className="feature-icon mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Response Time</h3>
                <p className="text-gray-300 mb-4">Average response</p>
                <div className="text-2xl font-bold gradient-text">&lt; 2 hours</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-voltarian-green/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Send us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-effect rounded-2xl p-8 border border-white/20"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-voltarian-green transition-colors text-white placeholder-gray-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-voltarian-green transition-colors text-white placeholder-gray-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-voltarian-green transition-colors text-white placeholder-gray-400"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-voltarian-green transition-colors text-white placeholder-gray-400 resize-none"
                      placeholder="Tell us more about your needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="voltarian-button w-full text-lg flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Quick answers to common questions about our hosting services
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "What hosting plans do you offer?",
                  answer: "We offer website hosting starting at $4.99/month and Discord bot hosting with various tiers to suit different needs. All plans include 99.9% uptime guarantee and 24/7 support."
                },
                {
                  question: "Do you offer refunds?",
                  answer: "Yes, we offer a 30-day money-back guarantee for all new customers. If you're not satisfied with our service, you can request a full refund within the first 30 days."
                },
                {
                  question: "How quickly can I get started?",
                  answer: "Instant setup! Once you sign up and choose your plan, your hosting account is activated immediately. You can start deploying your websites or Discord bots right away."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, PayPal, and cryptocurrency payments including Bitcoin and Ethereum."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="voltarian-card"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-voltarian-green rounded-lg flex items-center justify-center">
                    <img src="/logo.svg" alt="VoltaTECH Logo" className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-bold font-logo">VoltaTECH</span>
                </div>
                <p className="text-gray-400">
                  Affordable hosting solutions for websites and Discord bots.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/services" className="hover:text-voltarian-green transition-colors">Website Hosting</a></li>
                  <li><a href="/services" className="hover:text-voltarian-green transition-colors">Discord Bot Hosting</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/about" className="hover:text-voltarian-green transition-colors">About Us</a></li>
                  <li><a href="/contact" className="hover:text-voltarian-green transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-voltarian-green transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-voltarian-green transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-voltarian-green transition-colors">Status Page</a></li>
                  <li><a href="https://discord.gg/77eAv9UwwZ" target="_blank" rel="noopener noreferrer" className="hover:text-voltarian-green transition-colors">Community</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Voltarian Technologies. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
