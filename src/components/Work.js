import React from 'react';
import PropTypes from 'prop-types';
import Card from './atoms/Card';
import Bounce from 'react-reveal/Bounce';

const Work = ({ work }) => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Bounce left>
            <h1>Work</h1>
          </Bounce>

          <div className="grid">
            <Bounce left>
              {work.map(project => (
                <Card
                  key={project.id}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
};

Work.propTypes = {
  work: PropTypes.array.isRequired
};

export default Work;
