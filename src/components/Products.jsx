import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './common/SectionHeader';
import { X } from 'lucide-react';

const productDetails = {
  "Hi Fluide": {
    title: "Hi Fluide",
    description: "Hi Fluide Concrete is an advanced, high-workability concrete engineered to deliver exceptional flowability, stability, and strength. Its innovative mix design ensures uniform consistency and excellent cohesiveness, allowing the concrete to flow easily into complex formwork while maintaining durability and structural integrity. Hi Fluide Concrete is ideal for projects requiring superior finish and efficient placement without compromising performance.",
    features: [
      "Easy to pump and place, even in congested reinforcement",
      "High-performance workable concrete with slump flow 600 - 700 mm",
      "Excellent flowability ensures faster and more efficient concrete placement",
      "Requires little to no vibration, reducing noise and labor effort",
      "Minimizes manpower involvement and speeds up construction timelines",
      "Outstanding surface finish with reduced honeycombing and voids",
      "Ensures uniform strength development and long-term durability"
    ]
  },
  "Ultra Fluide": {
    title: "Ultra Fluide",
    description: "Ultra Fluide (SCC) is engineered using the latest advanced superplasticizers and innovative mix design techniques to achieve exceptional workability and performance. It flows under its own weight and completely fills formwork without the need for mechanical compaction, ensuring efficient, high-quality construction.",
    features: [
      "Free flowing and self compacting",
      "High-performance workable concrete with slump flow 660 – 750 mm",
      "Easier placement of concrete",
      "aster construction and improved productivity",
      "No vibration required, eliminating compaction-related issues",
      "Superior surface finish and enhanced durability"
    ]
  },
  "DSCrete": {
    title: "DSCrete",
    description: "DSCrete is an advanced concrete solution specially designed to effectively slow the rate of hydration, ensuring extended workability of up to 6 hours without any adverse effect on the hardened concrete properties.",
    features: [
      "Provides longer workability retention of up to 6 hours",
      "Enables smooth and efficient concrete supply to project sites located far from the batching plant",
      "Reduces the risk of adding excess water at the site",
      "Minimizes the risk of cold joints in the structure",
      "Helps to maintain workability when the ambient temperature is high",
      "DSCrete enhances placement efficiency, improves construction quality, and supports reliable concrete performance in challenging site conditions."
    ]
  },
  "UltimaCrete": {
    title: "UltimaCrete",
    description: "UltimaCrete is engineered using the latest superplasticizers and innovative concrete design techniques to deliver highly workable and high-strength concrete. Its enhanced rheology, branded as UltimaCrete, simplifies concrete pumping, especially for high-rise structures, and allows for optimized RCC design costs.",
    features: [
      "Higher Compressive Strength: Achieves stronger structural elements with superior load-bearing capacity.",
      "Improved Durability: Designed to resist environmental and structural stresses over time.",
      "Higher Modulus of Elasticity: Ensures better performance under load and reduces deflection.",
      "Optimized Structural Design: Enables thinner slabs, beams, and columns without compromising safety",
      "Increased Usable Space: Thinner structural sections provide more floor area for functional use.",
      "UltimaCrete is ideal for projects demanding efficient, durable, and high-performance concrete, including high-rise buildings, commercial complexes, and premium infrastructure projects."
    ]
  },
  "HydroGuard": {
    title: "HydroGuard",
    description: "HydroGuard is formulated using the latest crystalline technology, which reacts with moisture in fresh concrete to generate a non-soluble crystalline formation. This formation permeates the pores and capillary tracts of the concrete, effectively reducing its water permeability. Additionally, HydroGuard possesses self-healing properties that can repair hairline cracks, maintaining structural strength and preventing seepage.",
    features: [
      "Integral Waterproofing System: Provides comprehensive protection throughout the concrete structure.",
      "Reduces Seepage and Dampness: Minimizes water ingress, protecting interiors and finishes.",
      "Resistant to Hydrostatic Pressure: Performs effectively against water pressure from both positive and negative surfaces.",
      "Enhances Service Life: Extends the durability and longevity of concrete structures.",
      "Self-Healing: Capable of sealing hairline cracks up to 0.50 mm, preserving structural integrity."
    ]
  },
  "SFRCrete": {
    title: "SFRCrete",
    description: "SFRCrete is a ready-mix steel fiber–reinforced concrete engineered to deliver superior flexural strength, enhanced load-bearing capacity, and long-term durability, with optimized crack control for industrial flooring applications.",
    features: [
      "Full-depth 3D reinforcement ensures uniform load distribution throughout the slab, minimizing deformation and structural damage.",
      "Exceptional crack control, including microcracks, guaranteeing safer, more reliable, and efficient floor performance.",
      "Higher fatigue resistance compared to traditional reinforcement systems, significantly reducing maintenance and repair costs—even in heavy-duty environments.",
      "Superior impact resistance, preserving floor integrity and supporting uninterrupted industrial operations.",
      "Eliminates the need for steel bars or wire mesh, removing purchase, handling, and storage costs.",
      "No labor required for cutting, bending, or placing reinforcement, accelerating construction schedules and lowering overall project costs."
    ]
  },
  "SMScreed": {
    title: "SMScreed",
    description: "SMScreed has been designed using the latest advanced superplasticizers and unique concrete design techniques to create a high concrete with higher workability, easy to place, and excellent finishing quality.",
    features: [
      "Used as a structural topping as well as wearing surfaces",
      "Helps to maintain the level of flooring, though it does not contribute to the structural performance of the floor",
      "excellent finishing quality",
      "flooring level maintenance",
      "non-structural",
      "high workability concrete",
      "floor finishing"
    ]
  },
  "ShineTop": {
    title: "ShineTop",
    description: "In today’s fast-paced industrial environment, factories, warehouses, and distribution centers demand flooring solutions that can withstand heavy loads, high traffic, and continuous operations. Traditional concrete floors often fall short—they are prone to cracking, spalling, and wear under stress, leading to frequent repairs, operational downtime, and added maintenance costs that impact productivity and reputation, to solve this issue we introduce ShineTop, a concrete specially designed for industrial floor.",
    features: [
      "High compressive and tensile strength to withstand heavy machinery, forklifts, and high-traffic operations.",
      "Advanced formulations reduce cracking, spalling, and surface degradation.",
      "Long-lasting performance minimizes downtime and maintenance costs.",
      "Smooth, level surfaces enhance safety, equipment efficiency, and workflow.",
      " Expert guidance for industrial layouts, load requirements, and environmental conditions."
    ]
  },
  "ESCrete": {
    title: "ESCrete",
    description: "An amazing concrete that is designed to accelerate the rate of hydration and gain high early strength within 3 to 7 days without altering the quality.",
    features: [
      "Quick Formwork Removal: Early strength development allows rapid de-shuttering of RCC structures.",
      "Increased Formwork Rotations: Reduced de-shuttering time enables more rotations, improving overall productivity.",
      "Faster Project Completion: Speeds up construction timelines, saving both manhours and resources.",
      "Early Traffic Access: Ideal for concrete pavements and bridge repairs, allowing quicker opening to traffic.",
      "Enhanced Structural Integrity: Strengthens machine foundations, precast sections, and flat slabs.",
    ]
  },
  "SMartcrete": {
    title: "SMartcrete",
    description: "SMartcrete is a pre-packaged concrete mix that contains the correct proportions of cement, sand, aggregates, and sometimes additives. These are sold in bags (usually 35 kg per Bag) and no require the addition of water to produce concrete ready for use. Unlike traditional concrete, which is mixed on-site, SMartcrete is pre-measured and quality-controlled, making it convenient for small to medium construction projects.",
    features: [
      "Factory-controlled production ensures the correct ratio of cement, sand, and aggregates, reducing errors from manual mixing on-site.",
      "Eliminates the need for measure raw materials individually. Just mix with water and it’s ready to use.",
      "Bags can be transported easily to sites of any size, including areas where traditional concrete trucks cannot reach.",
      "Pre-measured quantities minimize material wastage compared to on-site mixing.",
      "Ideal for home repairs, pavements, garden paths, or small-scale constructions without needing a large batching plant.",
      "Because the mix is standardized, the compressive strength and durability of the concrete are more predictable",
      "Can be used by semi-skilled workers or DIY enthusiasts, unlike conventional concrete, which needs proper proportioning knowledge."
    ]
  }
};

