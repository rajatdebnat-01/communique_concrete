import { motion } from 'framer-motion';
import { useState } from 'react';

const SectionHeader = ({ badge, title, description }) => (
  <div className="text-center mb-16">
    <motion.span
      className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-red-600 bg-red-100 rounded-full"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      {badge}
    </motion.span>
    <motion.h2
      className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    <motion.p
      className="text-lg text-gray-600 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      {description}
    </motion.p>
  </div>
);

const projectCategories = [
  {
    title: "Government Sector",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    color: "red",
    projects: {
      "Healthcare": [
        "Neuroscience Institute",
        "JIMS Hospital",
        "SSKM Hospital",
        "Sambhunath Pandit Hospital",
        "Howrah Hospital",
        "Bangur Hospital"
      ],
      "Education": [
        "Hindi University",
        "Mrinalini Dutta College"
      ],
      "Infrastructure": [
        "Sankrail ROB Project",
        "Bauria ROB Project"
      ],
      "Railways": [
        "Shalimar Station project",
        "Santragachi Station project",
        "Liluah Workshop project",
        "Kanchrapara Workshop project",
        "Dakhineswar Railway Station",
        "Dumdum Railway Station"
      ],
      "Others": [
        "Shyamnagar WTP (PHE)",
        "2nd Hooghly Bridge (HRBC)"
      ]
    }
  },
  {
    title: "Industries",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    color: "ash",
    projects: {
      "Manufacturing & Logistics": [
        "Jindal India LTD",
        "Fort Gloster Industries",
        "Srijan Logistics Park",
        "Asbesco India Pvt Ltd",
        "Kamals Ice Cream",
        "Mescab India Pvt. Ltd.",
        "Vinayak Oil & Fat",
        "Haldiram"
      ]
    }
  },
  {
    title: "Real Estate Developers",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    color: "red",
    projects: [
      "Siddha Waterfront llp",
      "Srijan Realty Pvt Ltd",
      "Eden Group",
      "Swastic Group",
      "KIC Group",
      "Sky Line Group",
      "Nikki Group",
      "Jain Group"
    ]
  }
];

const colorSchemes = {
  red: {
    bg: "from-red-600 to-red-700",
    light: "bg-red-50",
    border: "border-red-200",
    text: "text-red-700",
    hover: "hover:border-red-400 hover:shadow-red-100"
  },
  ash: {
    bg: "from-slate-600 to-slate-700",
    light: "bg-slate-50",
    border: "border-slate-200",
    text: "text-slate-700",
    hover: "hover:border-slate-400 hover:shadow-slate-100"
  }
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Work"
          title="Our Projects"
          description="Trusted by leading organizations across various sectors with proven track record of excellence"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category, index) => {
            const colors = colorSchemes[category.color];
            return (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === index
                  ? `bg-gradient-to-r ${colors.bg} text-white shadow-lg scale-105`
                  : `bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 shadow-md`
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.title}
              </motion.button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projects Column */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${colorSchemes[projectCategories[activeTab].color].bg} p-6 md:p-8`}>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={projectCategories[activeTab].icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{projectCategories[activeTab].title}</h3>
                    <p className="text-white/80 text-sm mt-1">Excellence in every project</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8">
                {projectCategories[activeTab].title === "Real Estate Developers" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {projectCategories[activeTab].projects.map((project, projectIndex) => (
                      <motion.div
                        key={projectIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: projectIndex * 0.05 }}
                        className={`group relative bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border-2 ${colorSchemes[projectCategories[activeTab].color].border} ${colorSchemes[projectCategories[activeTab].color].hover} transition-all duration-300 cursor-pointer overflow-hidden`}
                      >
                        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colorSchemes[projectCategories[activeTab].color].bg} opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500`}></div>
                        <div className="relative flex items-start">
                          <div className={`w-8 h-8 rounded-lg ${colorSchemes[projectCategories[activeTab].color].light} flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <svg className={`h-5 w-5 ${colorSchemes[projectCategories[activeTab].color].text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-800 font-semibold text-base leading-relaxed">{project}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-8">
                    {Object.entries(projectCategories[activeTab].projects).map(([sector, projects], sectorIndex) => (
                      <motion.div
                        key={sectorIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: sectorIndex * 0.1 }}
                      >
                        <div className="flex items-center mb-4">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colorSchemes[projectCategories[activeTab].color].bg} mr-3`}></div>
                          <h4 className="text-xl font-bold text-gray-900">{sector}</h4>
                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {projects.map((project, projectIndex) => (
                            <motion.div
                              key={projectIndex}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: sectorIndex * 0.1 + projectIndex * 0.03 }}
                              className={`group relative bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border-2 ${colorSchemes[projectCategories[activeTab].color].border} ${colorSchemes[projectCategories[activeTab].color].hover} transition-all duration-300 cursor-pointer overflow-hidden`}
                            >
                              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colorSchemes[projectCategories[activeTab].color].bg} opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500`}></div>
                              <div className="relative flex items-start">
                                <div className={`w-8 h-8 rounded-lg ${colorSchemes[projectCategories[activeTab].color].light} flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                  <svg className={`h-5 w-5 ${colorSchemes[projectCategories[activeTab].color].text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-gray-800 font-semibold text-base leading-relaxed">{project}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar Column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24 space-y-6">
              {/* Cement Car Card */}
              <motion.div
                className="bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-2xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-8">
                  <div className="relative">
                    <motion.img
                      src="/cementcar.png"
                      alt="Cement Mixer Truck"
                      className="w-full h-auto object-contain drop-shadow-2xl"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-6 bg-blue-500/30 blur-2xl rounded-full"></div>
                  </div>
                  <div className="mt-8 text-center">
                    <h4 className="text-2xl font-bold text-white mb-2">Premium Delivery</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Modern fleet ensuring timely concrete supply to all your project sites</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-6">
                  <h4 className="text-xl font-bold text-white">Project Highlights</h4>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "Total Projects", value: "500+", color: "from-red-500 to-red-600", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="relative group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                      <div className="relative flex items-center justify-between p-4 bg-gray-50 rounded-xl border-2 border-gray-200 group-hover:border-gray-300 transition-all">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-semibold">{stat.label}</span>
                        </div>
                        <span className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;