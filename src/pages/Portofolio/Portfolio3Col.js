import React, { useRef } from 'react';
import Brand from '../../components/Brand';
import Footer from '../../components/Layouts/Footer/Footer';
import { Scrollbar } from 'smooth-scrollbar-react';
import { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar';
import img1 from '../../img/bg.jpg';
import { faChevronRight, faExpand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Portfolio3Col({ projects }) {
  const scrollbar = useRef(BaseScrollbar);
  return (
    <>
      {/* content */}
      <div class="art-content">
        {/* curtain */}
        <div class="art-curtain"></div>

        {/* top background */}
        <div class="art-top-bg" style={{ backgroundImage: `url(${img1})` }}>
          {/* overlay */}
          <div class="art-top-bg-overlay"></div>
          {/* overlay end */}
        </div>
        {/* top background end */}

        {/* swup container */}
        <div class="transition-fade" id="swup">
          {/* scroll frame */}
          <div class="art-scroll-frame" style={{ maxHeight: '100vh', display: 'flex' }}>
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

              <div class="container-fluid">
                {/* row */}
                <div class="row p-30-0">
                  {/* col */}
                  <div class="col-lg-12">
                    {/* filter */}
                    <div class="art-filter mb-30">
                      {/* filter link */}
                      <a href="#" data-filter="*" class="art-link art-current">
                        All Categories
                      </a>
                      {/* filter link */}
                      <a href="#" data-filter=".webTemplates" class="art-link">
                        Web Templates
                      </a>
                      {/* filter link */}
                      <a href="#" data-filter=".logos" class="art-link">
                        Logos
                      </a>
                      {/* filter link */}
                      <a href="#" data-filter=".drawings" class="art-link">
                        Drawings
                      </a>
                      {/* filter link */}
                      <a href="#" data-filter=".ui" class="art-link">
                        UI Elements
                      </a>
                    </div>
                    {/* filter end */}
                  </div>
                  {/* col end */}

                  <div class="art-grid art-grid-3-col art-gallery">
                    {/* grid item */}
                    {projects &&
                      projects.map((project) => (
                        <div class="art-grid-item webTemplates">
                          {/* grid item frame */}
                          <a
                            data-fancybox="gallery"
                            href="img/works/original-size/1.jpg"
                            class="art-a art-portfolio-item-frame art-square"
                          >
                            {/* img */}
                            <img src={project.image.url} alt="item" />
                            {/* zoom icon */}
                            <span class="art-item-hover">
                              <FontAwesomeIcon icon={faExpand} />
                            </span>
                          </a>
                          {/* grid item frame end */}
                          {/* description */}
                          <div class="art-item-description">
                            {/* title */}
                            <h5 class="mb-2">{project.title}</h5>
                            <div className="mb-1">
                              <p>TechStack</p>
                              <div className="d-flex justify-content-evenly">
                                {project.techStack.map((techstack) => (
                                  <p>{techstack}</p>
                                ))}
                              </div>
                            </div>
                            {/* button */}
                            <a href="/portfolio-single.html" class="art-link art-color-link ">
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
}

export default Portfolio3Col;
