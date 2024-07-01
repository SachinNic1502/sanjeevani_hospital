import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutBanner from "../images/about.jpg"; // Corrected image path

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
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
    <section className="section about py-12" id="about" aria-label="about">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <motion.figure
          className="about-banner"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <img
            src={aboutBanner}
            width="570"
            height="570"
            loading="lazy"
            alt="about banner"
            className="w-100"
          />
        </motion.figure>
        <motion.div
          className="about-content"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2
            className="text-6xl font-bold mb-4 text-[#0e254e]"
            variants={itemVariants}
          >
             <p class="section-subtitle">About Us</p>

<h2 class="h2 section-title">
  We Care Neonatal & Pediatric Health
</h2>
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            Since its inception on the 22nd of July, 2004, Sanjeevani Hospital
            has been dedicated to providing exceptional neonatal and pediatric
            care. Our hospital is renowned for its comprehensive services, which
            include: Neonatal Intensive Care Unit (NICU) Pediatric Intensive
            Care Unit (PICU) General Medicine.
          </motion.p>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            We are committed to ensuring the health and well-being of our young
            patients by employing the latest modern and cutting-edge technology
            in our treatments. Our team of skilled healthcare professionals
            works tirelessly to deliver the highest standards of medical care,
            making Sanjeevani Hospital a trusted name in the community for
            nearly two decades.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

// import React from 'react';

// const About = () => {
//   return (
//     <section className="section about" id="about" aria-label="about">
//       <div className="container">
//         <figure className="about-banner">
//           <img src="./assets/images/about-banner.png" width="570" height="570" loading="lazy" alt="about banner" className="w-100" />
//         </figure>
//         <div className="about-content">
//           <h2 className="h2 section-title">About Us</h2>
//           <p className="section-text">
//             Welcome to our Pediatric and Neonatal Hospital, a beacon of hope and care since 2004. With a steadfast
//             commitment to excellence, we provide comprehensive medical services for infants, children, and adolescents.
//           </p>
//           <p className="section-text">
//             Our dedicated team of experienced healthcare professionals, state-of-the-art facilities, and cutting-edge
//             technology ensure the highest standard of care. We specialize in neonatology, pediatric surgery, intensive care,
//             and a wide range of pediatric specialties.
//           </p>
//           <ul className="about-list">
//             <li className="about-item">
//               <ion-icon name="checkmark-done-circle-outline" aria-hidden="true"></ion-icon>
//               <span className="span">Pediatric Surgery</span>
//             </li>
//             <li className="about-item">
//               <ion-icon name="checkmark-done-circle-outline" aria-hidden="true"></ion-icon>
//               <span className="span">Pediatric Surgery</span>
//             </li>
//             <li className="about-item">
//               <ion-icon name="checkmark-done-circle-outline" aria-hidden="true"></ion-icon>
//               <span className="span">Intensive Care</span>
//             </li>
//             <li className="about-item">
//               <ion-icon name="checkmark-done-circle-outline" aria-hidden="true"></ion-icon>
//               <span className="span">Pediatric Surgery</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
