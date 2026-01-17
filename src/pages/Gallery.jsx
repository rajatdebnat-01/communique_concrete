// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';

// const SectionHeader = ({ badge, title, description }) => (
//     <div className="text-center mb-16">
//         <motion.span
//             className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//         >
//             {badge}
//         </motion.span>
//         <motion.h2
//             className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//         >
//             {title}
//         </motion.h2>
//         <motion.p
//             className="text-lg text-gray-600 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//         >
//             {description}
//         </motion.p>
//     </div>
// );

// const galleryImages = [
//     {
//         id: 1,
//         src: "/images/hero/hero.jpg",
//         category: "Facilities",
//         title: "Modern Cement Truck",
//         description: "High-quality readymix concrete delivery"
//     },
//     {
//         id: 2,
//         src: "/images/hero/hero2.jpg",
//         category: "Infrastructure",
//         title: "Our Plant",
//         description: "State-of-the-art concrete production facility"
//     },
//     {
//         id: 3,
//         src: "/images/hero/hero4.png",
//         category: "All",
//         title: "Our Managing Director",
//         description: "Leading with excellence"
//     },
//     {
//         id: 4,
//         src: "/images/hero/hero3.png",
//         category: "Facilities",
//         title: "Our Dedicated Team",
//         description: "Committed to quality and service"
//     },
//     {
//         id: 5,
//         src: "/images/gallery/image.png",
//         category: "All",
//         title: "Event Image",
//         description: "Company gathering and celebration"
//     },
//     {
//         id: 6,
//         src: "/images/gallery/image2.jpg",
//         category: "Infrastructure",
//         title: "Our plant",
//         description: "Concrete production facility"
//     },
//     {
//         id: 7,
//         src: "/images/gallery/image3.jpeg",
//         category: "All",
//         title: "Managing Director",
//         description: "Managing Director in Event"
//     },
//     {
//         id: 8,
//         src: "/images/gallery/image4.jpeg",
//         category: "Projects",
//         title: "Our Opening Event",
//         description: "Inauguration ceremony"
//     },
//     {
//         id: 9,
//         src: "/images/gallery/image5.jpeg",
//         category: "All",
//         title: "Our Sr. Manager - Business Development",
//         description: "Sr. Manager - Business Development in Event"
//     }
// ];

// const categories = ["All", "Infrastructure", "Equipment", "Projects", "Facilities"];

// const Gallery = () => {
//     const [selectedCategory, setSelectedCategory] = useState("All");
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [viewMode, setViewMode] = useState("masonry"); // grid or masonry

//     const filteredImages = selectedCategory === "All"
//         ? galleryImages
//         : galleryImages.filter(img => img.category === selectedCategory);

//     return (
//         <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
//                 <SectionHeader
//                     badge="Our Work"
//                     title="Project Gallery"
//                     description="Explore our portfolio of completed projects and ongoing work across various sectors"
//                 />

//                 {/* Filter Controls */}
//                 <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
//                     {/* Category Filters */}
//                     <div className="flex flex-wrap justify-center gap-3">
//                         {categories.map((category) => (
//                             <motion.button
//                                 key={category}
//                                 onClick={() => setSelectedCategory(category)}
//                                 className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${selectedCategory === category
//                                         ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
//                                         : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:shadow-md'
//                                     }`}
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                             >
//                                 {category}
//                             </motion.button>
//                         ))}
//                     </div>

//                     {/* View Mode Toggle */}
//                     <div className="flex gap-2 bg-white rounded-lg p-1 shadow-md border border-gray-200">
//                         <button
//                             onClick={() => setViewMode("grid")}
//                             className={`p-2 rounded-md transition-all ${viewMode === "grid" ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
//                                 }`}
//                         >
//                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
//                             </svg>
//                         </button>
//                         <button
//                             onClick={() => setViewMode("masonry")}
//                             className={`p-2 rounded-md transition-all ${viewMode === "masonry" ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
//                                 }`}
//                         >
//                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 12a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7z" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>

//                 {/* Gallery Grid */}
//                 <motion.div
//                     className={
//                         viewMode === "grid"
//                             ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//                             : "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
//                     }
//                     layout
//                 >
//                     <AnimatePresence>
//                         {filteredImages.map((image, index) => (
//                             <motion.div
//                                 key={image.id}
//                                 layout
//                                 initial={{ opacity: 0, scale: 0.8 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 exit={{ opacity: 0, scale: 0.8 }}
//                                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                                 className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${viewMode === "masonry" ? "break-inside-avoid mb-6" : ""
//                                     }`}
//                                 onClick={() => setSelectedImage(image)}
//                                 whileHover={{ y: -8 }}
//                             >
//                                 {/* Image */}
//                                 <div className="relative overflow-hidden">
//                                     <img
//                                         src={image.src}
//                                         alt={image.title}
//                                         className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                                     />

//                                     {/* Gradient Overlay */}
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                                     {/* Category Badge */}
//                                     <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600">
//                                         {image.category}
//                                     </div>

//                                     {/* Expand Icon */}
//                                     <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:rotate-90">
//                                         <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
//                                         </svg>
//                                     </div>

//                                     {/* Info Overlay */}
//                                     <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//                                         <h3 className="text-xl font-bold mb-1">{image.title}</h3>
//                                         <p className="text-sm text-gray-200">{image.description}</p>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </AnimatePresence>
//                 </motion.div>

//                 {/* Empty State */}
//                 {filteredImages.length === 0 && (
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="text-center py-20"
//                     >
//                         <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                             </svg>
//                         </div>
//                         <h3 className="text-xl font-semibold text-gray-900 mb-2">No images found</h3>
//                         <p className="text-gray-600">Try selecting a different category</p>
//                     </motion.div>
//                 )}
//             </div>

//             {/* Lightbox Modal */}
//             <AnimatePresence>
//                 {selectedImage && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
//                         onClick={() => setSelectedImage(null)}
//                     >
//                         <motion.div
//                             initial={{ scale: 0.8, opacity: 0 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             exit={{ scale: 0.8, opacity: 0 }}
//                             transition={{ type: "spring", damping: 25 }}
//                             className="relative max-w-2xl  w-full"
//                             onClick={(e) => e.stopPropagation()}
//                         >
//                             {/* Close Button */}
//                             <button
//                                 onClick={() => setSelectedImage(null)}
//                                 className="absolute -top-5 -right-12 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
//                             >
//                                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>

//                             {/* Image */}
//                             <img
//                                 src={selectedImage.src}
//                                 alt={selectedImage.title}
//                                 className="w-full h-auto rounded-2xl shadow-2xl"
//                             />

//                             {/* Image Info */}
//                             <div className="mt-6 text-white text-center">
//                                 <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-xs font-semibold mb-3">
//                                     {selectedImage.category}
//                                 </span>
//                                 <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
//                                 <p className="text-gray-300">{selectedImage.description}</p>
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </section>
//     );
// };

// export default Gallery;