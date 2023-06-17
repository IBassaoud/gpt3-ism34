import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding" id="footer">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step into the future before others</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request early access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Ismail Bassaoud | ism34, <br /> All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Explore</h4>
          <p>About Us</p>
          <p>Social Media</p>
          <p>FAQs</p>
          <p>Contact Us</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Montpellier, Occitanie - France</p>
          <p>+33 7 69 23 87 83</p>
          <p>ismail.bassaoud@gmail.com</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer