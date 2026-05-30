import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-vos">VOS</span>
          <span className="navbar__logo-tagline">Voorlichting · Ondersteuning · Scholing</span>
        </Link>

        <button
          className={`navbar__toggle${menuOpen ? ' navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu openen"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/over-vos" onClick={closeMenu}>Over VOS</NavLink>
          <NavLink to="/diensten" onClick={closeMenu}>Diensten</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className="btn btn--primary navbar__cta">
            Scholing aanvragen
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
