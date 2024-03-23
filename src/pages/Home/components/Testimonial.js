import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Testimonial = ({ testimonials }) => {
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
                <h4>Recommendations</h4>
              </div>
              {/* title frame end */}
            </div>
            {/* section title end */}
          </div>
          {/* col end */}

          {/* col */}
          <div className="col-lg-12">
            {/* slider container */}
            <div
              className="swiper-container art-testimonial-slider abc"
              // style={{ overflow: 'visible ' }}
            >
              {/* slider wrapper */}
              <div className="swiper-wrapper">
                <Swiper
                  spaceBetween={30}
                  effect="fade"
                  pagination={true}
                  modules={[Pagination]}
                  color={'red'}
                  slidesPerView={2.2}
                >
                  {testimonials &&
                    testimonials.map((testimonial) => (
                      <SwiperSlide key={testimonial._id}>
                        <div className="swiper-slide">
                          {/* testimonial */}
                          <div className="art-a art-testimonial">
                            {/* testimonial body */}
                            <div className="testimonial-body">
                              {/* photo */}
                              <img
                                className="art-testimonial-face"
                                src={testimonial.image.url}
                                alt="face"
                              />
                              {/* name */}
                              <h5>{testimonial.name}</h5>
                              <div className="art-el-suptitle mb-15">{testimonial.position}</div>
                              {/* text */}
                              <div className="mb-15">{testimonial.review}</div>
                            </div>
                            {/* testimonial body end */}
                            {/* testimonial footer */}
                            <div className="art-testimonial-footer">
                              <div className="art-left-side">
                                {/* star rate */}
                                <ul className="art-star-rate">
                                  <li>
                                    <FontAwesomeIcon icon={faStar} />
                                  </li>
                                  <li>
                                    <FontAwesomeIcon icon={faStar} />
                                  </li>
                                  <li>
                                    <FontAwesomeIcon icon={faStar} />
                                  </li>
                                  <li>
                                    <FontAwesomeIcon icon={faStar} />
                                  </li>
                                  <li>
                                    <FontAwesomeIcon icon={faStar} />
                                  </li>
                                </ul>
                                {/* star rate end */}
                              </div>
                              <div className="art-right-side"></div>
                            </div>
                            {/* testimonial footer end */}
                          </div>
                          {/* testimonial end */}
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              {/* slider wrapper end */}
            </div>
            {/* slider container end */}
          </div>
          {/* col end */}

          {/* col */}
          <div className="col-lg-12">
            {/* slider navigation */}
            <div className="art-slider-navigation">
              {/* left side */}
              <div className="art-sn-left">
                {/* slider pagination */}
                <div className="swiper-pagination"></div>
              </div>
              {/* left side end */}

              {/* right side */}
              <div className="art-sn-right">
                {/* slider navigation */}
                <div className="art-slider-nav-frame">
                  {/* prev */}
                  <div className="art-slider-nav art-testi-swiper-prev">
                    <i className="fas fa-chevron-left"></i>
                  </div>
                  {/* next */}
                  <div className="art-slider-nav art-testi-swiper-next">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
                {/* slider navigation */}
              </div>
              {/* right side end */}
            </div>
            {/* slider navigation end */}
          </div>
          {/* col end */}
        </div>
        {/* row end */}
      </div>
      {/* container end */}
    </>
  );
};

export default Testimonial;
