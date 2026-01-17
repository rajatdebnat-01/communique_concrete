import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircleIcon, BriefcaseIcon } from '@heroicons/react/24/solid'
import { UserIcon, EnvelopeIcon, PhoneIcon, DocumentTextIcon, PaperClipIcon } from '@heroicons/react/24/outline'

const CareerPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const emailBody = `
Hello Communique Concrete HR Team,

I am interested in applying for the position of ${formData.position}.

My Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}

[IMPORTANT: I have attached my CV/Resume to this email]
`.trim()

        const mailtoUrl = `mailto:hrd@communiqueconcrete.com?subject=Job Application: ${encodeURIComponent(formData.position)} - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`

        window.location.href = mailtoUrl

        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 5000)
    }

    return (
        <div className="min-h-screen bg-[#F3F4F6] pt-20"> {/* Ash background (gray-100/ash) */}
            {/* Hero Section */}
            <div className="bg-[#DC2626] text-white py-20 relative overflow-hidden"> {/* Red-600 base */}
                <div className="absolute inset-0 bg-red-900/90 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                            Build Your Career with <span className="text-red-300">Communique Concrete</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            Join a team of innovators and experts dedicated to shaping the future of construction. We are always looking for passionate talent to grow with us.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-[#DC2626] px-8 py-6"> {/* Red-600 */}
                        <h2 className="text-2xl font-bold text-white flex items-center">
                            <BriefcaseIcon className="w-8 h-8 mr-3 text-red-200" />
                            Apply Now
                        </h2>
                        <p className="text-red-100 mt-2">
                            Fill out the form below to start your journey.
                        </p>
                    </div>

                    <div className="p-8 md:p-12">
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                            >
                                <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Client Opened!</h3>
                                <p className="text-gray-600 mb-6">
                                    We've prepared the email for you.
                                </p>
                                <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm inline-block">
                                    <p className="flex items-center text-green-700 font-bold text-lg">
                                        <PaperClipIcon className="w-6 h-6 mr-2" />
                                        IMPORTANT: Please attach your CV/Resume
                                    </p>
                                </div>
                                <p className="text-sm text-gray-500 mt-6">
                                    Don't forget to hit "Send" in your email app. Good luck!
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-8 text-red-600 hover:text-red-800 font-medium underline"
                                >
                                    Submit another application
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <UserIcon className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="block w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <PhoneIcon className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="block w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3"
                                                placeholder="+91 98765 43210"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="block w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">Position Applied For</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <BriefcaseIcon className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                name="position"
                                                id="position"
                                                value={formData.position}
                                                onChange={handleChange}
                                                className="block w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3"
                                                placeholder="e.g. Civil Engineer"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Cover Letter / Message</label>
                                    <div className="relative">
                                        <div className="absolute top-3 left-3 pointer-events-none">
                                            <DocumentTextIcon className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="block w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3"
                                            placeholder="Briefly tell us why you'd be a great fit..."
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                {/* CV Attachment Notice - Styled with Red/Warn theme to grab attention */}
                                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <PaperClipIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm text-red-700">
                                                <span className="font-bold">Note:</span> Clicking below will open your email client. <span className="font-bold underline">Please remember to attach your CV/Resume to the email.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#DC2626] text-white font-bold py-4 rounded-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500/50 transition-all transform hover:scale-[1.01] flex items-center justify-center text-lg"
                                >
                                    <EnvelopeIcon className="w-6 h-6 mr-3" />
                                    Submit Application
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                            <span className="bg-red-100 p-2 rounded-full mr-3">
                                <UserIcon className="w-6 h-6 text-red-600" />
                            </span>
                            Have Career Related Queries?
                        </h3>
                        <p className="text-gray-600 ml-1 mt-1 max-w-lg">
                            If you have specific questions or need to reach out to our HR department specifically, you can email us directly.
                        </p>
                    </div>
                    <a
                        href="mailto:hrd@communiqueconcrete.com"
                        className="flex-shrink-0 flex items-center bg-gray-900 text-white px-6 py-4 rounded-xl font-semibold hover:bg-red-600 transition-all shadow-md hover:shadow-xl group"
                    >
                        <EnvelopeIcon className="w-6 h-6 mr-3 text-red-500 group-hover:text-white transition-colors" />
                        <span className="flex flex-col text-left">
                            <span className="text-xs text-gray-400 group-hover:text-red-100 uppercase tracking-wider font-bold">Email Directly</span>
                            <span className="text-lg">hrd@communiqueconcrete.com</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CareerPage
