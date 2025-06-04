import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
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
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-2">
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
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white/95 text-sm font-medium font-sans mb-6">
              <span className="mr-2">🧘‍♀️</span>
              Trusted by 100,000+ mindful souls
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4 leading-[1.1]">
              Find your inner calm.
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
              Experience personalized meditation sessions powered by AI.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-stone-50 text-stone-900 px-10 py-4 text-lg font-semibold font-sans rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white"
              >
                Start 7-day free trial
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              Why Choose Serenica?
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Experience meditation reimagined through the perfect blend of ancient wisdom and modern technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-stone-100 hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative mb-6 rounded-2xl overflow-hidden bg-stone-100">
                <Image
                  src="https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg"
                  alt="AI-powered meditation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Emotional Check-in</h3>
              <p className="text-stone-600">AI-powered analysis instantly understands your mental state and recommends the perfect meditation.</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border border-stone-100 hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative mb-6 rounded-2xl overflow-hidden bg-stone-100">
                <Image
                  src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
                  alt="Personalized meditation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Journey</h3>
              <p className="text-stone-600">Customized meditation paths that evolve with your practice and adapt to your progress.</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border border-stone-100 hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative mb-6 rounded-2xl overflow-hidden bg-stone-100">
                <Image
                  src="https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg"
                  alt="Progress tracking"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Progress Insights</h3>
              <p className="text-stone-600">Track your mindfulness journey with detailed analytics and personalized recommendations.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 rounded-[3rem]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Choose the perfect plan for your meditation journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-3xl border border-stone-200 hover:border-stone-300 transition-colors">
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
            </div>
            {/* Pro Plan */}
            <div className="bg-stone-900 p-8 rounded-3xl border-2 border-stone-700 text-white transform scale-105 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-stone-700 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
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
            </div>
            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-3xl border border-stone-200 hover:border-stone-300 transition-colors">
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
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 to-white rounded-[3rem]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Join thousands of satisfied meditators on their journey to mindfulness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Image
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                  alt="Sarah Johnson"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-stone-600 text-sm">Mindfulness Enthusiast</p>
                </div>
              </div>
              <p className="text-stone-600">
                "Serenica has transformed my meditation practice. The AI recommendations are spot-on, and I've seen remarkable progress in my mindfulness journey."
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Michael Chen"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-stone-600 text-sm">Tech Professional</p>
                </div>
              </div>
              <p className="text-stone-600">
                "As a busy professional, Serenica helps me stay grounded. The guided sessions are perfect for my schedule, and the results are incredible."
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Image
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                  alt="Emma Davis"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Emma Davis</h4>
                  <p className="text-stone-600 text-sm">Yoga Teacher</p>
                </div>
              </div>
              <p className="text-stone-600">
                "I recommend Serenica to all my students. The platform's approach to meditation is both modern and authentic."
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 mt-24 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-stone-900 text-lg font-serif font-bold">S</span>
                </div>
                <span className="text-2xl font-serif font-bold">Serenica</span>
              </div>
              <p className="text-stone-400">
                Your journey to mindfulness begins here.
              </p>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Programs</Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Guides</Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-400">
            <p>&copy; {new Date().getFullYear()} Serenica. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}