import React from 'react';

const Language = () => {
  return (
    <>
      {/* language skills */}
      <div className="art-lang-skills p-30-15">
        {/* skill */}
        <div className="art-lang-skills-item">
          <div id="circleprog1" className="art-cirkle-progress"></div>
          {/* title */}
          <h6>French</h6>
        </div>
        {/* skill end */}

        {/* skill */}
        <div className="art-lang-skills-item">
          <div id="circleprog2" className="art-cirkle-progress"></div>
          {/* title */}
          <h6>English</h6>
        </div>
        {/* skill end */}

        {/* skill */}
        <div className="art-lang-skills-item">
          <div id="circleprog3" className="art-cirkle-progress"></div>
          {/* title */}
          <h6>Spanish</h6>
        </div>
        {/* skill end */}
      </div>
      {/* language skills end */}
    </>
  );
};

export default Language;
