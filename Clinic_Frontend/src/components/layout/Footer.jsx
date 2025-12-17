import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { footerApi } from "@/api/footerApi";
import "@/styles/layout/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      setLoading(true);
      try {
        const data = await footerApi.getFooterContent();
        setFooterData(data);
      } catch (err) {
        console.error('Error loading footer:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setNewsletterStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setNewsletterStatus('success');
      setEmail("");
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setNewsletterStatus(null);
      }, 3000);
    }, 1000);
  };

  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'facebook': return <FaFacebook />;
      case 'twitter': return <FaTwitter />;
      case 'instagram': return <FaInstagram />;
      case 'linkedin': return <FaLinkedin />;
      default: return null;
    }
  };

  if (loading || !footerData) {
    return <footer className="footer loading">Loading...</footer>;
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          {/* Clinic Info */}
          <div className="footer-column clinic-info">
            <h3 className="footer-title">{footerData.clinicName}</h3>
            <div className="contact-details">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>{footerData.address}</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <a href={`tel:${footerData.phone}`}>{footerData.phone}</a>
                  {footerData.emergencyContact && (
                    <div className="emergency">
                      <strong>Emergency:</strong>
                      <a href={`tel:${footerData.emergencyContact}`}>{footerData.emergencyContact}</a>
                    </div>
                  )}
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href={`mailto:${footerData.email}`}>{footerData.email}</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {footerData.quickLinks && footerData.quickLinks.length > 0 && (
            <div className="footer-column">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                {footerData.quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.url} target={link.target || "_self"}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Services Links */}
          {footerData.serviceLinks && footerData.serviceLinks.length > 0 && (
            <div className="footer-column">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links">
                {footerData.serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.url} target={link.target || "_self"}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Newsletter */}
          {footerData.newsletterEnabled && (
            <div className="footer-column newsletter">
              <h3 className="footer-title">{footerData.newsletterTitle || "Newsletter"}</h3>
              <p className="newsletter-desc">
                {footerData.newsletterDescription || "Subscribe to our newsletter for updates."}
              </p>
              
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" disabled={newsletterStatus === 'loading'}>
                  {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              
              {newsletterStatus === 'success' && (
                <div className="newsletter-success">
                  ✓ Thank you for subscribing!
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Social Links & Legal */}
      <div className="footer-middle">
        <div className="footer-container">
          {/* Social Links */}
          {footerData.socialLinks && footerData.socialLinks.length > 0 && (
            <div className="social-links">
              {footerData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.displayName || social.platform}
                  aria-label={social.displayName || social.platform}
                >
                  {getSocialIcon(social.platform) || (
                    <span className="social-icon">{social.platform.charAt(0)}</span>
                  )}
                </a>
              ))}
            </div>
          )}

          {/* Legal Links */}
          {footerData.legalLinks && footerData.legalLinks.length > 0 && (
            <div className="legal-links">
              {footerData.legalLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <Link to={link.url} target={link.target || "_self"}>
                    {link.text}
                  </Link>
                  {index < footerData.legalLinks.length - 1 && <span className="separator">|</span>}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p className="copyright">
            {footerData.copyrightText || `© ${new Date().getFullYear()} ${footerData.clinicName}. All rights reserved.`}
          </p>
          
          {footerData.developedBy && (
            <p className="developed-by">
              Developed by{' '}
              {footerData.developedByLink ? (
                <a href={footerData.developedByLink} target="_blank" rel="noopener noreferrer">
                  {footerData.developedBy}
                </a>
              ) : (
                <span>{footerData.developedBy}</span>
              )}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;