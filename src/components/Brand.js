import React from 'react';
import brand from '../img/brands/1.png';

const Brand = () => {
  return (
    <>
      {/* container */}
      <div className="container-fluid">
        {/* row */}
        <div className="row">
          {/* col */}
          <div className="col-6 col-lg-3">
            {/* brand */}
            <img className="art-brand" src={brand} alt="brand" />
          </div>
          {/* col end */}

          {/* col */}
          <div className="col-6 col-lg-3">
            {/* brand */}
            <img className="art-brand" src={brand} alt="brand" />
          </div>
          {/* col end */}

          {/* col */}
          <div className="col-6 col-lg-3">
            {/* brand */}
            <img className="art-brand" src={brand} alt="brand" />
          </div>
          {/* col end */}

          {/* col */}
          <div className="col-6 col-lg-3">
            {/* brand */}
            <img className="art-brand" src={brand} alt="brand" />
          </div>
          {/* col end */}
        </div>
        {/* row end */}
      </div>
      {/* container end */}
    </>
  );
};

export default Brand;
