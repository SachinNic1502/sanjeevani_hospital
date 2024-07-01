import React from 'react';
import { motion } from 'framer-motion';
import hero from '../images/docter-hero.png'; 
import heroBg from '../images/hero-bg.png';

const Hero = () => {
  return (
    <section className="section hero" id="home" style={{ backgroundImage: `url(${heroBg})` }} aria-label="hero">
      <div className="container mx-auto">
        <motion.div
          className="hero-content text-[#0e254e]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p className="h1 section-subtitle"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome
          </motion.p>
          <motion.h1 className="h2 hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We Are Best Pediatric & Neonatal Service
          </motion.h1>
          <motion.p className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Since 2004, our Pediatric and Neonatal Hospital has been a
            beacon of hope and care for countless families. Our unwavering
            commitment to excellence in healthcare has established us as a
            trusted name in pediatric and neonatal care. Every child
            deserves the best possible start in life, and we are dedicated
            to providing just that.
          </motion.p>
          <motion.form action="" className="btn"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="tel:+917774073015" className="btn">Book appointment</a>
          </motion.form>
        </motion.div>
        <motion.figure
          className="hero-banner"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.img src={hero} width="587" height="839" alt="hero banner" className="w-100"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.figure>
      </div>
    </section>
  );
}

export default Hero;


// import React from 'react';
// import { motion } from 'framer-motion';
// import hero from '../images/hero-banner.png';
// import heroBg from '../images/hero-bg.png';

// const Hero = () => {
//   return (
//     <section
//       className="section hero bg-cover bg-center py-16"
//       id="home"
//       style={{ backgroundImage: `url(${heroBg})` }}
//       aria-label="hero"
//     >
//       <div className="container mx-auto px-4 flex flex-col items-center lg:flex-row lg:justify-between">
//         <motion.div
//           className="hero-content text-center lg:text-left lg:max-w-lg space-y-6"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <motion.p
//             className="text-7xl font-bold text-[#0e254e] mb-4 leading-none"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             Welcome
//           </motion.p>
//           <motion.h1
//             className="text-6xl font-bold text-[#0e254e] mb-6 leading-tight"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.6 }}
//           >
//             We Are Best Pediatric & Neonatal Service
//           </motion.h1>
//           <motion.p
//             className="text-[#0e254e] text-lg mb-8 leading-relaxed"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.9 }}
//           >
//             Since 2004, our Pediatric and Neonatal Hospital has been a beacon of hope and care for countless families. Our unwavering commitment to excellence in healthcare has established us as a trusted name in pediatric and neonatal care. Every child deserves the best possible start in life, and we are dedicated to providing just that.
//           </motion.p>
//           <a
//             href="tel:+917774073015"
//             className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             Book appointment
//           </a>
//         </motion.div>
//         <motion.figure
//           className="hero-banner mt-8 lg:mt-0"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <img
//             src={hero}
//             style={{ height: 'auto', maxWidth: '100%' }}
//             alt="hero banner"
//           />
//         </motion.figure>
//       </div>
//     </section>
//   );
// }

// export default Hero;
