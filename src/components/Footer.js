import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'; // Example imports, use appropriate icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">Sanjeevani Hospital</a>
            <p className="footer-text">
              Mauris non nisi semper, lacinia neque in, dapibus leo. Curabitur
              sagittis libero tincidunt tempor finibus. Mauris at dignissim
              ligula, nec tristique orci.Quisque vitae metus.
            </p>
            <div className="schedule">
              <div className="schedule-icon">
                <FiMapPin />
              </div>
              <span className="span">
                Monday - Saturday:<br />
                9:00 AM - 08:00 PM
              </span>
            </div>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Other Links</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                <span className="span">Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="footer-link">
                <span className="span">About Us</span>
              </a>
            </li>
            <li>
              <a href="#service" className="footer-link">
                <span className="span">Services</span>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <span className="span">Our Team</span>
              </a>
            </li>
            <li>
              <a href="#insurance" className="footer-link">
                <span className="span">Cashless Insurance</span>
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Our Services</p>
            </li>
            <li>
              <a href="#service" className="footer-link">
                <span className="span">Pediatric & Neonatal Care</span>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <span className="span">General Medicine</span>
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Us</p>
            </li>
            <li className="footer-item">
              <div className="item-icon">
                <FiMapPin />
              </div>
              <address className="item-text">
                3185/10, Datta Chaitanya Nagar, Pachora Road, Jamner<br />
                Dist-Jalgaon 424206 (M.S.)
              </address>
            </li>
            <li className="footer-item">
              <div className="item-icon">
                <FiPhone />
              </div>
              <a href="tel:+917774073015" className="footer-link">+91-7774073015</a>
            </li>
            <li className="footer-item">
              <div className="item-icon">
                <FiMail />
              </div>
              <a href="mailto:sanjivanihospitaljmr@gmail.com" className="footer-link">sanjivanihospitaljmr@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 All Rights Reserved by Sanjeevani.
          </p>
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
