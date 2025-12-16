/**
 * TurboFlop Contact Page
 * Interactive contact form and company information
 * Author: wanshazamirul
 */

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Github, Twitter, Instagram, Linkedin, Zap } from 'lucide-react'

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      content: "defygravity@turboflop.space",
      color: "cyan"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Global Hotline",
      content: "+1 (555) ZERO-G-TURBO",
      color: "violet"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "HQ Location",
      content: "Quantum Valley, Mars Colony Alpha-1",
      color: "purple"
    }
  ]

  const socialLinks = [
    { icon: <Twitter className="w-6 h-6" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="w-6 h-6" />, href: "#", name: "Instagram" },
    { icon: <Linkedin className="w-6 h-6" />, href: "#", name: "LinkedIn" },
    { icon: <Github className="w-6 h-6" />, href: "#", name: "GitHub" }
  ]

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      {mounted && (
        <div className="absolute inset-0">
          {Array.from({ length: 40 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-500/5 to-violet-500/5"
              style={{
                width: 60 + (i * 53 % 140),
                height: 60 + (i * 67 % 140),
                left: `${(i * 163) % 100}%`,
                top: `${(i * 79) % 100}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{
                duration: 12 + i * 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-40 px-8 py-6 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <nav className="flex justify-between items-center w-full px-8">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            TURBOFLOP
          </a>
          <div className="flex gap-8">
            <a href="/technology" className="text-sm text-gray-300 hover:text-white transition-colors">Technology</a>
            <a href="/experience" className="text-sm text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="/mission" className="text-sm text-gray-300 hover:text-white transition-colors">Mission</a>
            <a href="/contact" className="text-sm text-cyan-400 font-bold">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-20">
        <div className="text-center max-w-6xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center mb-8">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <MessageSquare className="w-20 h-20 text-cyan-400" />
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-8">
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                CONNECT WITH
              </span>
              <span className="block bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                THE FUTURE
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Ready to <span className="text-cyan-400 font-bold">defy gravity</span>?
              Let's talk about how TurboFlop can <span className="text-violet-400 font-bold">revolutionize your performance</span>.
            </p>

            <div className="flex justify-center gap-8">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl font-bold text-cyan-400">24/7</div>
                <div className="text-gray-400">Support</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl font-bold text-violet-400">150+</div>
                <div className="text-gray-400">Countries</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl font-bold text-purple-400">1M+</div>
                <div className="text-gray-400">Athletes</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 backdrop-blur-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgb(6, 182, 212)",
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)"
                }}
              >
                <div className={`text-${info.color}-400 mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-${info.color}-400/10 mx-auto`}>
                  {info.icon}
                </div>

                <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r from-${info.color}-400 to-${info.color}-600 bg-clip-text text-transparent`}>
                  {info.title}
                </h3>

                <p className="text-gray-300">
                  {info.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-black text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              SEND US A MESSAGE
            </span>
          </motion.h2>

          <motion.div
            className="bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-12 rounded-3xl border border-violet-500/20 backdrop-blur-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {submitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-3xl font-bold text-cyan-400 mb-4">Message Sent!</h3>
                <p className="text-gray-300">We'll get back to you faster than a TurboFlop sprint!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="athlete">Athlete Partnership</option>
                    <option value="media">Media & Press</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="technical">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how you want to defy gravity..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl font-bold text-lg hover:from-violet-700 hover:to-cyan-700 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                  <Zap className="w-5 h-5" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="relative px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-black mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              FOLLOW THE REVOLUTION
            </span>
          </motion.h2>

          <p className="text-xl text-gray-300 mb-12">
            Join our community of gravity-defiers and stay updated on the latest breakthroughs.
          </p>

          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-4 rounded-full bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-violet-500/20 hover:border-cyan-400 transition-all"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                <div className="text-cyan-400">{social.icon}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-8 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            TURBOFLOP
          </div>
          <p className="text-gray-400">
            Ready to take the leap? Contact us today.
          </p>
        </div>
      </footer>
    </div>
  )
}