import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "@/styles/layout/Header.css";
import logo from "@/assets/images/logo.png";

function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // ✅ ADD
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
      <div className="logo">
        <img src={logo} alt="Adebabay Clinic" />
      </div>

      <nav className={menuOpen ? "nav open" : "nav"}>
        <ul>
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

      <div className="header-actions">
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}

export default Header;
