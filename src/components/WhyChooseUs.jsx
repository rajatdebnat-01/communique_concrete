// import { motion } from 'framer-motion';
// import { CheckCircleIcon, TrophyIcon, UserGroupIcon, CubeIcon } from '@heroicons/react/24/outline';

// /**
//  * WhyChooseUs component displays key company features and strengths
//  * Uses a grid layout with animated cards to showcase company advantages
//  * 
//  * Features array contains:
//  * - title: Feature name/heading
//  * - description: Detailed explanation of the feature
//  * - icon: HeroIcon component to represent the feature visually
//  */
// const features = [
//   {
//     title: '25+ Years Experience',
//     description: 'Decades of expertise in delivering quality concrete solutions',
//     icon: TrophyIcon,
//   },
//   {
//     title: 'State-of-the-art Facilities',
//     description: 'Modern manufacturing plants with advanced technology',
//     icon: CubeIcon,
//   },
//   {
//     title: 'Quality Assured',
//     description: 'Rigorous quality control and testing procedures',
//     icon: CheckCircleIcon,
//   },
//   {
//     title: 'Expert Team',
//     description: 'Professional technical support and dedicated service',
//     icon: UserGroupIcon,
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     // Main section with gradient background
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
//       {/* Content container with responsive padding */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Animated section header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div
//             className="inline-block p-2 px-4 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4"
//             initial={{ scale: 0.5 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Why Choose Us
//           </motion.div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Excellence in Every Mix
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             We bring together expertise, technology, and dedication to deliver the highest quality concrete solutions for your projects.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
//             >
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
//                 <feature.icon className="w-6 h-6 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600">
//                 {feature.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;