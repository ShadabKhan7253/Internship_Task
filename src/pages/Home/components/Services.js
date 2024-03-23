import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Services = ({ services }) => {
  return (
    <>
      {/* container */}
      <div className="container-fluid">
        {/* row */}
        <div className="row">
          {/* col */}
          <div className="col-lg-12">
            {/* section title */}
            <div className="art-section-title">
              {/* title frame */}
              <div className="art-title-frame">
                {/* title */}
                <h4>My Services</h4>
              </div>
              {/* title frame end */}
            </div>
            {/* section title end */}
          </div>
          {/* col end */}

          {/* col */}
          {services &&
            services.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                {/* service */}
                <div className="art-a art-service-icon-box">
                  <img src={service.image.url} alt="" height={'250px'} width={'100%'} />
                  {/* service content */}
                  <div className="art-service-ib-content">
                    {/* title */}
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-15">{service.name}</h5>
                      <p className="text-warning fs-5" style={{ transform: 'translateY(-35%)' }}>
                        {service.charge}
                      </p>
                    </div>
                    {/* text */}
                    <div className="mb-15">{service.desc}</div>
                    {/* button */}
                    <div className="art-buttons-frame">
                      <a href="/contact.html" className="art-link art-color-link ">
                        Order now
                      </a>
                      <FontAwesomeIcon icon={faChevronRight} style={{ color: 'ffc107' }} />
                    </div>
                  </div>
                  {/* service content end */}
                </div>
                {/* service end */}
              </div>
            ))}
          {/* col end */}
        </div>
        {/* row end */}
      </div>
      {/* container end */}
    </>
  );
};

export default Services;
