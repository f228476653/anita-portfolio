import React from 'react';
import Bounce from 'react-reveal/Bounce';
import data from '../content';

const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Bounce left>
            <h1>{data.promotionHeading}</h1>
          </Bounce>
          <p>{data.promotionPara}</p>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
