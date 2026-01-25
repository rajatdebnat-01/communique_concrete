import { motion } from 'framer-motion';
import { Microscope, Settings, ClipboardCheck, CheckCircle2, Award, FlaskConical } from 'lucide-react';

const qualityProcesses = [
  {
    title: "Raw Material Testing",
    icon: Microscope,
    points: [
      "Cement testing for consistency and strength",
      "Aggregate physical and chemical analysis",
      "Fly ash quality verification",
      "Chemical admixture performance testing"
    ]
  },
  {
    title: "Production Quality Control",
    icon: Settings,
    points: [
      "Automated batching systems",
      "Regular calibration of equipment",
      "Moisture content monitoring",
      "Mix design verification"
    ]
  },
  {
    title: "Final Product Testing",
    icon: ClipboardCheck,
    points: [
      "Slump test for workability",
      "Compression strength testing",
      "Durability testing",
      "Quality documentation"
    ]
  }
]

const QualityControl = () => {
  return (
    <section id="quality" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quality Control System</h2>
          <p className="text-lg text-gray-600">
            We strictly adhere to IS 4926 standards for manufacturing ready-mix concrete,
            ensuring the highest quality at every step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualityProcesses.map((process, index) => {
            const Icon = process.icon;
            return (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{process.title}</h3>
                </div>
                <ul className="space-y-4">
                  {process.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          className="mt-16 bg-gray-50 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Our Quality Standards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <div className="bg-red-600 p-3 rounded-full">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">IS 4926:2003 Compliant</h4>
                <p className="text-sm text-gray-600">Ready-mix concrete manufacturing standards</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-red-600 p-3 rounded-full">
                <FlaskConical className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">NABL Accredited Testing</h4>
                <p className="text-sm text-gray-600">Third-party quality verification</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default QualityControl