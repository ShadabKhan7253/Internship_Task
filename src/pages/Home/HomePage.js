import React, { useRef } from 'react';
import { Scrollbar } from 'smooth-scrollbar-react';
import { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar';
import 'swiper/css';
import 'swiper/css/pagination';
import Banner from './components/Banner';
import WorkExperienceData from './components/WorkExperienceData';
import Services from './components/Services';
import PricingPlan from './components/PricingPlan';
import Testimonial from './components/Testimonial';
import Footer from '../../components/Layouts/Footer/Footer';
import Brand from '../../components/Brand';

const HomePage = ({ data }) => {
  const scrollbar = useRef(BaseScrollbar);
  // console.log(data?.user.services);
  const services = data?.user.services;
  const testimonials = data?.user.testimonials;
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
              <Services services={services} />
              <PricingPlan />
              <Testimonial testimonials={testimonials} />
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

export default HomePage;
