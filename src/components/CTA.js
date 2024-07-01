import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ctaBanner from '../images/book-appointment-bg.png';

const CTA = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
    }
  }, [controls, inView]);

  return (
    <section className="section cta" aria-label="call to action">
      <div className="container">
        <motion.figure
          ref={ref}
          className="cta-banner"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
        >
          <img src={ctaBanner} width="516" height="367" loading="lazy" alt="call to action" className="w-full h-auto" />
        </motion.figure>
        <motion.div
          className="cta-content text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <p className="h2 section-title">Make An Appointment</p>
          <p className="text-white text-3xl md:text-5xl font-bold mt-2">
            We Are Open 24*7 to Care for Your Patients
          </p>
          <a
            href="tel:+917774073015"
            className="btn mt-4"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            Book Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
