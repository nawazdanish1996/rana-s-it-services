import "../css/navbar.css"
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Rana{"'"}s IT Services</h1>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="menu-line"></div>
          <div className="menu-line menu-line2"></div>
          <div className="menu-line"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? 'open' : 'hide'}`}>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={toggleMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="/our_services" className="nav-link" onClick={toggleMenu}>Our Services</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link" onClick={toggleMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar