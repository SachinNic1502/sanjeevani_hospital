import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import doctor1 from '../images/doctor-1.png';
import doctor2 from '../images/doctor-2.png';
import doctor3 from '../images/doctor-3.png';

const Doctors = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="section doctor" id="doctor" aria-label="doctor">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.p
          className="section-subtitle text-center"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          Our Doctors
        </motion.p>
        <motion.h2
          className="h2 section-title text-center"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          Meet Our Qualified Doctors
        </motion.h2>
        <motion.ul
          className="doctor-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.li
            className="flex flex-col items-center text-center bg-white shadow-lg p-4 rounded-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="doctor-card">
              <div className="card-banner mb-4">
                <img
                  src={doctor1}
                  width="240"
                  height="280"
                  loading="lazy"
                  alt="Sandeep Madane"
                  className="img-cover rounded-lg"
                />
                <div className="card-social flex justify-center mt-4 space-x-3">
                  <a href="#" className="social-link text-blue-600 hover:text-blue-800">
                    <FaFacebookF size={18} />
                  </a>
                  <a href="#" className="social-link text-blue-400 hover:text-blue-600">
                    <FaTwitter size={18} />
                  </a>
                  <a href="#" className="social-link text-pink-600 hover:text-pink-800">
                    <FaInstagram size={18} />
                  </a>
                </div>
              </div>
              <h3 className="h3 text-lg font-semibold">
                <a href="#" className="card-title hover:underline">Dr. Amol Seth</a>
              </h3>
              <p className="card-subtitle text-gray-500">M.B.B.S. D.C.H. (Director)</p>
              <p className="card-subtitle text-gray-500">Consultant Pediatrician & Neonatologist</p>
            </div>
          </motion.li>
          <motion.li
            className="flex flex-col items-center text-center bg-white shadow-lg p-4 rounded-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="doctor-card">
              <div className="card-banner mb-4">
                <img
                  src={doctor2}
                  width="240"
                  height="280"
                  loading="lazy"
                  alt="Sangita Madane"
                  className="img-cover rounded-lg"
                />
                <div className="card-social flex justify-center mt-4 space-x-3">
                  <a href="#" className="social-link text-blue-600 hover:text-blue-800">
                    <FaFacebookF size={18} />
                  </a>
                  <a href="#" className="social-link text-blue-400 hover:text-blue-600">
                    <FaTwitter size={18} />
                  </a>
                  <a href="#" className="social-link text-pink-600 hover:text-pink-800">
                    <FaInstagram size={18} />
                  </a>
                </div>
              </div>
              <h3 className="h3 text-lg font-semibold">
                <a href="#" className="card-title hover:underline">Dr. Sarika Seth</a>
              </h3>
              <p className="card-subtitle text-gray-500">B.A.M.S.</p>
              <p className="card-subtitle text-gray-500">Doctor</p>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
};

export default Doctors;
