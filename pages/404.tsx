import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Zap, Mail, Users, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-voltarian-dark text-white flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* 404 Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="text-9xl font-bold gradient-text mb-4">404</div>
              <title>Voltarian Technologies - 404</title>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Oops! <span className="gradient-text">Lost in Space?</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                The page you're looking for seems to have vanished into the digital void. 
                Don't worry though - our hosting services are always online and ready to serve you!
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link href="/" className="voltarian-button text-lg inline-flex items-center justify-center">
                <Home className="mr-2 w-5 h-5" />
                Back to Home
              </Link>
              <Link href="/contact" className="border border-voltarian-green text-voltarian-green px-8 py-3 rounded-lg hover:bg-voltarian-green hover:text-voltarian-dark transition-all duration-300 text-lg inline-flex items-center justify-center">
                <Mail className="mr-2 w-5 h-5" />
                Contact Support
              </Link>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              <Link href="/services" className="voltarian-card p-6 hover:border-voltarian-green transition-all duration-300">
                <div className="w-12 h-12 bg-voltarian-green rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-6 h-6 text-voltarian-dark" />
                </div>
                <h3 className="font-semibold mb-2">Hosting Services</h3>
                <p className="text-sm text-gray-400">Explore our Discord bot and website hosting solutions</p>
              </Link>

              <Link href="/about" className="voltarian-card p-6 hover:border-voltarian-green transition-all duration-300">
                <div className="w-12 h-12 bg-voltarian-green rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 text-voltarian-dark" />
                </div>
                <h3 className="font-semibold mb-2">About Us</h3>
                <div className="border-t border-white/10 pt-8 text-center text-gray-400">
                  <p>&copy; {new Date().getFullYear()} Voltarian Technologies. All rights reserved.</p>
                </div>
              </Link>

              <a 
                href="https://discord.gg/77eAv9UwwZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="voltarian-card p-6 hover:border-voltarian-green transition-all duration-300"
              >
                <div className="w-12 h-12 bg-voltarian-green rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <MessageSquare className="w-6 h-6 text-voltarian-dark" />
                </div>
                <h3 className="font-semibold mb-2">Join Community</h3>
                <p className="text-sm text-gray-400">Get help on our Discord server</p>
              </a>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-voltarian-green rounded-lg flex items-center justify-center">
                  <img src="/logo.svg" alt="VoltaTECH Logo" className="w-5 h-5" />
                </div>
                <span className="text-lg font-bold font-logo">VoltaTECH</span>
              </div>
              <p className="text-gray-400 text-sm">
                Need help? Contact us at <a href="mailto:support@voltaccept.com" className="text-voltarian-green hover:underline">support@voltaccept.com</a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </>
  );
};

export default Custom404;
