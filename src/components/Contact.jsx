import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline'

/**
 * Contact component handles the contact form and displays company contact information
 * Features:
 * - Interactive contact form with validation
 * - Form submission handling with loading states
 * - Success message display
 * - Company contact details with animated icons
 * - Responsive layout for all screen sizes
 */
const Contact = () => {
  // State management for form submission and loading states
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Form data state initialization
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  /**
   * Handles the contact form submission
   * - Prevents default form submission
   * - Shows loading state
   * - Simulates API call (replace with actual API call)
   * - Shows success message
   * - Resets form after success
   * 
   * @param {Event} e - Form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault()

    // Construct email body with form data
    const emailBody = `
Hello Communique Concrete,    
${formData.message}

Name: ${formData.name}
Company: ${formData.company}
Phone: ${formData.phone}
Email: ${formData.email}

`.trim()

    // Construct mailto URL with encoded parameters
    const mailtoUrl = `mailto:info@communiqueconcrete.com?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`

    // Open email client
    window.location.href = mailtoUrl

    // Show success message briefly
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      })
    }, 2000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 md:w-64 md:h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 -top-8 md:-top-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 md:w-24 h-1.5 bg-blue-600 mx-auto mb-1.5 md:mb-2" />
            <div className="w-8 md:w-12 h-1.5 bg-blue-600 mx-auto" />
          </motion.div>
          <motion.div
            className="inline-block px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-xs md:text-sm mb-4 md:mb-6"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's Connect
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 md:mb-6">Get in Touch With Us</h2>
          <p className="text-sm md:text-lg font-medium text-gray-600 max-w-xl md:max-w-3xl mx-auto leading-relaxed">
            Have questions about our concrete solutions? We're here to help! Reach out to us and our team will get back to you shortly.
          </p>
        </motion.div>

        {/* Animated connecting dots background */}
        <div className="absolute inset-0 grid grid-cols-8 gap-4 pointer-events-none opacity-10">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"
              initial={{ opacity: 0.1 }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-10 relative overflow-hidden ring-1 ring-gray-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20">
              <div className="absolute top-3 left-3 md:top-4 md:left-4 w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full" />
              <div className="absolute top-3 left-6 md:top-4 md:left-10 w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full" />
              <div className="absolute top-6 left-3 md:top-10 md:left-4 w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full" />
            </div>

            <div className="mb-6 md:mb-8 p-4 md:p-6 bg-blue-50 rounded-lg md:rounded-xl border border-blue-100">
              <p className="text-gray-900 font-semibold text-sm md:text-lg mb-1 md:mb-2">Prefer to email directly?</p>
              <a
                href="mailto:info@communiqueconcrete.com"
                className="text-blue-700 hover:text-blue-800 font-bold text-base md:text-xl block break-all"
              >
                info@communiqueconcrete.com
              </a>
              <p className="text-gray-600 text-xs md:text-base font-medium mt-1 md:mt-3">
                Or fill out the form below to compose your message
              </p>
            </div>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-20"
              >
                <div className="text-center p-6 md:p-8">
                  <CheckCircleIcon className="w-16 h-16 md:w-20 md:h-20 text-green-500 mx-auto mb-4 md:mb-6" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Opening Email Client</h3>
                  <p className="text-base md:text-lg text-gray-600 font-medium">Your message has been prepared</p>
                </div>
              </motion.div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs md:text-base font-bold text-gray-800 mb-1 md:mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 md:py-3 text-sm md:text-lg"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-base font-bold text-gray-800 mb-1 md:mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 md:py-3 text-sm md:text-lg"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs md:text-base font-bold text-gray-800 mb-1 md:mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 md:py-3 text-sm md:text-lg"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-xs md:text-base font-bold text-gray-800 mb-1 md:mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 md:py-3 text-sm md:text-lg"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-base font-bold text-gray-800 mb-1 md:mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 md:py-3 text-sm md:text-lg"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 md:px-8 md:py-4 rounded-lg bg-blue-600 hover:bg-blue-700 
                  text-white text-base md:text-lg font-bold shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50 
                  transition-all duration-300 transform hover:scale-[1.02] active:scale-95
                  flex items-center justify-center space-x-2 md:space-x-3"
              >
                <EnvelopeIcon className="w-5 h-5 md:w-6 md:h-6" />
                <span>Compose Email</span>
              </button>

              {/* Alternative contact methods */}
              <div className="mt-6 md:mt-8 text-center relative">
                <motion.div
                  className="flex items-center justify-center space-x-3 md:space-x-4 mb-4 md:mb-6"
                >
                  <div className="h-px bg-gray-300 flex-1"></div>
                  <span className="text-gray-500 text-xs md:text-base font-medium">Or connect via</span>
                  <div className="h-px bg-gray-300 flex-1"></div>
                </motion.div>

                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <motion.a
                    href="tel:+919474546259"
                    className="flex items-center justify-center p-3 md:p-4 text-gray-700 hover:text-blue-700 bg-gray-50 rounded-lg md:rounded-xl hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all transform hover:scale-105 shadow-sm"
                    whileHover={{ y: -2 }}
                  >
                    <PhoneIcon className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                    <span className="font-bold text-sm md:text-lg">Call Us</span>
                  </motion.a>
                  <motion.a
                    href="https://wa.me/919474546259?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20concrete%20services.%20Please%20share%20details.%20Thank%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-3 md:p-4 text-gray-700 hover:text-green-600 bg-gray-50 rounded-lg md:rounded-xl hover:bg-green-50 border border-gray-200 hover:border-green-200 transition-all transform hover:scale-105 shadow-sm"
                    whileHover={{ y: -2 }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span className="font-bold text-sm md:text-lg">WhatsApp</span>
                  </motion.a>
                </div>
              </div>

              {/* Decorative footer element */}
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-12 h-1 md:w-16 md:h-1 bg-blue-200 rounded-full mb-2" />
                <div className="w-8 h-1 md:w-10 md:h-1 bg-blue-200 rounded-full mx-auto" />
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl md:rounded-2xl shadow-xl p-6 md:p-10 text-white relative overflow-hidden h-full">
              {/* Animated wave effect */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}
                animate={{
                  x: [0, -100],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 border-b-2 border-white/20 pb-3 md:pb-4 inline-block">Reach Us</h3>
              <div className="space-y-6 md:space-y-10">
                <motion.div
                  className="flex items-start space-x-3 md:space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPinIcon className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 mt-0.5 md:mt-1" />
                  <div>
                    <h4 className="text-base md:text-2xl font-bold mb-1 md:mb-3 text-white">Our Locations</h4>
                    <div className="space-y-1 md:space-y-2 text-blue-100 text-sm md:text-lg font-medium">
                      <p>West Bengal: Jalan Complex, Bagnan, Khardah</p>
                      <p>Jharkhand: Jamshedpur</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3 md:space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <PhoneIcon className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 mt-0.5 md:mt-1" />
                  <div>
                    <h4 className="text-base md:text-2xl font-bold mb-1 md:mb-3 text-white">Phone</h4>
                    <p className="text-blue-100 text-sm md:text-xl font-bold tracking-wide">+91 94745 46259</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3 md:space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <EnvelopeIcon className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 mt-0.5 md:mt-1" />
                  <div>
                    <h4 className="text-base md:text-2xl font-bold mb-1 md:mb-3 text-white">Email</h4>
                    <p className="text-blue-100 text-sm md:text-xl font-bold">info@communiqueconcrete.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3 md:space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ClockIcon className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 mt-0.5 md:mt-1" />
                  <div>
                    <h4 className="text-base md:text-2xl font-bold mb-1 md:mb-3 text-white">Business Hours</h4>
                    <div className="text-blue-100 text-sm md:text-lg font-medium">
                      <p className="mb-0.5 md:mb-1">Sunday - Saturday :</p>
                      <p className="font-bold text-base md:text-xl">00:00 AM - 23:59 PM</p>
                      <p className="text-xs md:text-base opacity-90 mt-0.5 md:mt-1 italic">Except National Holidays</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact