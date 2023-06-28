// This is the header component that represents the header section of the website
// It imports the required dependencies and the CSS file for styling

import React from 'react';
import '../styles/Header.css';
import Navigation from './NavTabs';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header bg-dark text-white py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 text-center">
            <h1 className="mb-0">
              <span className="highlight glow d-inline-block mx-auto">Gabriel Tuason</span>
            </h1>
          </div>
        </div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </header>
  );
}

export default Header;
