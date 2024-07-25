import React from 'react';
import './header.css';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          Services
          <div className="dropdown-content">
            <div className="dropdown-section">
              <h4>English Editing</h4>
              <ul>
                <li><Link href={'/PackageService'}>Proofreading</Link></li>
                <li>Substantive Editing</li>
              </ul>
            </div>
            <div className="dropdown-section">
              <h4>Publication Support</h4>
              <ul>
                <li>Journal Selection</li>
                <li>Manuscript Submission</li>
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item">
          Quality
          <div className="dropdown-content-vertical">
            <ul>
              <li>Quality Assurance</li>
              <li>Quality Control</li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          Editor
          <div className="dropdown-content-vertical">
            <ul>
              <li>Meet the Editors</li>
              <li>Editor Guidelines</li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          More
          <div className="dropdown-content-vertical">
            <ul>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;