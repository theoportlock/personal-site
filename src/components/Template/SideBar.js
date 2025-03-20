import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Portlock Lab</h2>
        <p><a href="mailto:theo@portlocklab.com">theo@portlocklab.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Our lab is mostly interested in using computing
        to find patterns in nature. We are based at
        The Liggins Institute, University of Auckland, New Zealand.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Portlock Lab.</p>
    </section>
  </section>
);

export default SideBar;
