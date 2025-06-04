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
            {/* Feature 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-rose-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg"
                    alt="AI-powered meditation"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Instant Emotional Check-in</h3>
                <p className="text-stone-600 leading-relaxed">
                  Our AI instantly analyzes your emotional state and recommends the perfect meditation session to align with your current needs.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
                    alt="Personalized meditation"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Personalized Journey</h3>
                <p className="text-stone-600 leading-relaxed">
                  Experience a meditation path that evolves with you, adapting to your progress and preferences in real-time.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-teal-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg"
                    alt="Progress tracking"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Progress Insights</h3>
                <p className="text-stone-600 leading-relaxed">
                  Track your mindfulness journey with detailed analytics and receive personalized recommendations for growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 via-white to-stone-50 rounded-[3rem]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Choose the perfect plan for your meditation journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Basic Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-50 rounded-3xl transform transition-transform group-hover:scale-[1.02] duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-stone-200">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-stone-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-stone-600">
                    <span className="mr-2 text-green-500">✓</span>
                    Basic guided meditations
                  </li>
                  <li className="flex items-center text-stone-600">
                    <span className="mr-2 text-green-500">✓</span>
                    Progress tracking
                  </li>
                  <li className="flex items-center text-stone-600">
                    <span className="mr-2 text-green-500">✓</span>
                    5 meditation programs
                  </li>
                </ul>
                <Button className="w-full bg-stone-900 hover:bg-stone-800 text-white rounded-2xl h-12">
                  Get Started
                </Button>
              </div>
            </div>
          
            {/* Pro Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl transform transition-transform group-hover:scale-[1.02] duration-300"></div>
              <div className="relative bg-stone-900/95 backdrop-blur-sm p-8 rounded-3xl text-white border-2 border-stone-700 transform scale-105">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium px-6 py-2 rounded-full shadow-lg border border-amber-400/20">
                    Most Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-stone-300">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-stone-300">
                    <span className="mr-2 text-amber-500">✓</span>
                    All Basic features
                  </li>
                  <li className="flex items-center text-stone-300">
                    <span className="mr-2 text-amber-500">✓</span>
                    AI-powered recommendations
                  </li>
                  <li className="flex items-center text-stone-300">
                    <span className="mr-2 text-amber-500">✓</span>
                    20 meditation programs
                  </li>
                  <li className="flex items-center text-stone-300">
                    <span className="mr-2 text-amber-500">✓</span>
                    Advanced analytics
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-2xl h-12 border-0">
                  Get Started
                </Button>
              </div>
            </div>
          
            {/* Enterprise Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-50 rounded-3xl transform transition-transform group-hover:scale-[1.02] duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-stone-200">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-stone-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-stone-600">
                    <span className="mr-2 text-green-500">✓</span>
                    All Pro features
                  </li>
                  <li className="flex items-center text-stone-600">
                    <span className="mr-2 text-green-500">✓</span>
                    Custom meditation content
                  </li>
                  <li className="flex items-center text-stone-600">
                    <span className="mr-2 text-green-500">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center text-stone-600">
                    <span className="mr-2 text-green-500">✓</span>
                    Team management
                  </li>
                </ul>
                <Button className="w-full bg-stone-900 hover:bg-stone-800 text-white rounded-2xl h-12">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Join thousands of satisfied meditators on their journey to mindfulness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Testimonial 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-rose-100 rounded-3xl transform transition-transform group-hover:scale-[1.02] duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-white">
                      <Image
                        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                        alt="Sarah Johnson"
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Sarah Johnson</h4>
                    <p className="text-stone-600 text-sm">Mindfulness Enthusiast</p>
                  </div>
                </div>
                <div className="flex mb-4 text-amber-500">
                  {"★".repeat(5)}
                </div>
                <blockquote className="text-stone-600 leading-relaxed">
                  "Serenica has transformed my meditation practice. The AI recommendations are spot-on, and I've seen remarkable progress in my mindfulness journey."
                </blockquote>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform transition-transform group-hover:scale-[1.02] duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-white">
                      <Image
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                        alt="Michael Chen"
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Michael Chen</h4>
                    <p className="text-stone-600 text-sm">Tech Professional</p>
                  </div>
                </div>
                <div className="flex mb-4 text-amber-500">
                  {"★".repeat(5)}
                </div>
                <blockquote className="text-stone-600 leading-relaxed">
                  "As a busy professional, Serenica helps me stay grounded. The guided sessions are perfect for my schedule, and the results are incredible."
                </blockquote>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl transform transition-transform group-hover:scale-[1.02] duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-white">
                      <Image
                        src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                        alt="Emma Davis"
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Emma Davis</h4>
                    <p className="text-stone-600 text-sm">Yoga Teacher</p>
                  </div>
                </div>
                <div className="flex mb-4 text-amber-500">
                  {"★".repeat(5)}
                </div>
                <blockquote className="text-stone-600 leading-relaxed">
                  "I recommend Serenica to all my students. The platform's approach to meditation is both modern and authentic."
                </blockquote>
              </div>
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