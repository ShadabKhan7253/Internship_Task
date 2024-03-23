import React, { useRef } from 'react';
import blogPost from '../../img/blog/2.jpg';
import blog from '../../img/blog/1.jpg';
import { Scrollbar } from 'smooth-scrollbar-react';
import { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar';
import Footer from '../../components/Layouts/Footer/Footer';
import Brand from '../../components/Brand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faExpand } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const BlogPost = () => {
  const scrollbar = useRef(BaseScrollbar);
  return (
    <>
      {/* content */}
      <div className="art-content">
        {/* curtain */}
        <div className="art-curtain"></div>

        {/* top background */}
        <div className="art-top-bg" style={{ backgroundImage: 'url(img/bg.jpg)' }}>
          {/* overlay */}
          <div className="art-top-bg-overlay"></div>
          {/* overlay end */}
        </div>
        {/* top background end */}

        {/* swup container */}
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
              {/* container */}
              <div className="container-fluid">
                {/* row */}
                <div className="row p-30-0">
                  {/* col */}
                  <div className="col-lg-12">
                    {/* section title */}
                    <div className="art-section-title">
                      {/* title frame */}
                      <div className="art-title-frame">
                        {/* title */}
                        <h4>Publication title</h4>
                      </div>
                      {/* title frame end */}
                      {/* right frame */}
                      <div className="art-right-frame">
                        <div className="art-project-category">Ui Design, Graphic</div>
                      </div>
                      {/* right frame end */}
                    </div>
                    {/* section title end */}
                  </div>
                  {/* col end */}

                  {/* col */}
                  <div className="col-lg-12">
                    {/* project cover */}
                    <div className="art-a art-project-cover">
                      {/* item frame */}
                      <a
                        data-fancybox="gallery"
                        href={blogPost}
                        className="art-portfolio-item-frame art-horizontal"
                      >
                        {/* img */}
                        <img src={blogPost} alt="item" />
                        {/* zoom icon */}
                        <span className="art-item-hover">
                          <FontAwesomeIcon icon={faExpand} />
                        </span>
                      </a>
                      {/* item end */}
                    </div>
                    {/* project cover nd */}
                  </div>
                  {/* col end */}

                  {/* col */}
                  <div className="col-lg-8">
                    {/* post text */}
                    <div className="art-a art-card">
                      <p className="art-lg-text art-white">
                        <i>
                          Consectetur adipisicing elit. Magni debitis nemo, minus aut tempora
                          impedit quis quam omnis, odit saepe ipsa sunt magnam culpa quisquam iusto
                          consectetur necessitatibus. Tenetur, eligendi!
                        </i>
                      </p>

                      <p>
                        Vero praesentium voluptatibus repellendus, delectus harum. Necessitatibus
                        temporibus, veritatis sapiente laudantium eius rem dolore voluptas porro
                        assumenda quam ea earum ad dolor dolores ut ipsam optio! Numquam dolore
                        quidem sequi eum placeat voluptatum, assumenda et culpa iure nemo vero animi
                        mollitia facere fuga sit debitis doloremque quo tempore nesciunt voluptates
                        cum. Est, labore pariatur cupiditate non alias officia ad nihil animi itaque
                        soluta quo perferendis vero libero ex. Iste ipsam eaque veniam facilis
                        architecto unde, quibusdam accusamus culpa cumque delectus deserunt nemo
                        saepe minima.
                      </p>
                      <ul className="art-custom-list">
                        <li>Doloribus recusandae</li>
                        <li>Alias officia ad nihil </li>
                        <li>Culpa repellat</li>
                        <li>Officiis deleniti</li>
                      </ul>
                      <p>
                        Doloribus recusandae vel odio laboriosam, officia, neque ad. Eius porro,
                        quas adipisci mollitia similique possimus ex odio eum harum eos ut optio
                        architecto eveniet corporis nostrum beatae impedit, iste officia tempora
                        sapiente aut, distinctio numquam inventore et! Ducimus quasi ullam saepe
                        aliquid aut minus molestiae nam. Dolor consequuntur cum consectetur ducimus
                        obcaecati perspiciatis harum quae atque, architecto aut voluptatibus quaerat
                        nisi, nobis asperiores.
                      </p>

                      <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo officiis
                        aliquam, placeat quis voluptatum ad. Eum, alias quo fuga sed?
                      </blockquote>

                      <p>
                        Est nesciunt dolorum asperiores sint mollitia quod, nostrum eos maxime illo
                        eveniet ducimus labore amet voluptatum laborum, ex ut similique omnis ipsum.
                        Totam tempore praesentium assumenda ducimus porro ullam quasi, expedita sit
                        esse alias quisquam! Asperiores at suscipit officiis deleniti soluta fugit
                        quidem illo fuga, adipisci maiores. Nesciunt dolor, minus ex tenetur
                        necessitatibus et id minima, vitae sit a, assumenda, iste suscipit facere.
                        Voluptatibus animi, laboriosam qui officiis voluptatum. Voluptates quibusdam
                        numquam distinctio fuga.
                      </p>

                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                    {/* post text end */}
                  </div>
                  {/* col end */}

                  {/* col */}
                  <div className="col-lg-4">
                    <div className="art-a art-card">
                      {/* table */}
                      <div className="art-table p-15-15">
                        <ul>
                          <li>
                            <h6>Date:</h6>
                            <span>24.12.2019</span>
                          </li>
                          <li>
                            <h6>Author:</h6>
                            <span>Artur Carter</span>
                          </li>
                          <li>
                            <h6>Category:</h6>
                            <span>Product design</span>
                          </li>
                        </ul>
                      </div>
                      {/* table end */}
                    </div>
                  </div>
                  {/* col end */}
                </div>
                {/* row end */}
              </div>
              {/* container end */}

              {/* container */}
              <div className="container-fluid">
                {/* row */}
                <div className="row">
                  {/* col */}
                  <div className="col-lg-12">
                    {/* pagination */}
                    <div className="art-a art-pagination">
                      {/* button */}
                      <a
                        href="/blog-post.html"
                        className="art-link art-color-link art-w-chevron art-left-link"
                      >
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <span>Previous post</span>
                      </a>
                      <div className="art-pagination-center art-m-hidden">
                        <a className="art-link" href="/blog-3-col.html">
                          All publications
                        </a>
                      </div>
                      {/* button */}
                      <a href="/blog-post.html" className="art-link art-color-link art-w-chevron">
                        <span>Next post</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </a>
                    </div>
                    {/* pagination end */}
                  </div>
                  {/* col end */}
                </div>
                {/* row end */}
              </div>
              {/* container end */}

              {/* container */}
              <div className="container-fluid">
                {/* row */}
                <div className="row p-30-0">
                  {/* col */}
                  <div className="col-lg-12">
                    {/* section title */}
                    <div className="art-section-title">
                      {/* title frame */}
                      <div className="art-title-frame">
                        {/* title */}
                        <h4>Similar posts</h4>
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
                      className="swiper-container art-blog-slider"
                      style={{ overflow: 'visible' }}
                    >
                      {/* slider wrapper */}
                      <div className="swiper-wrapper">
                        <Swiper
                          spaceBetween={30}
                          effect="fade"
                          pagination={true}
                          modules={[Pagination]}
                          color={'red'}
                          slidesPerView={3}
                          onSlideChange={() => console.log('slide change')}
                          onSwiper={(swiper) => console.log(swiper)}
                        >
                          {/* slide */}
                          <SwiperSlide>
                            <div className="swiper-slide">
                              {/* blog post card */}
                              <div className="art-a art-blog-card">
                                {/* post cover */}
                                <a href="/blog-post.html" className="art-port-cover">
                                  {/* img */}
                                  <img src={blog} alt="blog post" />
                                </a>
                                {/* post cover end */}
                                {/* post description */}
                                <div className="art-post-description">
                                  {/* title */}
                                  <a href="/blog-post.html">
                                    <h5 className="mb-15">Blog post title</h5>
                                  </a>
                                  {/* text */}
                                  <div className="mb-15">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet!
                                  </div>
                                  {/* link */}
                                  <a href="/blog-post.html" className="art-link art-color-link ">
                                    Read more
                                  </a>
                                  <FontAwesomeIcon
                                    icon={faChevronRight}
                                    style={{ color: '#ffc107' }}
                                  />
                                </div>
                                {/* post description end */}
                              </div>
                              {/* blog post card end */}
                            </div>
                          </SwiperSlide>
                          {/* slide end */}
                          {/* slide */}
                          <SwiperSlide>
                            <div className="swiper-slide">
                              {/* blog post card */}
                              <div className="art-a art-blog-card">
                                {/* post cover */}
                                <a href="/blog-post.html" className="art-port-cover">
                                  {/* img */}
                                  <img src={blog} alt="blog post" />
                                </a>
                                {/* post cover end */}
                                {/* post description */}
                                <div className="art-post-description">
                                  {/* title */}
                                  <a href="/blog-post.html">
                                    <h5 className="mb-15">Blog post title</h5>
                                  </a>
                                  {/* text */}
                                  <div className="mb-15">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet!
                                  </div>
                                  {/* link */}
                                  <a href="/blog-post.html" className="art-link art-color-link ">
                                    Read more
                                  </a>
                                  <FontAwesomeIcon
                                    icon={faChevronRight}
                                    style={{ color: '#ffc107' }}
                                  />
                                </div>
                                {/* post description end */}
                              </div>
                              {/* blog post card end */}
                            </div>
                          </SwiperSlide>
                          {/* slide end */}
                          {/* slide */}
                          <SwiperSlide>
                            <div className="swiper-slide">
                              {/* blog post card */}
                              <div className="art-a art-blog-card">
                                {/* post cover */}
                                <a href="/blog-post.html" className="art-port-cover">
                                  {/* img */}
                                  <img src={blog} alt="blog post" />
                                </a>
                                {/* post cover end */}
                                {/* post description */}
                                <div className="art-post-description">
                                  {/* title */}
                                  <a href="/blog-post.html">
                                    <h5 className="mb-15">Blog post title</h5>
                                  </a>
                                  {/* text */}
                                  <div className="mb-15">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet!
                                  </div>
                                  {/* link */}
                                  <a href="/blog-post.html" className="art-link art-color-link ">
                                    Read more
                                  </a>
                                  <FontAwesomeIcon
                                    icon={faChevronRight}
                                    style={{ color: '#ffc107' }}
                                  />
                                </div>
                                {/* post description end */}
                              </div>
                              {/* blog post card end */}
                            </div>
                          </SwiperSlide>
                          {/* slide end */}
                          {/* slide */}
                          <SwiperSlide>
                            <div className="swiper-slide">
                              {/* blog post card */}
                              <div className="art-a art-blog-card">
                                {/* post cover */}
                                <a href="/blog-post.html" className="art-port-cover">
                                  {/* img */}
                                  <img src={blog} alt="blog post" />
                                </a>
                                {/* post cover end */}
                                {/* post description */}
                                <div className="art-post-description">
                                  {/* title */}
                                  <a href="/blog-post.html">
                                    <h5 className="mb-15">Blog post title</h5>
                                  </a>
                                  {/* text */}
                                  <div className="mb-15">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet!
                                  </div>
                                  {/* link */}
                                  <a href="/blog-post.html" className="art-link art-color-link ">
                                    Read more
                                  </a>
                                  <FontAwesomeIcon
                                    icon={faChevronRight}
                                    style={{ color: '#ffc107' }}
                                  />
                                </div>
                                {/* post description end */}
                              </div>
                              {/* blog post card end */}
                            </div>
                          </SwiperSlide>
                          {/* slide end */}
                          {/* slide */}
                          <SwiperSlide>
                            <div className="swiper-slide">
                              {/* blog post card */}
                              <div className="art-a art-blog-card">
                                {/* post cover */}
                                <a href="/blog-post.html" className="art-port-cover">
                                  {/* img */}
                                  <img src={blog} alt="blog post" />
                                </a>
                                {/* post cover end */}
                                {/* post description */}
                                <div className="art-post-description">
                                  {/* title */}
                                  <a href="/blog-post.html">
                                    <h5 className="mb-15">Blog post title</h5>
                                  </a>
                                  {/* text */}
                                  <div className="mb-15">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet!
                                  </div>
                                  {/* link */}
                                  <a href="/blog-post.html" className="art-link art-color-link ">
                                    Read more
                                  </a>
                                  <FontAwesomeIcon
                                    icon={faChevronRight}
                                    style={{ color: '#ffc107' }}
                                  />
                                </div>
                                {/* post description end */}
                              </div>
                              {/* blog post card end */}
                            </div>
                          </SwiperSlide>
                          {/* slide end */}
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
                          <div className="art-slider-nav art-blog-swiper-prev">
                            <i className="fas fa-chevron-left"></i>
                          </div>
                          {/* next */}
                          <div className="art-slider-nav art-blog-swiper-next">
                            <FontAwesomeIcon icon={faChevronRight} />
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

export default BlogPost;
