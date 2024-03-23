import React, { useRef } from 'react';
import { Scrollbar } from 'smooth-scrollbar-react';
import { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar';
import Banner from '../../../pages/Home/components/Banner';
import WorkExperienceData from '../../../pages/Home/components/WorkExperienceData';
import Services from '../../../pages/Home/components/Services';
import PricingPlan from '../../../pages/Home/components/PricingPlan';
import Testimonial from '../../../pages/Home/components/Testimonial';
import Brand from '../../Brand';
import Footer from '../Footer/Footer';

export const Content = () => {
  const scrollbar = useRef(BaseScrollbar);

  return (
    <>
      {/* content */}
      <div className="art-content">
        {/* curtain */}
        <div className="art-curtain"></div>

        {/* top background */}
        <div className="art-top-bg" style={{ backgroundImage: `url("")` }}>
          {/* overlay */}
          <div className="art-top-bg-overlay"></div>
          {/* overlay end */}
        </div>
        {/* top background end */}

        <div className="transition-fade">
          {/* scroll frame */}
          <div className="art-scroll-frame" style={{ maxHeight: '100vh', display: 'flex' }}>
            <Scrollbar
              ref={scrollbar}
              damping={0.05}
              renderByPixels={true}
              continuousScrolling={true}
              plugins={{
                overscroll: {
                  effect: 'bounce',
                },
              }}
            >
              <Banner />
              <WorkExperienceData />
              <Services />
              <PricingPlan />
              <Testimonial />
              <Brand />
              <Footer />
            </Scrollbar>
          </div>
          {/* scroll frame end */}
        </div>
      </div>
      {/* content end */}
    </>
  );
};
