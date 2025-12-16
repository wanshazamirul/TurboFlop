/**
 * TurboFlop - Zero-G Performance Footwear
 * Main landing page with interactive gravity calculator
 * Author: wanshazamirul
 */

'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Sparkles, Star, Zap, Heart, Infinity as InfinityIcon, Gauge } from 'lucide-react'

// Main TurboFlop landing page component
export default function TurboFlopExperience() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [weight, setWeight] = useState('')
  const [moonWeight, setMoonWeight] = useState<number | null>(null)
  const [gravityReduction, setGravityReduction] = useState<number | null>(null)
  const { scrollY } = useScroll()

  const headerY = useTransform(scrollY, [0, 300], [0, -100])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.8])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Generate deterministic star positions to avoid hydration mismatch
  const generateStars = () => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: (i % 3) + 1,
      left: ((i * 137.5) % 100) + '%',
      top: ((i * 89.7) % 100) + '%',
      animationDelay: `${i * 0.1}s`
    }))
  }

  // Calculate moon weight using real physics (moon gravity = 16.5% of Earth's)
  const calculateMoonWeight = () => {
    const earthWeight = parseFloat(weight)
    if (isNaN(earthWeight) || earthWeight <= 0) {
      alert('Please enter a valid weight greater than 0')
      return
    }

    // Moon gravity is 1.625 m/s², Earth gravity is 9.807 m/s²
    // So moon gravity is about 16.6% of Earth's gravity
    const moonGravityRatio = 0.165

    const calculatedMoonWeight = earthWeight * moonGravityRatio
    const calculatedReduction = ((earthWeight - calculatedMoonWeight) / earthWeight) * 100

    setMoonWeight(calculatedMoonWeight)
    setGravityReduction(calculatedReduction)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
    }
  }

  const starfieldVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.1
      }
    }
  }

  const starVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: [0.2, 1, 0.2],
    }
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Starfield Background */}
      {mounted && (
        <motion.div
          className="absolute inset-0"
          variants={starfieldVariants}
          initial="initial"
          animate="animate"
        >
          {generateStars().map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                width: star.size,
                height: star.size,
                left: star.left,
                top: star.top,
              }}
              variants={starVariants}
              animate="animate"
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" as const,
                delay: parseFloat(star.animationDelay)
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-blue-900/20" />

      {/* Mouse-following Light Effect */}
      {mounted && (
        <div
          className="fixed w-96 h-96 rounded-full pointer-events-none z-50"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            filter: 'blur(40px)'
          }}
        />
      )}

      {/* Navigation Header */}
      <motion.header
        className="fixed top-0 w-full z-40 px-8 py-6"
        style={{ y: headerY }}
      >
        <nav className="flex justify-between items-center w-full px-8">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            TURBOFLOP
          </motion.div>
          <div className="flex gap-8">
            <motion.a
              href="/technology"
              className="text-sm text-gray-300 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Technology
            </motion.a>
            <motion.a
              href="/experience"
              className="text-sm text-gray-300 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Experience
            </motion.a>
            <motion.a
              href="/mission"
              className="text-sm text-gray-300 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Mission
            </motion.a>
            <motion.a
              href="/contact"
              className="text-sm text-gray-300 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact
            </motion.a>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-8"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="text-center max-w-6xl mx-auto">
          {/* Floating Shoe Icons */}
          <motion.div
            className="flex justify-center gap-8 mb-12"
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-violet-400" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <InfinityIcon className="w-12 h-12 text-cyan-400" />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-10 h-10 text-purple-400" />
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              WHERE EARTH
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              MEETS ZERO-G
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Experience the revolutionary <span className="text-violet-400 font-bold">quantum-foam</span> technology
            that makes you feel <span className="text-cyan-400 font-bold">6x lighter</span> with every step
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full font-bold text-lg hover:from-violet-700 hover:to-cyan-700 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <span className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Test Zero-G Experience
                <Sparkles className="w-5 h-5" />
              </span>
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-violet-500 rounded-full font-bold text-lg hover:bg-violet-500/10 transition-all"
              whileHover={{ scale: 1.05, borderColor: "#06b6d4" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <Gauge className="w-5 h-5" />
                Watch Demo
              </span>
            </motion.button>
          </motion.div>

          {/* Floating Tech Stats */}
          <motion.div
            className="absolute top-20 right-10 text-sm text-violet-400 font-mono"
            animate={{
              x: [0, 10, 0],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div>MASS: 0.16g</div>
            <div>GRAVITY: -83.3%</div>
            <div>BOOST: +600%</div>
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-10 text-sm text-cyan-400 font-mono"
            animate={{
              x: [0, -10, 0],
              y: [0, 10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div>QUANTUM FOAM</div>
            <div>ACTIVE</div>
            <div>NANO-LEVEL</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-black text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              REVOLUTIONARY TECHNOLOGY
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Star className="w-8 h-8" />,
                title: "QUANTUM FOAM",
                description: "Nano-cellular structure that defies gravitational physics",
                color: "violet"
              },
              {
                icon: <InfinityIcon className="w-8 h-8" />,
                title: "ZERO-G SENSATION",
                description: "Experience moon-like gravity with every stride",
                color: "cyan"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "ENERGY RETURN",
                description: "600% more energy return than traditional footwear",
                color: "purple"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 backdrop-blur-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: `var(--tw-${feature.color}-400)`,
                  boxShadow: `0 20px 40px rgba(139, 92, 246, 0.3)`
                }}
              >
                <div className={`text-${feature.color}-400 mb-4`}>
                  {feature.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r from-${feature.color}-400 to-${feature.color}-600 bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gravity Test Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-black mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CALCULATE YOUR ZERO-G EXPERIENCE
            </span>
          </motion.h2>

          <motion.div
            className="bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-12 rounded-3xl border border-violet-500/20 backdrop-blur-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-8">
              <div>
                <label className="block text-xl text-gray-300 mb-4">Enter Your Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-6 py-4 bg-black/50 border border-violet-500/30 rounded-xl text-2xl text-center focus:border-cyan-400 focus:outline-none"
                  placeholder="70"
                />
              </div>

              <motion.button
                onClick={calculateMoonWeight}
                className="w-full py-6 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl font-bold text-xl hover:from-violet-700 hover:to-cyan-700 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Gauge className="inline w-6 h-6 mr-2" />
                Calculate Moon Weight
              </motion.button>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <motion.div
                  className="p-6 bg-black/30 rounded-xl"
                  initial={{ scale: 1 }}
                  animate={moonWeight ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-3xl font-bold text-violet-400 mb-2">
                    {moonWeight ? `${moonWeight.toFixed(1)} kg` : '-- kg'}
                  </div>
                  <div className="text-gray-400">Your Moon Weight</div>
                </motion.div>
                <motion.div
                  className="p-6 bg-black/30 rounded-xl"
                  initial={{ scale: 1 }}
                  animate={gravityReduction ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {gravityReduction ? `${gravityReduction.toFixed(1)}%` : '--%'}
                  </div>
                  <div className="text-gray-400">Gravity Reduction</div>
                </motion.div>
              </div>

              {moonWeight && (
                <motion.div
                  className="p-6 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-xl border border-violet-500/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-lg text-center">
                    <span className="text-violet-400 font-bold">With TurboFlop's Quantum-Foam technology,</span>
                    <div className="text-2xl text-cyan-400 font-bold mt-2">
                      you'll feel {gravityReduction?.toFixed(0)}% lighter!
                    </div>
                    <div className="text-sm text-gray-400 mt-2">
                      Actual moon gravity: 1.625 m/s² (16.5% of Earth's gravity)
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-8 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.05 }}
          >
            TURBOFLOP
          </motion.div>
          <p className="text-gray-400">
            Defying Gravity. One Step at a Time.
          </p>
        </div>
      </footer>
    </div>
  )
}