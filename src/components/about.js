import React from 'react';
import PropTypes from 'prop-types';
import Bounce from 'react-reveal/Bounce';
const About = ({ about }) => {
  return (
    <div className="secion" id="about" style={{ background: '#1a1a1a' }}>
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Bounce left>
              <h1>About Me</h1>
            </Bounce>
            <p>
              {about.aboutParaOne}
              <br></br>
              <br></br>
              {about.aboutParaTwo}
              <br></br>
              <br></br>
              {about.aboutParaThree}
              <br></br>
              <br></br>
              {about.aboutParaFour}
            </p>
          </div>
          <div className="image-wrapper">
            <img id="about-image" src={about.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  about: PropTypes.any.isRequired
};

export default About;
