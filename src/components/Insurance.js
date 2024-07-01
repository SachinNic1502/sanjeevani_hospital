import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import insuranceBanner from '../images/insuranceBanner.png';
import HDFC_ERGO from '../images/insurance/HDFC_ERGO.png';
import ICICI_Lombard from '../images/insurance/ICICI_Lombard.png';
import New_India_Assurance from '../images/insurance/New_India_Assurance.png';
import NivaBupa from '../images/insurance/NivaBupa.jpg';
import Oriental_Insurance from '../images/insurance/Oriental_Insurance.png';
import reliance_insurance from '../images/insurance/reliance_insurance.png';
import SBI_General from '../images/insurance/SBI_General.jpeg';
import Star_Health from '../images/insurance/Star_Health.png';
import uiic from '../images/insurance/uiic.png';

const insuranceCompanies = [
  {
    name: 'HDFC ERGO',
    image: HDFC_ERGO,
    description: 'HDFC ERGO offers comprehensive coverage and cashless claims at numerous network hospitals. Enjoy quick and efficient claim processing.',
  },
  {
    name: 'ICICI Lombard',
    image: ICICI_Lombard,
    description: 'ICICI Lombard provides extensive health insurance plans with numerous benefits and quick claim settlements.',
  },
  {
    name: 'New India Assurance',
    image: New_India_Assurance,
    description: 'New India Assurance offers a wide range of insurance products with robust coverage and easy claim procedures.',
  },
  {
    name: 'Niva Bupa',
    image: NivaBupa,
    description: 'Niva Bupa Health Insurance ensures that you and your family receive the best medical care with cashless hospitalization.',
  },
  {
    name: 'Oriental Insurance',
    image: Oriental_Insurance,
    description: 'Oriental Insurance provides comprehensive health insurance policies with cashless treatment at numerous hospitals.',
  },
  {
    name: 'Reliance Insurance',
    image: reliance_insurance,
    description: 'Reliance Health Insurance offers a range of plans with extensive coverage and hassle-free claim processes.',
  },
  {
    name: 'SBI General Insurance',
    image: SBI_General,
    description: 'SBI General Insurance offers a variety of health insurance plans to cover your medical expenses with ease.',
  },
  {
    name: 'Star Health',
    image: Star_Health,
    description: 'Star Health offers extensive health insurance plans with quick claim settlements and cashless treatment at numerous hospitals.',
  },
  {
    name: 'UIIC',
    image: uiic,
    description: 'United India Insurance provides health insurance plans that cover a range of medical expenses with cashless hospitalization.',
  },
];

const Insurance = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="section insurance" id="insurance" aria-label="insurance">
      <div className="container mx-auto px-4">
        <p className="section-subtitle text-center">Cashless Insurance facilities Available</p>
        <h2 className="h2 section-title text-center">Companies we have Tie-Up</h2>
        <div className="insurance-banner flex flex-col md:flex-row items-center border rounded-lg overflow-hidden shadow-lg bg-white px-5 py-10 md:py-16">
          <figure className="md:w-1/2">
            <motion.img
              src={insuranceBanner}
              width="560"
              height="517"
              loading="lazy"
              alt="insurance banner"
              className="w-full h-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </figure>
          <motion.div
            className="insurance-content md:w-1/2 md:ml-6 p-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">Insurance Facility</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-center md:text-left">
              Our hospital proudly collaborates with leading insurance companies to offer comprehensive coverage for your medical needs. We aim to make healthcare accessible and affordable for all. Trust us to provide the best care while ensuring you are financially protected.
            </p>
            <div className="about-list mb-6">
            <div className="about-item flex items-center mb-2">
                <IoCheckmarkDoneCircleSharp className="text-blue-600 mr-2"/>
                <span>Coverage for a range of medical services</span>
              </div>
              <div className="about-item flex items-center mb-2">
                <IoCheckmarkDoneCircleSharp className="text-blue-600 mr-2" />
                <span>Cashless hospitalization</span>
              </div>
              <div className="about-item flex items-center mb-2">
                <IoCheckmarkDoneCircleSharp className="text-blue-600 mr-2" />
                <span>Efficient claim processing</span>
              </div>
            </div>
            <div className="insurance-companies space-y-4">
              {insuranceCompanies.map((company, index) => (
                <motion.div
                  key={index}
                  className="insurance-company bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className="cursor-pointer p-4 flex items-center justify-between border-b"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="text-lg font-bold">{company.name}</h3>
                    <span>{activeIndex === index ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
                  </div>
                  {activeIndex === index && (
                    <div className="p-4 flex flex-col md:flex-row items-center">
                      <img
                        src={company.image}
                        alt={company.name}
                        className="w-24 h-24 mb-4 md:mb-0 md:mr-4 object-contain"
                      />
                      <p className="text-gray-600 text-md text-center md:text-left">{company.description}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Insurance Partners</h2>
          <Slider {...settings}>
            {insuranceCompanies.map((company, index) => (
              <motion.div
                key={index}
                className="p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                  <img src={company.image} alt={company.name} className="w-24 h-24 object-contain mb-4" />
                  <h3 className="text-lg font-bold text-center">{company.name}</h3>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Insurance;
