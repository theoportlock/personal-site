import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Portlock lab website"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">The Portlock Lab</Link></h2>
          <p>
            Understanding the fundamental molecular mechanisms
            that underpin human health and disease.
          </p>
        </div>
      </header>
      <p>
        Welcome to the Portlock Lab website. Please feel free to read more{' '}
        <Link to="/about">about us</Link>, or you can check out our{' '}
        <Link to="/projects">projects</Link>. Feel free to{' '}
        <Link to="/contact">contact us</Link>.
      </p>
      <p> Source available <a href="https://github.com/theoportlock/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
