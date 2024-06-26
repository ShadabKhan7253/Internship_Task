import React from 'react';
import CountUp from 'react-countup';

const WorkExperienceData = () => {
  return (
    <>
      {/* container */}
      <div className="container-fluid">
        {/* row */}
        <div className="row p-30-0">
          {/* col */}
          <div className="col-md-3 col-6">
            {/* couner frame */}
            <div className="art-counter-frame">
              {/* counter */}
              <div className="art-counter-box">
                {/* counter number */}
                <span className="art-counter">
                  <CountUp end={10} />
                </span>
                <span className="art-counter-plus">+</span>
              </div>
              {/* counter end */}
              {/* title */}
              <h6>Years Experience</h6>
            </div>
            {/* couner frame end */}
          </div>
          {/* col end */}

          {/* col */}
          <div className="col-md-3 col-6">
            {/* couner frame */}
            <div className="art-counter-frame">
              {/* counter */}
              <div className="art-counter-box">
                {/* counter number */}
                <span className="art-counter">
                  <CountUp end={143} />
                </span>
              </div>
              {/* counter end */}
              {/* title */}
              <h6>Completed Projects</h6>
            </div>
            {/* couner frame end */}
          </div>
          {/* col end */}

          {/* col */}
          <div className="col-md-3 col-6">
            {/* couner frame */}
            <div className="art-counter-frame">
              {/* counter */}
              <div className="art-counter-box">
                {/* counter number */}
                <span className="art-counter">
                  <CountUp end={114} />
                </span>
              </div>
              {/* counter end */}
              {/* title */}
              <h6>Happy Customers</h6>
            </div>
            {/* couner frame end */}
          </div>
          {/* col end */}

          {/* col */}
          <div className="col-md-3 col-6">
            {/* couner frame */}
            <div className="art-counter-frame">
              {/* counter */}
              <div className="art-counter-box">
                {/* counter number */}
                <span className="art-counter">
                  <CountUp end={20} />
                </span>
                <span className="art-counter-plus">+</span>
              </div>
              {/* counter end */}
              {/* title */}
              <h6>Honors and Awards</h6>
            </div>
            {/* couner frame end */}
          </div>
          {/* col end */}
        </div>
        {/* row end */}
      </div>
      {/* container end */}
    </>
  );
};

export default WorkExperienceData;
