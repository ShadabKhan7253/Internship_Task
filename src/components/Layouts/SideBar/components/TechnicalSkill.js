import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const TechnicalSkill = ({ technicalSkill }) => {
  return (
    <>
      {/* Technical skills start */}
      <div className="art-hard-skills p-30-15">
        {/* skill */}
        {technicalSkill &&
          technicalSkill.map((skill, index) => (
            <div className="art-hard-skills-item" key={index}>
              <div className="art-skill-heading">
                {/* title */}
                <h6>{skill.name}</h6>
              </div>
              {/* progressbar frame */}
              <div className="art-line-progress">
                {/* progressbar */}
                <ProgressBar
                  bgColor={'#ffc107'}
                  height={'4px'}
                  width={'100%'}
                  borderRadius={0}
                  baseBgColor={'#191923'}
                  completed={skill.percentage}
                  transitionDuration={'2s'}
                  animateOnRender={true}
                  labelAlignment={'outside'}
                  labelSize={'11px'}
                  customLabelStyles={{
                    padding: 0,
                    margin: 0,
                    color: 'rgb(85,85,85)',
                    transform: 'translate(-10%,-90%)',
                  }}
                />
              </div>
              {/* progressbar frame end */}
            </div>
          ))}
        {/* skill end */}
      </div>
      {/* Technical skill end */}
    </>
  );
};

export default TechnicalSkill;
