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
          <img src="/logo.png" alt="VOS" className="navbar__logo-img" />
        </Link>

        <button
          className={`navbar__toggle${menuOpen ? ' navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="main-nav" className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`} aria-label="Hoofdnavigatie">
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
