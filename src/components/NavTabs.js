// This is the NavTabs component that represents the navigation links in the header
// It imports the required dependencies and the CSS file for styling
import React from 'react';
import '../styles/NavTabs.css';


// The NavTabs component is a functional component that takes two props: currentPage and handlePageChange.
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="nav">
      <a
        href="#aboutMe"
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
      >
        About
      </a>
      <a
        href="#work"
        onClick={() => handlePageChange('Work')}
        className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
      >
        Work
      </a>
      <a
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
      >
        Contact
      </a>
      <a
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
      >
        Resume
      </a>
    </nav>
  );
}
// The NavTabs component displays the navigation links in the header section.
// Each link represents a different page, and its appearance is based on the currentPage prop.
// When a link is clicked, the handlePageChange function is called to update the current page.
// From the excercise 24-Stu_Conditional Rendering

export default NavTabs;
