import React from 'react';
import cv from '../../../../files/cv.txt';

const Cv = () => {
  return (
    <>
      {/* links frame */}
      <div className="art-links-frame p-15-15">
        {/* download cv button */}
        <a href={cv} className="art-link">
          Download cv <i className="fas fa-download"></i>
        </a>
      </div>
      {/* links frame end */}
    </>
  );
};

export default Cv;
