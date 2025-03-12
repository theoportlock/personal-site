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
      <p> Welcome to the Portlock lab website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/theoportlock/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
