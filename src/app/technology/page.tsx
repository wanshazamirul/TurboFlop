/**
 * TurboFlop Technology Page
 * Showcases the quantum-foam and other revolutionary technologies
 * Author: wanshazamirul
 */

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Zap, Shield, Battery, Gauge, Atom, Rocket, Brain, Cpu } from 'lucide-react'

// Technology page component showcasing quantum innovations
export default function TechnologyPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const techFeatures = [
    {
      icon: <Atom className="w-12 h-12" />,
      title: "Quantum-Foam Matrix",
      description: "Revolutionary nano-cellular structure that manipulates gravitational fields at the quantum level",
      specs: ["Density: 0.16g/cm³", "Tensile: 5000MPa", "Gravity Index: -83.3%"],
      color: "violet"
    },
    {
      icon: <Battery className="w-12 h-12" />,
      title: "Kinetic Energy Recovery",
      description: "Advanced piezoelectric system that captures and returns 600% more energy than traditional footwear",
      specs: ["Recovery: 600%", "Efficiency: 98.7%", "Cycle Life: ∞"],
      color: "cyan"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Adaptive Armor Plating",
      description: "Self-regenerating molecular shield that adapts to impact and environmental conditions",
      specs: ["Hardness: 10H", "Self-Repair: 0.3s", "Durability: 125,000km"],
      color: "purple"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Neural Interface Sync",
      description: "Direct brain-shoe connectivity for intuitive movement control and performance optimization",
      specs: ["Latency: 0.001ms", "Accuracy: 99.9%", "Sync: Real-time"],
      color: "pink"
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Propulsion Assist System",
      description: "Micro-thruster network providing controlled momentum boosts for enhanced speed",
      specs: ["Boost: +250%", "Control: Precision", "Fuel: Kinetic"],
      color: "orange"
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "AI Performance Core",
      description: "Machine learning algorithms that optimize gait, posture, and energy distribution in real-time",
      specs: ["Processing: 1000Hz", "Learning: Continuous", "Optimization: +40%"],
      color: "emerald"
    }
  ]

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      {mounted && (
        <div className="absolute inset-0">
          {Array.from({ length: 30 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-violet-500/10"
              style={{
                width: 50 + (i * 23 % 150),
                height: 50 + (i * 37 % 150),
                left: `${(i * 137) % 100}%`,
                top: `${(i * 89) % 100}%`,
              }}
              animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 10 + i * 2,
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
            <a href="/technology" className="text-sm text-violet-400 font-bold">Technology</a>
            <a href="/experience" className="text-sm text-gray-300 hover:text-white transition-colors">Experience</a>
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
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Atom className="w-16 h-16 text-violet-400" />
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8">
              <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                QUANTUM
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                TECHNOLOGY
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Every atom engineered for <span className="text-violet-400 font-bold">zero-gravity performance</span>.
              The fusion of <span className="text-cyan-400 font-bold">quantum physics</span> and
              <span className="text-purple-400 font-bold"> biomechanical excellence</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="relative px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-black text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              CORE INNOVATIONS
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 backdrop-blur-lg hover:from-violet-500/10 hover:to-cyan-500/10 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgb(139, 92, 246)",
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                }}
              >
                <div className={`text-${feature.color}-400 mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-${feature.color}-400/10`}>
                  {feature.icon}
                </div>

                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r from-${feature.color}-400 to-${feature.color}-600 bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex justify-between text-sm">
                      <span className="text-gray-400">{spec.split(':')[0]}:</span>
                      <span className={`text-${feature.color}-400 font-mono`}>{spec.split(':')[1]}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="relative px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-12 rounded-3xl border border-violet-500/20 backdrop-blur-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                TECHNICAL SPECIFICATIONS
              </span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-violet-400">Performance Metrics</h4>
                <div className="space-y-3">
                  {[
                    "Maximum Speed: 47.3 km/h",
                    "Vertical Leap: 2.8m",
                    "Endurance: 42.195km non-stop",
                    "Acceleration: 0-100m in 8.2s",
                    "Energy Return: 600%",
                    "Gravity Reduction: 83.3%"
                  ].map((metric, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-cyan-400">Materials Science</h4>
                <div className="space-y-3">
                  {[
                    "Upper: Quantum-bonded nanofiber",
                    "Midsole: Graviton-infused foam",
                    "Outsole: Adaptive crystalline polymer",
                    "Lacing: Self-tightening magnetic system",
                    "Weight: 127g per shoe (size 42)",
                    "Operating Temp: -60°C to +80°C"
                  ].map((material, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 text-violet-400" />
                      <span className="text-gray-300">{material}</span>
                    </div>
                  ))}
                </div>
              </div>
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
            Quantum Engineering. Gravity Defiance.
          </p>
        </div>
      </footer>
    </div>
  )
}