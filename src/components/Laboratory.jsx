import { motion } from 'framer-motion'
import SectionHeader from './common/SectionHeader'
import { Microscope, Scale, Beaker, Layers, Shapes, Droplets, CheckCircle2 } from 'lucide-react';

const labEquipment = [
  {
    category: "Testing Equipment",
    icon: Microscope,
    items: [
      "Concrete Batching Plant (1 CuM)",
      "Compression Testing Machine (3000 KN)",
      "Electronic Weigh Bridge (60 MT)",
      "Digital Thermometer",
      "Hot Air Oven"
    ]
  },
  {
    category: "Measurement Tools",
    icon: Scale,
    items: [
      "Vernier Calipers",
      "Steel Scale",
      "Hydrometer",
      "Glass Cylinders",
      "I.S Sieves"
    ]
  },
  {
    category: "Sample Preparation",
    icon: Beaker,
    items: [
      "Cement Mortar Vibrator",
      "Cube Moulds for Concrete",
      "Cube Moulds for Cement",
      "Bulk Density Cylinders",
      "Concrete Mixer (Pan Type)"
    ]
  }
]

const testingPlans = [
  {
    material: "Cement",
    icon: Layers,
    tests: [
      "Visual Inspection",
      "Dry Sieve Analysis",
      "Normal Consistency",
      "Initial & Final Setting Time",
      "Compressive Strength"
    ]
  },
  {
    material: "Aggregates",
    icon: Shapes,
    tests: [
      "Sieve Analysis",
      "Moisture Content",
      "Specific Gravity",
      "Water Absorption",
      "Impact Value"
    ]
  },
  {
    material: "Fresh Concrete",
    icon: Droplets,
    tests: [
      "Slump Test",
      "Yield Test",
      "Temperature",
      "Air Content",
      "Unit Weight"
    ]
  }
]

const Laboratory = () => {
  return (
    <section id="laboratory" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Quality Assurance"
          title="Laboratory & Testing"
          description="State-of-the-art laboratory equipped with modern testing facilities"
        />

        {/* Lab Equipment Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Laboratory Equipment</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {labEquipment.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-medium text-gray-900">{category.category}</h4>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Testing Plans Section */}
        <motion.div
          className="bg-gray-50 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Testing Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testingPlans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div key={index} className="space-y-4">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-medium text-gray-900">{plan.material}</h4>
                  </div>
                  <ul className="space-y-3 ml-2">
                    {plan.tests.map((test, testIndex) => (
                      <li key={testIndex} className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Laboratory