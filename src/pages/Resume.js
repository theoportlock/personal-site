import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Skills from '../components/Resume/Skills';
import References from '../components/Resume/References';

import degrees from '../data/resume/degrees';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Skills',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Theo Portlock's Resume"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Skills skills={skills} categories={categories} />
      <References />

    </article>
  </Main>
);

export default Resume;
