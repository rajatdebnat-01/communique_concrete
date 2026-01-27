import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/images/hero/hero.jpg", "/images/hero/hero2.jpg", "/images/hero/hero4.png"];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id='hero' className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background image carousel */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentImage]}
              alt={`Concrete Plant ${currentImage + 1}`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${currentImage === index ? 'bg-white w-8 sm:w-10' : 'bg-white/50 w-2'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
        >
          Building Tomorrow with Quality Concrete Today
        </motion.h1>
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed"
        >
          A group of seasoned professionals delivering high-quality readymix concrete solutions tailored to our clients' diverse needs.
        </motion.p> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;