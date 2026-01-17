// const teamMembers = [
//   {
//     name: 'Sandip Mukherjee',
//     image: '/images/team/sandip.jpg',
//     position: 'Managing Director',
//     description: 'An accomplished business leader with 26 years of experience in business development planning and enhancing strategies.',
//   },
//   {
//     name: 'Subhra Sarkar',
//     image: '/images/team/subhra.jpg',
//     position: 'GM – Business Head',
//     description: 'A civil engineer with 19 years of experience in the ready mix industry, starting his career with L&T concrete in Kolkata.',
//   },
//   {
//     name: 'Gauranga Paul',
//     image: '/images/team/gauranga.jpg',
//     position: 'DGM – Operation',
//     description: 'A mechanical engineer with 26 years of experience in construction and ready mix industry, specializing in plant & machinery operations.',
//   },
//   {
//     name: 'Soumik Rakshit',
//     image: '/images/team/soumik.jpg',
//     position: 'Sr. Manager - Business',
//     description: '12 years of experience in readymix concrete business, former Cluster Business Head at firstchoice readymix.',
//   },
//   {
//     name: 'Tamal Roy',
//     image: '/images/team/tamal.jpg',
//     position: 'Sr. Manager - Business',
//     description: '9 years of experience in readymix concrete business, former Cluster Business Head of Joka & Kharagpur plants.',
//   },
//   {
//     name: 'Shubhankar Ghosh',
//     image: '/images/team/shubhankar.jpg',
//     position: 'Sr. Manager - Business',
//     description: '14 years of experience in readymix concrete business, former Cluster Business Head of Khardah & Dankuni plants.',
//   },
//   {
//     name: 'Payel Banerjee',
//     image: '/images/team/payel.jpg',
//     position: 'Sr. Manager - HRD',
//     description: 'She started her career in Tantia Construction Limited (RMC Division) in 2010. Having more than 14 years of experience in readymix concrete business. She joined firstchoice readymix in 2019. She has worked as the HR Manager in eastern region at firstchoice readymix till August’2024.',
//   },
// ]

import { motion } from 'framer-motion';
import { Users, Award, Headset, HandHelping } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div variants={itemVariants} className="relative">
            <img
              src="/images/about/image2.png"
              alt="About Communique Concrete"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Established by seasoned professionals with decades of experience in the Ready Mix Concrete Industry,
              our commitment to precision, integrity, and client satisfaction is the cornerstone of our organization.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-blue-600 mb-2" />
                <h4 className="font-bold text-gray-900 mb-1">Expertise Team</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <Award className="w-10 h-10 text-blue-600 mb-2" />
                <h4 className="font-bold text-gray-900 mb-1">Consistent Quality</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <Headset className="w-10 h-10 text-blue-600 mb-2" />
                <h4 className="font-bold text-gray-900 mb-1">Customer Satisfaction</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <HandHelping className="w-10 h-10 text-blue-600 mb-2" />
                <h4 className="font-bold text-gray-900 mb-1">Specialized Concrete Solutions</h4>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Team Section */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 text-center mb-12">
            Our Leadership Team
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white font-bold rounded-full">
                      <img src={member.image} alt={member.name} className="w-full h-full rounded-full" />
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default About