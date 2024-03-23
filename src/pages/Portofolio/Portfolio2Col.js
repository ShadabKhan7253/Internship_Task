/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import img1 from '../../img/bg.jpg';
import Brand from '../../components/Brand';
import Footer from '../../components/Layouts/Footer/Footer';
import { Scrollbar } from 'smooth-scrollbar-react';
import { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faExpand } from '@fortawesome/free-solid-svg-icons';

const Portfolio2Col = ({ projects }) => {
  const scrollbar = useRef(BaseScrollbar);
  return (
    <>
      {/* content */}
      <div className="art-content">
        {/* curtain */}
        <div className="art-curtain"></div>

        {/* top background */}
        <div className="art-top-bg" style={{ backgroundImage: `url(${img1})` }}>
          {/* overlay */}
          <div className="art-top-bg-overlay"></div>
          {/* overlay end */}
        </div>
        {/* top background end */}

        {/* swup container */}
        <div className="transition-fade" id="swup">
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
              {/* container */}
              <div className="container-fluid">
                {/* row */}
                <div className="row p-30-0">
                  {/* col */}
                  <div className="col-lg-12">
                    {/* filter */}
                    <div className="art-filter mb-30">
                      {/* filter link */}
                      <a href="#" data-filter="*" className="art-link art-current">
                        All Categories
                      </a>
                      {/* filter link */}
                      <a href="#" data-filter=".webTemplates" className="art-link">
                        Web Templates
                      </a>
                      {/* filter link */}
                      <a href="#" data-filter=".logos" className="art-link">
                        Logos
                      </a>
                      {/* filter link */}
                      <a href="#" data-filter=".drawings" className="art-link">
                        Drawings
                      </a>
                      {/* filter link */}
                      <a href="#" data-filter=".ui" className="art-link">
                        UI Elements
                      </a>
                    </div>
                    {/* filter end */}
                  </div>
                  {/* col end */}

                  <div className="art-grid art-grid-2-col art-gallery">
                    {/* grid item */}
                    {projects &&
                      projects.map((project) => (
                        <div className="art-grid-item webTemplates" key={project._id}>
                          {/* grid item frame */}
                          <a
                            data-fancybox="gallery"
                            href="img/works/original-size/1.jpg"
                            className="art-a art-portfolio-item-frame art-horizontal"
                          >
                            {/* img */}
                            <img src={project.image.url} alt="item" />
                            {/* zoom icon */}
                            <span className="art-item-hover">
                              <FontAwesomeIcon icon={faExpand} />
                            </span>
                          </a>
                          {/* grid item frame end */}
                          {/* description */}
                          <div className="art-item-description">
                            {/* title */}
                            <h5 className="mb-15">{project.title}</h5>
                            <div className="mb-15">
                              <p>TechStack</p>
                              <div className="d-flex justify-content-evenly">
                                {project.techStack.map((techstack) => (
                                  <p>{techstack}</p>
                                ))}
                              </div>
                            </div>
                            {/* button */}
                            <a href="/portfolio-single.html" className="art-link art-color-link ">
                              Read more
                            </a>
                            <FontAwesomeIcon icon={faChevronRight} style={{ color: '#ffc107' }} />
                          </div>
                          {/* description end */}
                        </div>
                      ))}
                    {/* grid item end */}
                  </div>
                </div>
                {/* row end */}
              </div>
              {/* container end */}

              {/* container */}
              <Brand />
              {/* container end */}

              {/* container */}
              <Footer />
              {/* container end */}
            </Scrollbar>
          </div>
          {/* scroll frame end */}
        </div>
        {/* swup container end */}
      </div>
      {/* content end */}
    </>
  );
};

export default Portfolio2Col;
