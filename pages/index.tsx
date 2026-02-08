import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { 
  Server, 
  Bot, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  Clock, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Lock,
  Database,
  Rocket,
  ArrowRight
} from 'lucide-react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Voltarian Technologies - Home</title>
        <meta name="description" content="Voltarian Technologies offers affordable website hosting and Discord bot hosting services with 99.9% uptime, DDoS protection, and 24/7 support." />
      </Head>

      <div className="min-h-screen bg-voltarian-dark text-white overflow-hidden">
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
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-voltarian-green transition-colors">Home</a>
                <a href="/services" className="hover:text-voltarian-green transition-colors">Services</a>
                <a href="/about" className="hover:text-voltarian-green transition-colors">About</a>
                <a href="/contact" className="hover:text-voltarian-green transition-colors">Contact</a>
                <button className="voltarian-button">Get Started</button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-voltarian-green/10 to-transparent"></div>
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Pterodactyl</span><br />
                Powered Hosting
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Affordable website and Discord bot hosting powered by Pterodactyl Panel with 99.9% uptime guarantee, 
                DDoS protection, and 24/7 expert support. Full control for both services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="voltarian-button text-lg">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </button>
                <button className="border border-voltarian-green text-voltarian-green px-8 py-3 rounded-lg hover:bg-voltarian-green hover:text-voltarian-dark transition-all duration-300 text-lg">
                  View Plans
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">99.9%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">24/7</div>
                <div className="text-gray-400">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">&lt;1ms</div>
                <div className="text-gray-400">Response Time</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our specialized hosting solutions tailored for your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="voltarian-card group"
              >
                <div className="flex items-center mb-6">
                  <div className="feature-icon mr-4 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Website Hosting</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  High-performance web hosting with SSD storage, free SSL certificates, 
                  and one-click WordPress installation.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-voltarian-green mr-3" />
                    Pterodactyl Panel Control
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-voltarian-green mr-3" />
                    NVMe SSD Storage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-voltarian-green mr-3" />
                    Free SSL Certificate
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-voltarian-green mr-3" />
                    Daily Backups
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-voltarian-green mr-3" />
                    One-Click App Installs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-voltarian-green mr-3" />
                    Free Subdomain
                  </li>
                </ul>
                <button className="voltarian-button w-full">
                  Learn More
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="voltarian-card group"
              >
                <div className="flex items-center mb-6">
                  <div className="feature-icon mr-4 group-hover:scale-110 transition-transform">
                    <Bot className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Discord Bot Hosting</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Reliable Discord bot hosting with 24/7 uptime, DDoS protection, 
                  and easy deployment through Git integration.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-voltarian-green mr-3" />
                    Pterodactyl Panel Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-voltarian-green mr-3" />
                    24/7 Uptime Guarantee
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-voltarian-green mr-3" />
                    DDoS Protection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-voltarian-green mr-3" />
                    Auto-scaling Resources
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-voltarian-green mr-3" />
                    Git Integration
                  </li>
                </ul>
                <button className="voltarian-button w-full">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-transparent to-voltarian-green/5">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Flexible <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Pay only for what you need. Scale your resources as you grow.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
              {/* Discord Bot Hosting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="pricing-card"
              >
                <div className="text-center mb-6">
                  <div className="feature-icon mx-auto mb-4">
                    <Bot className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Discord Bot Hosting</h3>
                </div>
                
                <div className="text-center mb-6 p-4 border border-voltarian-green/30 rounded-lg">
                  <div className="text-2xl font-bold gradient-text mb-2">$0.75<span className="text-lg text-gray-400">/month</span></div>
                  <div className="text-sm text-gray-300 mb-4">Base Plan</div>
                  <div className="text-xs text-gray-400">512MB RAM • 4GB Storage</div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="text-sm text-voltarian-green font-semibold mb-2">Add Resources:</div>
                    <div className="text-xs text-gray-300">+$0.75 per 512MB RAM</div>
                    <div className="text-xs text-gray-300">+$0.75 per 1GB Storage</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    Pterodactyl Panel Control
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    24/7 Uptime Guarantee
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    DDoS Protection
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    Git Integration
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    Free Subdomain
                  </li>
                </ul>
                <button className="voltarian-button w-full">
                  Get Bot Hosting
                </button>
              </motion.div>

              {/* Website Hosting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="pricing-card featured"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-voltarian-green text-voltarian-dark px-4 py-1 rounded-full text-sm font-semibold">
                    POPULAR
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="feature-icon mx-auto mb-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Website Hosting</h3>
                </div>
                
                <div className="text-center mb-6 p-4 border border-voltarian-green/30 rounded-lg">
                  <div className="text-2xl font-bold gradient-text mb-2">$2<span className="text-lg text-gray-400">/month</span></div>
                  <div className="text-sm text-gray-300 mb-4">Base Plan</div>
                  <div className="text-xs text-gray-400">2GB RAM • 40GB Storage</div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="text-sm text-voltarian-green font-semibold mb-2">Add Resources:</div>
                    <div className="text-xs text-gray-300">+$1.25 per 1GB RAM</div>
                    <div className="text-xs text-gray-300">+$1.25 per 3.2GB Storage</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    Pterodactyl Panel Control
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    NVMe SSD Storage
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    Free SSL Certificate
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    Daily Backups
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-voltarian-green mr-2" />
                    Free Subdomain
                  </li>
                </ul>
                <button className="voltarian-button w-full">
                  Get Website Hosting
                </button>
              </motion.div>
            </div>

            <div className="text-center">
              <p className="text-gray-300 mb-4">
                Build your custom plan! Contact us for personalized resource configurations
              </p>
              <button className="voltarian-button">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose <span className="gradient-text">VoltaTECH</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We provide industry-leading features to ensure your success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Zap, title: "Lightning Fast", description: "NVMe SSD storage and optimized servers for blazing fast performance" },
                { icon: Shield, title: "DDoS Protection", description: "Advanced DDoS mitigation keeping your services online 24/7" },
                { icon: Clock, title: "99.9% Uptime", description: "Industry-leading uptime guarantee with SLA backing" },
                { icon: Users, title: "24/7 Support", description: "Expert technical support available around the clock" },
                { icon: Lock, title: "Secure", description: "Enterprise-grade security with regular updates and monitoring" },
                { icon: TrendingUp, title: "Scalable", description: "Easy scaling as your business grows without downtime" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="voltarian-card group"
                >
                  <div className="feature-icon mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of satisfied customers who trust VoltaTECH for affordable hosting needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="voltarian-button text-lg">
                  Get Started Now
                </button>
                <button className="border border-voltarian-green text-voltarian-green px-8 py-3 rounded-lg hover:bg-voltarian-green hover:text-voltarian-dark transition-all duration-300 text-lg">
                  Contact Sales
                </button>
              </div>
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
                  Premium hosting solutions for websites and Discord bots.
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
