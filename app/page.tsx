"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-stone-700 to-stone-900 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-serif font-bold">S</span>
              </div>
              <span className="text-2xl font-serif font-bold text-stone-900">Serenica</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              <Link href="#" className="text-stone-900 hover:text-stone-600 font-medium font-sans transition-colors">
                Home
              </Link>
              <Link href="#" className="text-stone-600 hover:text-stone-900 font-sans transition-colors">
                Meditations
              </Link>
              <Link href="#" className="text-stone-600 hover:text-stone-900 font-sans transition-colors">
                Programs
              </Link>
              <Link href="#" className="text-stone-600 hover:text-stone-900 font-sans transition-colors">
                About
              </Link>
              <Link href="#" className="text-stone-600 hover:text-stone-900 font-sans transition-colors">
                Support
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-stone-600 hover:text-stone-900 font-medium font-sans transition-colors">
                Sign In
              </Link>
              <Button className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-2.5 rounded-full font-medium font-sans shadow-lg hover:shadow-xl transition-all duration-200">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative px-4 sm:px-6 lg:px-8 py-2"
      >
        <div className="max-w-full mx-auto">
          <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-3xl border border-stone-200 shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 rounded-2xl">
              <Image
                src="/meditation-hero.png"
                alt="Person meditating in peaceful pose"
                fill
                className="object-cover rounded-2xl"
                priority
              />
              {/* Subtle overlay for text readability without changing image colors */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 rounded-2xl"></div>
            </div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              {/* Trust Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white/95 text-sm font-medium font-sans mb-6"
              >
                <span className="mr-2">🧘‍♀️</span>
                Trusted by 100,000+ mindful souls
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4 leading-[1.1]"
              >
                Find your inner calm.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed font-sans"
              >
                Experience personalized meditation sessions powered by AI.
              </motion.p>

              {/* CTA Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex justify-center"
              >
                <Button
                  size="lg"
                  className="bg-white hover:bg-stone-50 text-stone-900 px-10 py-4 text-lg font-semibold font-sans rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white"
                >
                  Start 7-day free trial
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-stone-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Why Choose Serenica</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Discover the unique features that make Serenica your perfect meditation companion.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Guidance",
                description: "Personalized meditation sessions that adapt to your needs and progress.",
                icon: "🤖"
              },
              {
                title: "Expert-Crafted Content",
                description: "Sessions designed by experienced meditation teachers and mindfulness experts.",
                icon: "🎯"
              },
              {
                title: "Progress Tracking",
                description: "Monitor your meditation journey with detailed insights and analytics.",
                icon: "📈"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}