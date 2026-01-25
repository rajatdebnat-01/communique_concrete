import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader';
import { MapPinIcon, CalendarIcon, BuildingOffice2Icon, HomeModernIcon, PhoneIcon } from '@heroicons/react/24/outline';

// Animation variants for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const units = [
  {
    name: "Kolkata Unit – I",
    address: [
      "Jalan Industrial complex, Mouza – Jangalpur,",
      "Right Lane NO. 3, Gate No. 3",
      "P.O – Argori, P.S – Sankrail",
      "Dist – Howrah, West Bengal – 711 302"
    ],
    established: "April 2024",
    mapLink: "https://maps.app.goo.gl/RzVqqqSEiWZY3BHW8?g_st=iw",
    contact: "(+91) 8981339444"
  },
  {
    name: "Kolkata Unit – II",
    address: [
      "Doperia More, beside HP Petrol pump",
      "Kalyani Expressway, Vill: Doperia",
      "Dist – North 24 Parganas, West Bengal – 700 119"
    ],
    established: "July 2024",
    mapLink: "https://maps.app.goo.gl/k2NT9cnydCyGTQCH7?g_st=iw",
    contact: "(+91) 8981338444"
  },
  {
    name: "Kolkata Unit – III",
    address: [
      "Bagnan Libery More, Bagnan",
      "Chandrapur, Howrah – 711303"
    ],
    established: "February 2025",
    mapLink: "https://maps.app.goo.gl/YDgvBSAX31vUK1Kr6?g_st=iw",
    contact: "(+91) 8981336444"
  },
  {
    name: "Jamshedpur Unit - I",
    address: [
      "Thana No-56, Plot-192,197,198, Saharbera,",
      "Adityapur Road, Burudih, Kandra, Seraikela kharsawan,",
      "Jamshedpur, Jharkhand – 832108"
    ],
    established: "April 2025",
    mapLink: "https://maps.app.goo.gl/GK2PLT8ifpoa3J8K9?g_st=iw",
    contact: "(+91) 9123485374"
  }
];

const Units = () => {
  return (
    <section id="units" className="py-20 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Our Presence"
          title="Manufacturing Units"
          description="Strategically located facilities serving West Bengal and Jharkhand"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {units.map((unit, index) => (
            <motion.a
              key={index}
              href={unit.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer block"
            >
              {/* Top Decorative Pattern */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-blue-500/10 to-blue-600/10" />

              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className="absolute -top-4 -right-4 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity">
                  <BuildingOffice2Icon className="w-full h-full text-red-600" />
                </div>

                {/* Unit Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {unit.name}
                    </h3>
                    {unit.established && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-sm text-red-600">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        <span>Est: {unit.established}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="mt-1 p-2 bg-red-50 rounded-lg">
                    <MapPinIcon className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="space-y-2">
                    {unit.address.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-gray-600 leading-relaxed">{line}</p>
                    ))}
                  </div>
                </div>

                {/* Contact Number */}
                <div className="flex items-center space-x-3 mt-4">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <PhoneIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Contact</p>
                    <p className="text-lg font-semibold text-gray-900">{unit.contact}</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 w-16 h-16 opacity-10">
                  <HomeModernIcon className="w-full h-full text-red-600" />
                </div>
              </div>

              {/* Bottom Gradient Bar */}
              <div className="h-1.5 bg-gradient-to-r from-red-500 to-red-600 transform origin-left transition-transform duration-300 group-hover:scale-x-110" />
            </motion.a>
          ))}
        </motion.div>

        {/* Registered Office */}
        <motion.div
          className="mt-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="relative flex items-center space-x-6">
              <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <BuildingOffice2Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Registered Office</h3>
                <div className="flex items-start space-x-3 text-white">
                  <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg">
                      39, Chak Garia, Z44 Panchasayar<br />
                      Kolkata – 700 094
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <HomeModernIcon className="w-full h-full text-white" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Units;