const specialSolutions = [
  {
    category: "Advance Structural Solutions",
    items: ["Hi Fluide", "Ultra Fluide", "DSCrete"]
  },
  {
    category: "Durability Solutions",
    items: ["UltimaCrete", "HydroGuard"]
  },
  {
    category: "Floor & Slab Solutions",
    items: ["SFRCrete", "SMScreed", "ShineTop"]
  },
  {
    category: "Smart Repair Solutions",
    items: ["ESCrete", "SMartcrete"]
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (productName) => {
    // Exact match or fallback for case sensitivity if needed
    const details = productDetails[productName] || {
      title: productName,
      description: "Details coming soon...",
      features: []
    };
    setSelectedProduct(details);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Solutions"
          title="Our Products"
          description="We offer tailored mix designs using the latest technological advances in superplastisizers and unique concrete design techniques."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Normal Concrete Card */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Normal Concrete</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></span>
                Normal Concrete up to M50 Grade
              </li>
            </ul>
          </motion.div>

          {/* Special Solutions Cards */}
          {specialSolutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{solution.category}</h3>
              </div>

              <ul className="space-y-2">
                {solution.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center group cursor-pointer"
                    onClick={() => openModal(item)}
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 group-hover:bg-red-600 transition-colors flex-shrink-0"></span>
                    <span className="text-gray-600 group-hover:text-red-600 transition-colors border-b border-transparent group-hover:border-red-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Product Detail Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="relative z-50">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                onClick={closeModal}
              />

              {/* Modal Container */}
              <div className="fixed inset-0 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col max-h-[90vh]"
                >
                  {/* Close Button Header */}
                  <div className="absolute top-4 right-4 z-10">
                    <button
                      onClick={closeModal}
                      className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-sm border border-gray-100"
                    >
                      <X className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>

                  {/* Scrollable Content */}
                  <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 mt-2">
                      {selectedProduct.title}
                    </h3>

                    <div className="prose prose-blue max-w-none">
                      <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
                        {selectedProduct.description}
                      </p>

                      {selectedProduct.features && selectedProduct.features.length > 0 && (
                        <div className="bg-blue-50 rounded-xl p-6">
                          <h4 className="font-semibold text-red-600 mb-3 text-sm uppercase tracking-wider">Key Features</h4>
                          <ul className="space-y-3">
                            {selectedProduct.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-red-600 text-sm">
                                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0"></span>
                                <span className="flex-1">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Fixed Footer */}
                  <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-end shrink-0 rounded-b-2xl">
                    <button
                      onClick={closeModal}
                      className="px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-sm"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Products