import React, { useRef } from 'react';
import img1 from '../../img/bg.jpg';
import Brand from '../../components/Brand';
import Footer from '../../components/Layouts/Footer/Footer';
import { Scrollbar } from 'smooth-scrollbar-react';
import { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar';
import thumbnail from '../../img/works/thumbnail/1.jpg';

const Portfolio2ColMansonry = ({ projects }) => {
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

                  <div class="art-grid art-grid-2-col art-gallery">
                    {/* grid item */}
                    <div class="art-grid-item webTemplates">
                      {/* grid item frame */}
                      <a
                        data-fancybox="gallery"
                        href="img/works/original-size/1.jpg"
                        class="art-a art-portfolio-item-frame art-horizontal"
                      >
                        {/* img */}
                        <img src={thumbnail} alt="item" />
                        {/* zoom icon */}
                        <span class="art-item-hover">
                          <i class="fas fa-expand"></i>
                        </span>
                      </a>
                      {/* grid item frame end */}
                      {/* description */}
                      <div class="art-item-description">
                        {/* title */}
                        <h5 class="mb-15">Project title</h5>
                        <div class="mb-15">
                          Sit amet, consectetur adipisicing elit. Quas, architecto.
                        </div>
                        {/* button */}
                        <a
                          href="/portfolio-single.html"
                          class="art-link art-color-link art-w-chevron"
                        >
                          Read more
                        </a>
                      </div>
                      {/* description end */}
                    </div>
                    {/* grid item end */}

                    {/* grid item */}
                    <div class="art-grid-item logos">
                      {/* grid item frame */}
                      <a
                        data-fancybox="gallery"
                        href="img/works/original-size/2.jpg"
                        class="art-a art-portfolio-item-frame art-vertical"
                      >
                        {/* img */}
                        <img src={thumbnail} alt="item" />
                        {/* zoom icon */}
                        <span class="art-item-hover">
                          <i class="fas fa-expand"></i>
                        </span>
                      </a>
                      {/* grid item frame end */}
                      {/* description */}
                      <div class="art-item-description">
                        {/* title */}
                        <h5 class="mb-15">Project title</h5>
                        <div class="mb-15">
                          Sit amet, consectetur adipisicing elit. Quas, architecto.
                        </div>
                        {/* button */}
                        <a
                          href="/portfolio-single.html"
                          class="art-link art-color-link art-w-chevron"
                        >
                          Read more
                        </a>
                      </div>
                      {/* description end */}
                    </div>
                    {/* grid item end */}

                    {/* grid item */}
                    <div class="art-grid-item drawings">
                      {/* grid item frame */}
                      <a
                        data-fancybox="gallery"
                        href="img/works/original-size/3.jpg"
                        class="art-a art-portfolio-item-frame art-horizontal"
                      >
                        {/* img */}
                        <img src={thumbnail} alt="item" />
                        {/* zoom icon */}
                        <span class="art-item-hover">
                          <i class="fas fa-expand"></i>
                        </span>
                      </a>
                      {/* grid item frame end */}
                      {/* description */}
                      <div class="art-item-description">
                        {/* title */}
                        <h5 class="mb-15">Project title</h5>
                        <div class="mb-15">
                          Sit amet, consectetur adipisicing elit. Quas, architecto.
                        </div>
                        {/* button */}
                        <a
                          href="/portfolio-single.html"
                          class="art-link art-color-link art-w-chevron"
                        >
                          Read more
                        </a>
                      </div>
                      {/* description end */}
                    </div>
                    {/* grid item end */}

                    {/* grid item */}
                    <div class="art-grid-item ui">
                      {/* grid item frame */}
                      <a
                        data-fancybox="gallery"
                        href="img/works/original-size/4.jpg"
                        class="art-a art-portfolio-item-frame art-square"
                      >
                        {/* img */}
                        <img src={thumbnail} alt="item" />
                        {/* zoom icon */}
                        <span class="art-item-hover">
                          <i class="fas fa-expand"></i>
                        </span>
                      </a>
                      {/* grid item frame end */}
                      {/* description */}
                      <div class="art-item-description">
                        {/* title */}
                        <h5 class="mb-15">Project title</h5>
                        <div class="mb-15">
                          Sit amet, consectetur adipisicing elit. Quas, architecto.
                        </div>
                        {/* button */}
                        <a
                          href="/portfolio-single.html"
                          class="art-link art-color-link art-w-chevron"
                        >
                          Read more
                        </a>
                      </div>
                      {/* description end */}
                    </div>
                    {/* grid item end */}

                    {/* grid item */}
                    <div class="art-grid-item webTemplates">
                      {/* grid item frame */}
                      <a
                        data-fancybox="gallery"
                        href="img/works/original-size/5.jpg"
                        class="art-a art-portfolio-item-frame art-square"
                      >
                        {/* img */}
                        <img src={thumbnail} alt="item" />
                        {/* zoom icon */}
                        <span class="art-item-hover">
                          <i class="fas fa-expand"></i>
                        </span>
                      </a>
                      {/* grid item frame end */}
                      {/* description */}
                      <div class="art-item-description">
                        {/* title */}
                        <h5 class="mb-15">Project title</h5>
                        <div class="mb-15">
                          Sit amet, consectetur adipisicing elit. Quas, architecto.
                        </div>
                        {/* button */}
                        <a
                          href="/portfolio-single.html"
                          class="art-link art-color-link art-w-chevron"
                        >
                          Read more
                        </a>
                      </div>
                      {/* description end */}
                    </div>
                    {/* grid item end */}

                    {/* grid item */}
                    <div class="art-grid-item logos">
                      {/* grid item frame */}
                      <a
                        data-fancybox="gallery"
                        href="img/works/original-size/6.jpg"
                        class="art-a art-portfolio-item-frame art-vertical"
                      >
                        {/* img */}
                        <img src={thumbnail} alt="item" />
                        {/* zoom icon */}
                        <span class="art-item-hover">
                          <i class="fas fa-expand"></i>
                        </span>
                      </a>
                      {/* grid item frame end */}
                      {/* description */}
                      <div class="art-item-description">
                        {/* title */}
                        <h5 class="mb-15">Project title</h5>
                        <div class="mb-15">
                          Sit amet, consectetur adipisicing elit. Quas, architecto.
                        </div>
                        {/* button */}
                        <a
                          href="/portfolio-single.html"
                          class="art-link art-color-link art-w-chevron"
                        >
                          Read more
                        </a>
                      </div>
                      {/* description end */}
                    </div>
                    {/* grid item end */}

                    {/* grid item */}
                    <div class="art-grid-item drawings">
                      {/* grid item frame */}
                      <a
                        data-fancybox="gallery"
                        href="img/works/original-size/7.jpg"
                        class="art-a art-portfolio-item-frame art-horizontal"
                      >
                        {/* img */}
                        <img src={thumbnail} alt="item" />
                        {/* zoom icon */}
                        <span class="art-item-hover">
                          <i class="fas fa-expand"></i>
                        </span>
                      </a>
                      {/* grid item frame end */}
                      {/* description */}
                      <div class="art-item-description">
                        {/* title */}
                        <h5 class="mb-15">Project title</h5>
                        <div class="mb-15">
                          Sit amet, consectetur adipisicing elit. Quas, architecto.
                        </div>
                        {/* button */}
                        <a
                          href="/portfolio-single.html"
                          class="art-link art-color-link art-w-chevron"
                        >
                          Read more
                        </a>
                      </div>
                      {/* description end */}
                    </div>
                    {/* grid item end */}

                    {/* grid item */}
                    <div class="art-grid-item ui">
                      {/* grid item frame */}
                      <a
                        data-fancybox="gallery"
                        href="img/works/original-size/8.jpg"
                        class="art-a art-portfolio-item-frame art-horizontal"
                      >
                        {/* img */}
                        <img src={thumbnail} alt="item" />
                        {/* zoom icon */}
                        <span class="art-item-hover">
                          <i class="fas fa-expand"></i>
                        </span>
                      </a>
                      {/* grid item frame end */}
                      {/* description */}
                      <div class="art-item-description">
                        {/* title */}
                        <h5 class="mb-15">Project title</h5>
                        <div class="mb-15">
                          Sit amet, consectetur adipisicing elit. Quas, architecto.
                        </div>
                        {/* button */}
                        <a
                          href="/portfolio-single.html"
                          class="art-link art-color-link art-w-chevron"
                        >
                          Read more
                        </a>
                      </div>
                      {/* description end */}
                    </div>
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

export default Portfolio2ColMansonry;
