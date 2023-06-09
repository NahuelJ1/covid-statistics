import React from 'react';
import Nav from './Nav';

function About() {
  return (
    <>
      <Nav />
      <div className="aboutPage">
        <h1>Developed by Nahuel Gomez</h1>
        <p>
          <a href="https://github.com/NahuelJ1" target="_blank" rel="noreferrer">view source</a>
        </p>
      </div>
    </>
  );
}

export default About;
