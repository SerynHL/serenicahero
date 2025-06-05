'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { useRef } from "react"

export default function Component() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  })

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
        delay: 0.8
      }
    }
  }

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const textVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.4
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.8
      }
    }
  }

  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  }

  const heroVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  }

  return (
    <div className="min-h-screen bg-white" ref={ref}>
      {/* Header */}
      <motion.header 
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className="bg-white/95 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-stone-700 to-stone-900 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-serif font-bold">S</span>
              </div>
              <span className="text-2xl font-serif font-bold text-stone-900">Serenica</span>
            </motion.div>

            {/* Navigation */}
            <motion.nav 
              className="hidden md:flex items-center space-x-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {["Home", "Meditations", "Programs", "About", "Support"].map((item, index) => (
                <motion.div key={item} variants={itemVariants}>
                  <Link 
                    href="#" 
                    className={`${item === 'Home' ? 'text-stone-900' : 'text-stone-600'} hover:text-stone-900 font-sans transition-colors`}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* CTA Buttons */}
            <motion.div 
              className="flex items-center space-x-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Link href="#" className="text-stone-600 hover:text-stone-900 font-medium font-sans transition-colors">
                  Sign In
                </Link>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-2.5 rounded-full font-medium font-sans shadow-lg hover:shadow-xl transition-all duration-200">
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-2"
      >
        <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-3xl border border-stone-200 shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0 rounded-3xl">
            <Image
              src="/meditation-hero.png"
              alt="Person meditating in peaceful pose"
              fill
              className="object-cover rounded-3xl"
              priority
            />
            {/* Subtle overlay for text readability without changing image colors */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 rounded-3xl"></div>
          </div>

          {/* Content */}
          <motion.div 
            className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={containerVariants}
          >
            {/* Trust Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white/95 text-sm font-medium font-sans mb-6"
            >
              <span className="mr-2">🧘‍♀️</span>
              Trusted by 100,000+ mindful souls
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4 leading-[1.1]"
            >
              Find your inner calm.
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed font-sans"
            >
              Experience personalized meditation sessions powered by AI.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
      </motion.div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto">
        <motion.section 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className="py-24 px-4 sm:px-6 lg:px-8"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              Why Choose Serenica?
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Experience meditation reimagined through the perfect blend of ancient wisdom and modern technology.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          >
            {[
              {
                image: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg",
                title: "Instant Emotional Check-in",
                description: "AI-powered analysis instantly understands your mental state and recommends the perfect meditation."
              },
              {
                image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
                title: "Personalized Journey",
                description: "Customized meditation paths that evolve with your practice and adapt to your progress."
              },
              {
                image: "https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg",
                title: "Progress Insights",
                description: "Track your mindfulness journey with detailed analytics and personalized recommendations."
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
                className="bg-white rounded-3xl p-6 shadow-lg border border-stone-100 hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  className="aspect-[4/3] relative mb-6 rounded-2xl overflow-hidden bg-stone-100"
                  variants={imageVariants}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div variants={textVariants}>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-stone-600">{card.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section 
          className="py-24 px-4 sm:px-6 lg:px-8 rounded-[3rem]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4"
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-stone-600 max-w-2xl mx-auto"
            >
              Choose the perfect plan for your meditation journey.
            </motion.p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Basic Plan */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-3xl border border-stone-200 hover:border-stone-300 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-stone-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Basic guided meditations
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Progress tracking
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  5 meditation programs
                </li>
              </ul>
              <Button className="w-full bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-2xl">
                Get Started
              </Button>
            </motion.div>
            {/* Pro Plan */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-stone-900 p-8 rounded-3xl border-2 border-stone-700 text-white transform scale-105 shadow-2xl"
            >
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$19</span>
                <span className="text-stone-300">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  All Basic features
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  AI-powered recommendations
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  20 meditation programs
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Advanced analytics
                </li>
              </ul>
              <Button className="w-full bg-white hover:bg-stone-100 text-stone-900 rounded-2xl">
                Get Started
              </Button>
            </motion.div>
            {/* Enterprise Plan */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-3xl border border-stone-200 hover:border-stone-300 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-stone-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  All Pro features
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Custom meditation content
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Priority support
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Team management
                </li>
              </ul>
              <Button className="w-full bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-2xl">
                Contact Sales
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 to-white rounded-[3rem]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4"
            >
              What Our Users Say
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-stone-600 max-w-2xl mx-auto"
            >
              Join thousands of satisfied meditators on their journey to mindfulness.
            </motion.p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Testimonials */}
            {[
              {
                image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
                name: "Sarah Johnson",
                role: "Mindfulness Enthusiast",
                quote: "Serenica has transformed my meditation practice. The AI recommendations are spot-on, and I've seen remarkable progress in my mindfulness journey."
              },
              {
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                name: "Michael Chen",
                role: "Tech Professional",
                quote: "As a busy professional, Serenica helps me stay grounded. The guided sessions are perfect for my schedule, and the results are incredible."
              },
              {
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
                name: "Emma Davis",
                role: "Yoga Teacher",
                quote: "I recommend Serenica to all my students. The platform's approach to meditation is both modern and authentic."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-stone-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-stone-600">{testimonial.quote}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>

      {/* Footer */}
      <motion.footer 
        className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 mt-24 rounded-t-[3rem]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Brand */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-stone-900 text-lg font-serif font-bold">S</span>
                </div>
                <span className="text-2xl font-serif font-bold">Serenica</span>
              </div>
              <p className="text-stone-400">
                Your journey to mindfulness begins here.
              </p>
            </motion.div>
            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Programs</Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </motion.div>
            {/* Resources */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Guides</Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Support</Link></li>
              </ul>
            </motion.div>
            {/* Legal */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-400"
          >
            <p>&copy; {new Date().getFullYear()} Serenica. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}