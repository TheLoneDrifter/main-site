import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Globe, Bot, CheckCircle, ArrowRight, Gamepad2, Sword, Sparkles, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Voltarian Technologies - Services</title>
        <meta name="description" content="Explore VoltaTECH's affordable hosting services including website hosting, Discord bot hosting, VPS, and dedicated servers with 99.9% uptime." />
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
                <a href="/services" className="text-voltarian-green transition-colors">Services</a>
                <a href="/about" className="hover:text-voltarian-green transition-colors">About</a>
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
                    <a href="/services" className="text-voltarian-green transition-colors">Services</a>
                    <a href="/about" className="hover:text-voltarian-green transition-colors">About</a>
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
                Pterodactyl <span className="gradient-text">Powered</span> Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive hosting solutions powered by Pterodactyl Panel designed for performance, reliability, and affordability. 
                From personal websites to enterprise applications, we've got you covered.
              </p>
              <button className="voltarian-button text-lg">
                View All Plans
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Website Hosting */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <div className="feature-icon mx-auto mb-6">
                  <Globe className="w-8 h-8" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Website <span className="gradient-text">Hosting</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Fast, reliable, and secure hosting for your websites with cutting-edge technology
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-6">Features Included</h3>
                  <div className="space-y-4">
                    {[
                      "Pterodactyl Panel for easy server management",
                      "NVMe SSD Storage for blazing fast performance",
                      "Free SSL certificates for all domains",
                      "Daily automated backups with 1-click restore",
                      "99.9% uptime guarantee with SLA",
                      "One-click WordPress and app installations",
                      "Global CDN for faster content delivery",
                      "DDoS protection and advanced security",
                      "Free subdomain (username.voltaccept.com)"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-voltarian-green mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-2 gap-6"
                >
                  <div className="voltarian-card text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">$2</div>
                    <div className="text-gray-400 mb-2">Website Base</div>
                    <div className="text-sm text-gray-300">2GB RAM • 40GB Storage</div>
                    <div className="text-xs text-voltarian-green mt-1">+$1.25 per 1GB RAM/3.2GB Storage</div>
                  </div>
                  <div className="voltarian-card text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">$14.50</div>
                    <div className="text-gray-400 mb-2">Website Premium</div>
                    <div className="text-sm text-gray-300">12GB RAM • 108.8GB Storage</div>
                    <div className="text-xs text-voltarian-green mt-1">+$1.25 per 1GB RAM/3.2GB Storage</div>
                  </div>
                  <div className="voltarian-card text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
                    <div className="text-gray-400 mb-2">Uptime</div>
                    <div className="text-sm text-gray-300">guaranteed</div>
                  </div>
                  <div className="voltarian-card text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                    <div className="text-gray-400 mb-2">Support</div>
                    <div className="text-sm text-gray-300">expert assistance</div>
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <button className="voltarian-button text-lg">
                  Get Website Hosting
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Discord Bot Hosting */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-voltarian-green/5">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <div className="feature-icon mx-auto mb-6">
                  <Bot className="w-8 h-8" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Discord Bot <span className="gradient-text">Hosting</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Keep your Discord bots online 24/7 with our specialized hosting infrastructure
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="order-2 md:order-1"
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div className="voltarian-card text-center">
                      <div className="text-3xl font-bold gradient-text mb-2">$0.75</div>
                      <div className="text-gray-400 mb-2">Bot Base</div>
                      <div className="text-sm text-gray-300">512MB RAM • 4GB Storage</div>
                      <div className="text-xs text-voltarian-green mt-1">+$0.75 per 512MB RAM/1GB Storage</div>
                    </div>
                    <div className="voltarian-card text-center">
                      <div className="text-3xl font-bold gradient-text mb-2">$2.25</div>
                      <div className="text-gray-400 mb-2">Bot Premium</div>
                      <div className="text-sm text-gray-300">2GB RAM • 8GB Storage</div>
                      <div className="text-xs text-voltarian-green mt-1">+$0.75 per 512MB RAM/1GB Storage</div>
                    </div>
                    <div className="voltarian-card text-center">
                      <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                      <div className="text-gray-400 mb-2">Uptime</div>
                      <div className="text-sm text-gray-300">guaranteed</div>
                    </div>
                    <div className="voltarian-card text-center">
                      <div className="text-3xl font-bold gradient-text mb-2">Git</div>
                      <div className="text-gray-400 mb-2">Integration</div>
                      <div className="text-sm text-gray-300">auto-deploy</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="order-1 md:order-2"
                >
                  <h3 className="text-2xl font-bold mb-6">Bot Hosting Features</h3>
                  <div className="space-y-4">
                    {[
                      "Pterodactyl Panel for complete server control",
                      "24/7 online guarantee with automatic restarts",
                      "Easy Git integration for seamless deployments",
                      "Support for Node.js, Python, Java, and more",
                      "Real-time monitoring and performance metrics",
                      "Automatic scaling based on bot usage",
                      "DDoS protection and secure environment",
                      "Database hosting included (MySQL, PostgreSQL, MongoDB)",
                      "Free subdomain (username.voltaccept.com)"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-voltarian-green mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="text-center">
                <button className="voltarian-button text-lg">
                  Get Bot Hosting
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </button>
              </div>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose the perfect hosting solution for your needs and start building today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="voltarian-button text-lg">
                  View All Plans
                </button>
                <button className="border border-voltarian-green text-voltarian-green px-8 py-3 rounded-lg hover:bg-voltarian-green hover:text-voltarian-dark transition-all duration-300 text-lg">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Coming <span className="gradient-text">Soon</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                More hosting services powered by Pterodactyl Panel are on the way!
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Minecraft Server Hosting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="voltarian-card relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    COMING SOON
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-voltarian-green rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Gamepad2 className="w-8 h-8 text-voltarian-dark" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Minecraft Server Hosting</h3>
                  <p className="text-gray-400">
                    High-performance Minecraft servers with instant setup and DDoS protection
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="voltarian-card text-center">
                      <div className="text-2xl font-bold gradient-text mb-2">?</div>
                      <div className="text-gray-400 mb-2">Starting from</div>
                      <div className="text-sm text-gray-300">TBA</div>
                    </div>
                    <div className="voltarian-card text-center">
                      <div className="text-2xl font-bold gradient-text mb-2">1GB+</div>
                      <div className="text-gray-400 mb-2">RAM</div>
                      <div className="text-sm text-gray-300">starting plans</div>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    Pterodactyl Panel Control
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    One-Click Modpacks
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    Automatic Backups
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    Free Subdomain
                  </li>
                </ul>
                <button className="w-full border border-voltarian-green text-voltarian-green py-3 rounded-lg hover:bg-voltarian-green hover:text-voltarian-dark transition-all duration-300" disabled>
                  Notify Me When Available
                </button>
              </motion.div>

              {/* Terraria Server Hosting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="voltarian-card relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    COMING SOON
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-voltarian-green rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Sword className="w-8 h-8 text-voltarian-dark" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Terraria Server Hosting</h3>
                  <p className="text-gray-400">
                    Reliable Terraria servers with low latency and easy configuration
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="voltarian-card text-center">
                      <div className="text-2xl font-bold gradient-text mb-2">?</div>
                      <div className="text-gray-400 mb-2">Starting from</div>
                      <div className="text-sm text-gray-300">TBA</div>
                    </div>
                    <div className="voltarian-card text-center">
                      <div className="text-2xl font-bold gradient-text mb-2">2GB+</div>
                      <div className="text-gray-400 mb-2">RAM</div>
                      <div className="text-sm text-gray-300">starting plans</div>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    Pterodactyl Panel Control
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    World Backup System
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    Plugin Support
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    Free Subdomain
                  </li>
                </ul>
                <button className="w-full border border-voltarian-green text-voltarian-green py-3 rounded-lg hover:bg-voltarian-green hover:text-voltarian-dark transition-all duration-300" disabled>
                  Notify Me When Available
                </button>
              </motion.div>

              {/* Hytale Server Hosting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="voltarian-card relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    COMING SOON
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-voltarian-green rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Sparkles className="w-8 h-8 text-voltarian-dark" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Hytale Server Hosting</h3>
                  <p className="text-gray-400">
                    Next-gen sandbox game servers with optimized performance
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="voltarian-card text-center">
                      <div className="text-2xl font-bold gradient-text mb-2">?</div>
                      <div className="text-gray-400 mb-2">Starting from</div>
                      <div className="text-sm text-gray-300">TBA</div>
                    </div>
                    <div className="voltarian-card text-center">
                      <div className="text-2xl font-bold gradient-text mb-2">4GB+</div>
                      <div className="text-gray-400 mb-2">RAM</div>
                      <div className="text-sm text-gray-300">starting plans</div>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    Pterodactyl Panel Control
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    World Backup System
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    Mod Support Ready
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    Free Subdomain
                  </li>
                </ul>
                <button className="w-full border border-voltarian-green text-voltarian-green py-3 rounded-lg hover:bg-voltarian-green hover:text-voltarian-dark transition-all duration-300" disabled>
                  Notify Me When Available
                </button>
              </motion.div>
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
