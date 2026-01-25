import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from './common/SectionHeader';

const QCICertificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "RMC Capability Certification",
      subtitle: "The scope of certification covers production control of ready mix concrete as per building meterials and & Technology promotion council (BMTPC) criteria.",

      image: "/images/certificates/COMMUNIQUE CONCRETE - RMC_JALAN PLANT_page-0001.jpg",
      year: "2025",

    },
    {
      id: 2,
      title: "QCI Certification",
      subtitle: "The scope of certification covers production control of ready mix concrete as per building meterials and & Technology promotion council (BMTPC) criteria.",

      image: "/images/certificates/QCI CERTIFICATE COMMUNIQUE CONCRETE (KHARDAH) - RMC_page-0001.jpg",
      year: "2025",

    },
    {
      id: 3,
      title: "RMC Capability Certification",
      subtitle: "The scope of certification covers production control of ready mix concrete as per building meterials and & Technology promotion council (BMTPC) criteria.",

      image: "/images/certificates/CC4 - JSR  QCI CERTIFICATE 2025.jpg",
      year: "2025",
      features: ["Security", "Availability", "Confidentiality"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="qci-certificate" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          badge="Quality Assurance"
          title="Our Certifications"
          description="Industry-recognized certifications demonstrating our commitment to excellence and compliance"
        />

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((cert) => (
            <motion.div key={cert.id} variants={itemVariants} className="group relative">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div
                  className="relative h-72 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain bg-white transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ZoomIn className="w-16 h-16 text-white mb-4" />
                    <h3 className="text-lg font-bold text-white text-center">{cert.title}</h3>
                    <p className="text-xs text-blue-300 mt-2 text-center">{cert.subtitle}</p>
                    <p className="text-sm text-white mt-4 font-medium">Click to view full size</p>
                  </div>

                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold">{cert.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-red-200 to-red-300 rounded-xl p-8 text-center border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our certifications show our focus on quality, security, and global standards.
          </p>
        </motion.div>
      </div>

      {/* Full Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Certificate Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[90vh] max-w-[95vw] h-auto w-auto object-contain rounded-lg shadow-2xl"
              />

              {/* Hint Text */}
              <p className="text-center text-gray-400 text-sm mt-4">
                Click outside to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default QCICertificate;
