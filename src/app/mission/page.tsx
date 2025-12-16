/**
 * TurboFlop Mission Page
 * Company vision, values, and roadmap
 * Author: wanshazamirul
 */

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Globe, Users, Lightbulb, Target, Award, Sparkles, Infinity as InfinityIcon } from 'lucide-react'

export default function MissionPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const missionValues = [
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Break Boundaries",
      description: "Push the limits of human potential by defying gravity itself. We believe every athlete deserves to experience the impossible.",
      color: "purple"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Impact",
      description: " democratize elite performance. Make gravity-defying technology accessible to every human on Earth.",
      color: "cyan"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Human First",
      description: "Enhance human capability without compromising our essence. Technology should amplify, not replace, human spirit.",
      color: "pink"
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Innovation Obsession",
      description: "Never settle for incremental improvements. We chase quantum leaps in performance technology.",
      color: "violet"
    }
  ]

  const milestones = [
    { year: "2025", event: "TurboFlop Founded", achievement: "Quantum-foam discovery" },
    { year: "2026", event: "First Prototype", achievement: "83.3% gravity reduction achieved" },
    { year: "2027", event: "Olympic Trials", achievement: "47 world records shattered" },
    { year: "2028", event: "Global Launch", achievement: "10 million athletes empowered" },
    { year: "2030", event: "Space Program", achievement: "Mars colony footwear contract" },
    { year: "2035", event: "Zero-G Olympics", achievement: "Host first anti-gravity games" }
  ]

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      {mounted && (
        <div className="absolute inset-0">
          {Array.from({ length: 35 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-500/8"
              style={{
                width: 80 + (i * 31 % 170),
                height: 80 + (i * 43 % 170),
                left: `${(i * 179) % 100}%`,
                top: `${(i * 97) % 100}%`,
              }}
              animate={{
                x: [0, 40, -40, 0],
                y: [0, -40, 40, 0],
                opacity: [0.08, 0.2, 0.08]
              }}
              transition={{
                duration: 15 + i * 2,
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
            <a href="/mission" className="text-sm text-purple-400 font-bold">Mission</a>
            <a href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
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
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Rocket className="w-20 h-20 text-purple-400" />
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-8">
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                DEFY GRAVITY
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                REDEFINE HUMAN
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Our mission is to <span className="text-purple-400 font-bold">liberate human movement</span> from
              the constraints of gravity. We're not just creating shoes -
              we're <span className="text-pink-400 font-bold">engineering evolution</span>.
            </p>

            <motion.div
              className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <InfinityIcon className="w-6 h-6" />
              <span className="font-bold text-lg">Mission Since 2025</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-12 rounded-3xl border border-purple-500/20 backdrop-blur-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                OUR MANIFESTO
              </span>
            </h2>

            <div className="text-xl text-gray-300 leading-relaxed space-y-4">
              <p>
                <span className="text-purple-400 font-bold">Gravity is not a limitation.</span> It's a challenge.
                For millennia, humans have been bound to Earth's pull. Today, we break those chains.
              </p>
              <p>
                We believe every person deserves to experience the <span className="text-pink-400 font-bold">freedom of weightless movement</span>.
                Whether you're an Olympic athlete chasing milliseconds or someone taking their first steps,
                you deserve to feel unstoppable.
              </p>
              <p>
                TurboFlop isn't just footwear. It's the <span className="text-cyan-400 font-bold">dawn of human evolution</span>.
                We're not enhancing performance - we're expanding what it means to be human.
              </p>
            </div>

            <div className="mt-8 flex justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400">∞</div>
                <div className="text-sm text-gray-400">Possibilities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400">0g</div>
                <div className="text-sm text-gray-400">Limitations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-gray-400">Human Potential</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-black text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CORE VALUES
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {missionValues.map((value, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 backdrop-blur-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgb(168, 85, 247)",
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)"
                }}
              >
                <div className={`text-${value.color}-400 mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-${value.color}-400/10`}>
                  {value.icon}
                </div>

                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r from-${value.color}-400 to-${value.color}-600 bg-clip-text text-transparent`}>
                  {value.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-black text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              JOURNEY TO ZERO-G
            </span>
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-1/2 px-8">
                  <motion.div
                    className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-3xl font-bold text-purple-400 mb-2">{milestone.year}</div>
                    <h4 className="text-xl font-bold text-pink-400 mb-2">{milestone.event}</h4>
                    <p className="text-gray-300">{milestone.achievement}</p>
                  </motion.div>
                </div>

                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-black z-10"></div>

                <div className="w-1/2 px-8"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-violet-500/20 to-cyan-500/20 p-12 rounded-3xl border border-violet-500/30 backdrop-blur-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Award className="w-16 h-16 text-violet-400 mx-auto mb-6" />

            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                JOIN THE REVOLUTION
              </span>
            </h3>

            <p className="text-xl text-gray-300 mb-8">
              Be part of the movement that's changing how humanity moves. Experience the impossible.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full font-bold text-lg hover:from-violet-700 hover:to-cyan-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become Ambassador
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-violet-500 rounded-full font-bold text-lg hover:bg-violet-500/10 transition-all"
                whileHover={{ scale: 1.05, borderColor: "#06b6d4" }}
                whileTap={{ scale: 0.95 }}
              >
                Investor Relations
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-8 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            TURBOFLOP
          </div>
          <p className="text-gray-400">
            Defying Gravity. Elevating Humanity.
          </p>
        </div>
      </footer>
    </div>
  )
}