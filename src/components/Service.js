import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Pediatric from '../images/Pediatric.png';
import NICU from '../images/NICU.png';
import PICU from '../images/PICU.jpg';
import serviceIcon4 from '../images/service-icon-4.png';
import daycare from '../images/daycare.png';
import Emergency_Services from '../images/Emergency_Services.png';
import babybanner from '../images/babybanner.jpg';

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
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

  const imgSize = "h-24 w-24";

  return (
    <section className="section service" id="service" aria-label="service">
      <div className="container mx-auto py-12" ref={ref}>
        <motion.p
          className="text-4xl text-center text-[#0e254e] mb-4"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <p class="section-subtitle text-center">Our Services</p>

        </motion.p>
        <motion.h2
          className="text-6xl font-bold text-center text-[#0e254e] mb-8"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <h2 class="h2 section-title text-center">What We Provide</h2>

        </motion.h2>
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.li
            className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg"
            variants={itemVariants}
          >
            <div className="mb-4">
              <img src={Pediatric} alt="Pediatric & Neonatal Care" className={imgSize} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Pediatric & Neonatal Care</h3>
            <p className="text-gray-600">
              General Pediatrics: Routine health check-ups, vaccinations, growth and development assessments, and
              treatment of common illnesses.
            </p>
          </motion.li>
          <motion.li
            className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg"
            variants={itemVariants}
          >
            <div className="mb-4">
              <img src={NICU} alt="NICU" className={imgSize} />
            </div>
            <h3 className="text-2xl font-bold mb-2">NICU</h3>
            <p className="text-gray-600">
              Neonatal Care: Specialized care for premature and critically ill newborns, including neonatal intensive care
              units (NICU).
            </p>
          </motion.li>
          <motion.li
            className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg"
            variants={itemVariants}
          >
            <div className="mb-4">
              <img src={PICU} alt="PICU" className={imgSize} />
            </div>
            <h3 className="text-2xl font-bold mb-2">PICU</h3>
            <p className="text-gray-600">
              Intensive Care Units (PICU): Intensive care for critically ill children who require constant monitoring and advanced
              medical care.
            </p>
          </motion.li>
          <motion.li className="col-span-full flex justify-center" variants={itemVariants}>
            <figure>
              <img src={babybanner} alt="service banner" className="w-full max-w-lg rounded-full" />
            </figure>
          </motion.li>
          <motion.li
            className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg"
            variants={itemVariants}
          >
            <div className="mb-4">
              <img src={serviceIcon4} alt="General Medicine" className={imgSize} />
            </div>
            <h3 className="text-2xl font-bold mb-2">General Medicine</h3>
            <p className="text-gray-600">
              Primary Care: Routine health check-ups, preventive care, and health screenings to maintain overall well-being.
            </p>
          </motion.li>
          <motion.li
            className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg"
            variants={itemVariants}
          >
            <div className="mb-4">
              <img src={daycare} alt="Day Care Services" className={imgSize} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Day Care Services</h3>
            <p className="text-gray-600">
              Day Care: Plans and procedures in place to handle any medical emergencies that may arise during day care hours.
            </p>
          </motion.li>
          <motion.li
            className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg"
            variants={itemVariants}
          >
            <div className="mb-4">
              <img src={Emergency_Services} alt="Emergency Services" className={imgSize} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Emergency Services</h3>
            <p className="text-gray-600">
              Emergency Care: 24/7 emergency services for acute illnesses and injuries, including trauma care and
              pediatric emergency rooms.
            </p>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
}

export default Services;
