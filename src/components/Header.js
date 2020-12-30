import React from 'react';
import PropTypes from 'prop-types';
import Bounce from 'react-reveal/Bounce';

const Header = ({ header }) => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Bounce left>
            <h2> Hi, I&apos;m {header.name}</h2>
            <img id="avatar" src={header.avatarImg}  alt="avatar"></img>
          </Bounce>
          <Bounce left>
            <div className="heading-wrapper">
              <h1>
                {header.headerTagline[0]}
              </h1>
              <h1>
                {header.headerTagline[1]}
              </h1>
              <h1>
                {header.headerTagline[2]}
              </h1>
            </div>
          </Bounce>
          <Bounce left>
            <p>{header.headerParagraph}</p>
          </Bounce>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  header: PropTypes.object.isRequired
};

export default Header;
