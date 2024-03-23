import React from 'react';

const About = ({ about }) => {
  const address = about?.address;
  return (
    <>
      {/* info bar about */}
      <div className="art-table p-15-15">
        {/* about text */}
        <ul>
          {/* country */}
          <li>
            <h6>Residence:</h6>
            <span>{address?.slice(address?.indexOf(',') + 1, address?.length)}</span>
          </li>
          {/* city */}
          <li>
            <h6>City:</h6>
            <span>{about?.address.split(',')[0]}</span>
          </li>
          {/* age */}
          <li>
            <h6>Age:</h6>
            <span>26</span>
          </li>
        </ul>
      </div>
      {/* info bar about end */}
    </>
  );
};

export default About;
