import React from 'react';
import { TypingText } from 'typing-text-animation';
import face2 from '../../../img/face-2.png';
import img1 from '../../../img/bg.jpg';

const Banner = () => {
  return (
    <>
      {/* container */}
      <div className="container-fluid">
        {/* row */}
        <div className="row p-60-0 p-lg-30-0 p-md-15-0">
          {/* col */}
          <div className="col-lg-12">
            {/* banner */}
            <div className="art-a art-banner" style={{ backgroundImage: `url(${img1})` }}>
              {/* banner back */}
              <div className="art-banner-back"></div>
              {/* banner dec */}
              <div className="art-banner-dec"></div>
              {/* banner overlay */}
              <div className="art-banner-overlay">
                {/* main title */}
                <div className="art-banner-title">
                  {/* title */}
                  <h1 className="mb-15">
                    Discover my Amazing <br></br>Art Space!
                  </h1>
                  {/* suptitle */}
                  <div
                    className="art-lg-text art-code mb-25"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    &lt;<i>code</i>&gt; I build
                    <TypingText
                      text={[
                        'web interfaces.',
                        'ios and android applications.',
                        'design mocups.',
                        'automation tools.',
                      ]}
                    />
                    &lt;/<i>code</i>&gt;
                  </div>
                  <div className="art-buttons-frame">
                    {/* button */}
                    <a href="/portfolio-3-col-masonry.html" className="art-btn art-btn-md">
                      <span>Explore now</span>
                    </a>
                  </div>
                </div>
                {/* main title end */}
                {/* photo */}
                <img src={face2} className="art-banner-photo" alt="Your Name" />
              </div>
              {/* banner overlay end */}
            </div>
            {/* banner end */}
          </div>
          {/* col end */}
        </div>
        {/* row end */}
      </div>
      {/* container end */}
    </>
  );
};

export default Banner;
