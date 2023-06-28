// Importing the necessary dependencies
import React from 'react';
import '../styles/Footer.css';

// Footer with bootstrap
function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
        <p> Assembled by: <strong>Gabriel Tuason</strong>. The
          source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          The website content is powered by <a href="https://getbootstrap.com/">Bootstrap </a>
          & <a href="https://react.dev/">React</a>.
     </p>
          <div className="col-6 col-md-3">
            <a className="footerLink" href="https://github.com/gabetuason">Github</a>
          </div>
          <div className="col-6 col-md-3">
            <a className="footerLink" href="https://drive.google.com/drive/folders/1jzHx5QvNh9msx8W4NlRFJQwWrQEvGxcK?usp=sharing">Photo Album</a>
          </div>
          <div className="col-6 col-md-3">
            <a className="footerLink" href="tel:+16478643488">647-864-3488</a>
          </div>
          <div className="col-6 col-md-3">
            <a className="footerLink" href="https://www.linkedin.com/in/gabriel-tuason-138b1014a/">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
