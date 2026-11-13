import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaCartShopping } from 'react-icons/fa6';
import './Header.css';
import logo from '../assets/Logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navClass = ({ isActive }) => `nav-link${isActive ? ' is-current' : ''}`;

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg site-navbar" aria-label="Main navigation">
        <div className="container-xl">
          <NavLink className="navbar-brand site-brand" to="/" aria-label="Prygma home" onClick={closeMenu}>
            <img src={logo} alt="Prygma" />
          </NavLink>

          <button
            className="navbar-toggler site-nav-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="site-navigation">
            <div className="navbar-nav site-nav-links ms-lg-auto">
              <NavLink className={navClass} to="/" end onClick={closeMenu}>Home</NavLink>
              <NavLink className={navClass} to="/courses" onClick={closeMenu}>Courses</NavLink>
              <NavLink className={navClass} to="/categories" onClick={closeMenu}>Categories</NavLink>
              <NavLink className={navClass} to="/about" onClick={closeMenu}>About</NavLink>
              <NavLink className={navClass} to="/contact" onClick={closeMenu}>Contact</NavLink>
            </div>
            <div className="site-nav-actions">
              <NavLink className={({ isActive }) => `site-cart${isActive ? ' is-current' : ''}`} to="/cart" onClick={closeMenu}><FaCartShopping aria-hidden="true" /> Shopping Cart</NavLink>
              <NavLink className={({ isActive }) => `site-login${isActive ? ' is-current' : ''}`} to="/login" onClick={closeMenu}>Log in</NavLink>
              <NavLink className={({ isActive }) => `site-signup${isActive ? ' is-current' : ''}`} to="/register" onClick={closeMenu}>Sign Up <FaArrowRight aria-hidden="true" /></NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

