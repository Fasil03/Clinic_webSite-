import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "@/styles/layout/Header.css";
import logo from "@/assets/images/logo.png";

function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Adebabay Clinic" className="logo-img" />
            <div className="logo-text">
              <span className="logo-name">Adebabay</span>
              <span className="logo-tagline">Medical Clinic</span>
            </div>
          </Link>
        </div>

        {/* Navigation - Keeping your exact structure */}
        <nav className={menuOpen ? "nav open" : "nav"}>
          <ul className="nav-list">
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">About</Link>
            </li>
            <li className={location.pathname === "/services" ? "active" : ""}>
              <Link to="/services">Services</Link>
            </li>
            <li className={location.pathname === "/activities" ? "active" : ""}>
              <Link to="/activities">Activities</Link>
            </li>
            <li className={location.pathname === "/location" ? "active" : ""}>
              <Link to="/location">Location</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Theme Toggle */}
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu Toggle */}
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;