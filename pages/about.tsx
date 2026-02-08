import React, { useState } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Users, Target, Award, Globe, Shield, Menu, X } from 'lucide-react'

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Voltarian Technologies - About</title>
        <meta name="description" content="Learn about Voltarian Technologies - your trusted partner for affordable website and Discord bot hosting since 2026." />
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
                <a href="/about" className="text-voltarian-green transition-colors">About</a>
                <a href="/contact" className="hover:text-voltarian-green transition-colors">Contact</a>
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
                    <a href="/about" className="text-voltarian-green transition-colors">About</a>
                    <a href="/contact" className="hover:text-voltarian-green transition-colors">Contact</a>
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
                About <span className="gradient-text">VoltaTECH</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your partner for affordable hosting solutions since 2026. 
                We're dedicated to providing reliable, fast, and secure hosting services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <p className="text-gray-300 mb-6">
                  Founded in 2026, VoltaTECH started with a simple mission: to provide affordable 
                  and reliable hosting solutions for everyone. We saw a gap in the market where 
                  businesses and developers had to choose between quality and affordability.
                </p>
                <p className="text-gray-300 mb-6">
                  Today, we host thousands of websites and Discord bots, serving customers from 
                  over 50 countries. Our commitment to excellence and customer satisfaction remains 
                  stronger than ever.
                </p>
                <p className="text-gray-300">
                  We believe that great hosting shouldn't break the bank. That's why we offer 
                  competitive pricing without compromising on quality, security, or performance.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="voltarian-card text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">2026</div>
                  <div className="text-gray-400">Founded</div>
                </div>
                <div className="voltarian-card text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">New</div>
                  <div className="text-gray-400">Company</div>
                </div>
                <div className="voltarian-card text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
                  <div className="text-gray-400">Uptime Goal</div>
                </div>
                <div className="voltarian-card text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-voltarian-green/5">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Target, title: "Affordability", description: "Quality hosting at prices everyone can afford" },
                { icon: Shield, title: "Reliability", description: "99.9% uptime guarantee with enterprise-grade infrastructure" },
                { icon: Users, title: "Customer Focus", description: "24/7 support from experts who actually care" },
                { icon: Globe, title: "Global Reach", description: "Data centers worldwide for optimal performance" },
                { icon: Zap, title: "Innovation", description: "Always improving our services and technology" },
                { icon: Award, title: "Excellence", description: "Committed to delivering the best hosting experience" }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="voltarian-card group"
                >
                  <div className="feature-icon mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-2xl p-12 text-center max-w-4xl mx-auto border border-voltarian-green/30"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Join VoltaTECH?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your hosting journey with us today and experience the difference
              </p>
              <button className="voltarian-button text-lg">
                Get Started Now
              </button>
            </motion.div>
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
