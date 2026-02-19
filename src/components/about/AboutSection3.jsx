import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaBrain,
  FaFlask,
  FaUsers
} from 'react-icons/fa';

function AboutSection3() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-600 font-medium mb-6">
            <FaUsers className="mr-2" />
            Our Leadership
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Visionaries</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class researchers and engineers dedicated to advancing AI technology
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Sarah Chen",
              role: "Chief AI Scientist",
              expertise: "Deep Learning, Computer Vision",
              education: "PhD MIT, 15+ years",
              image: "/team/sarah.jpg",
              social: { linkedin: "#", twitter: "#", email: "#" }
            },
            {
              name: "Dr. James Wilson",
              role: "Head of Research",
              expertise: "Reinforcement Learning, Robotics",
              education: "PhD Stanford, 20+ papers",
              image: "/team/james.jpg",
              social: { linkedin: "#", twitter: "#", email: "#" }
            },
            {
              name: "Dr. Priya Patel",
              role: "Director of Engineering",
              expertise: "ML Systems, MLOps",
              education: "PhD Berkeley, 10+ years",
              image: "/team/priya.jpg",
              social: { linkedin: "#", twitter: "#", email: "#" }
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                {/* Image Placeholder - Replace with actual images */}
                <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                      {member.expertise.split(',')[0]}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.expertise}</p>
                  <p className="text-gray-500 text-xs mb-4">{member.education}</p>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <FaLinkedin className="text-lg" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <FaTwitter className="text-lg" />
                    </a>
                    <a href={member.social.email} className="text-gray-400 hover:text-purple-600 transition-colors">
                      <FaEnvelope className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center"
        >
          <FaFlask className="text-5xl mx-auto mb-6 opacity-50" />
          <p className="text-2xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed">
            "Our team combines academic excellence with industry experience to 
            deliver AI solutions that are both innovative and practical."
          </p>
          <div className="mt-6">
            <div className="w-20 h-1 bg-white/30 mx-auto rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection3;