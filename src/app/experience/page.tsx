/**
 * TurboFlop Experience Page
 * Athlete testimonials and performance metrics
 * Author: wanshazamirul
 */

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Volume2, Star, Zap, Heart, Activity, Trophy, Users, Clock } from 'lucide-react'

export default function ExperiencePage() {
  const [mounted, setMounted] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Olympic Sprinter",
      content: "I shattered my personal record by 0.8 seconds. It feels like running on the moon - effortless power, infinite energy.",
      rating: 5,
      achievement: "100m Gold Medal",
      improvement: "15% Speed Increase"
    },
    {
      name: "Marcus Rodriguez",
      role: "Marathon Champion",
      content: "Ran 42km with zero fatigue. The energy return is unreal - I could have kept going another marathon.",
      rating: 5,
      achievement: "Sub-2 Hour Marathon",
      improvement: "23% Endurance Boost"
    },
    {
      name: "Emma Thompson",
      role: "Professional Basketball",
      content: "My vertical leap increased by 8 inches. The weightless feeling during jumps is absolutely revolutionary.",
      rating: 5,
      achievement: "All-Star MVP",
      improvement: "30% Jump Height"
    }
  ]

  const experienceFeatures = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Weightless Sensation",
      description: "Feel 83.3% lighter with every step. The anti-gravity foam matrix eliminates impact forces.",
      benefit: "Zero fatigue, infinite endurance"
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: "Neural Response",
      description: "Brain-shoe synchronization with 0.001ms latency. Your thoughts become motion instantly.",
      benefit: "Reflex speed 10x faster"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Biometric Harmony",
      description: "Monitors and optimizes 47 vital metrics in real-time. Adapts to your body's needs.",
      benefit: "Peak performance always"
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Competitive Edge",
      description: "Gain unfair advantage with propulsion assists and energy recovery systems.",
      benefit: "600% power return"
    }
  ]

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      {mounted && (
        <div className="absolute inset-0">
          {Array.from({ length: 25 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-cyan-500/5"
              style={{
                width: 100 + (i * 47 % 200),
                height: 100 + (i * 61 % 200),
                left: `${(i * 151) % 100}%`,
                top: `${(i * 73) % 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{
                duration: 8 + i * 3,
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
            <a href="/experience" className="text-sm text-cyan-400 font-bold">Experience</a>
            <a href="/mission" className="text-sm text-gray-300 hover:text-white transition-colors">Mission</a>
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
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap className="w-20 h-20 text-cyan-400" />
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-8">
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                FEEL THE
              </span>
              <span className="block bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                ZERO-G REVOLUTION
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Experience what it feels like to <span className="text-cyan-400 font-bold">run on the moon</span>.
              Every step is <span className="text-violet-400 font-bold">weightless</span>, every movement is
              <span className="text-purple-400 font-bold">effortless</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-violet-600 rounded-full font-bold text-lg hover:from-cyan-700 hover:to-violet-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="inline w-5 h-5 mr-2" />
                Watch Experience Video
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-cyan-500 rounded-full font-bold text-lg hover:bg-cyan-500/10 transition-all"
                whileHover={{ scale: 1.05, borderColor: "#8b5cf6" }}
                whileTap={{ scale: 0.95 }}
              >
                <Volume2 className="inline w-5 h-5 mr-2" />
                Listen to Athletes
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Features */}
      <section className="relative px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-black text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              REVOLUTIONARY FEEL
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {experienceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 backdrop-blur-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-full bg-cyan-400/10 text-cyan-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <div className="p-4 bg-black/30 rounded-lg border border-cyan-500/20">
                  <span className="text-cyan-400 font-bold">Benefit:</span>
                  <span className="text-white ml-2">{feature.benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-black text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              ATHLETE TESTIMONIALS
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl border ${activeTestimonial === index ? 'border-cyan-400 bg-cyan-400/10' : 'border-white/20 bg-white/5'} backdrop-blur-lg cursor-pointer transition-all`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 flex items-center justify-center text-black font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-cyan-400">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-black/30 rounded">
                    <div className="text-cyan-400 font-bold">{testimonial.achievement}</div>
                  </div>
                  <div className="p-2 bg-black/30 rounded">
                    <div className="text-violet-400 font-bold">{testimonial.improvement}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="relative px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-12 rounded-3xl border border-purple-500/20 backdrop-blur-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AVERAGE PERFORMANCE GAINS
              </span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { metric: "Speed", gain: "+47%", icon: <Zap className="w-8 h-8" /> },
                { metric: "Endurance", gain: "+83%", icon: <Clock className="w-8 h-8" /> },
                { metric: "Jump Height", gain: "+62%", icon: <Activity className="w-8 h-8" /> },
                { metric: "Recovery", gain: "+300%", icon: <Heart className="w-8 h-8" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-center text-pink-400 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-pink-400 mb-1">{stat.gain}</div>
                  <div className="text-sm text-gray-400">{stat.metric}</div>
                </motion.div>
              ))}
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
            Experience the Future of Movement.
          </p>
        </div>
      </footer>
    </div>
  )
}