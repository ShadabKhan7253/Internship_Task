import React, { useRef } from 'react';
import { Scrollbar } from 'smooth-scrollbar-react';
import { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar';
import blog from '../../img/blog/1.jpg';
import Brand from '../../components/Brand';
import Footer from '../../components/Layouts/Footer/Footer';

const Blog2col = () => {
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
                        <h4>Newsletter</h4>
                      </div>
                      {/* title frame end */}
                    </div>
                    {/* section title end */}
                  </div>
                  {/* col end */}
                  {/* col */}
                  <div className="col-lg-6">
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
                        <a href="/blog-post.html" className="art-link art-color-link art-w-chevron">
                          Read more
                        </a>
                      </div>
                      {/* post description end */}
                    </div>
                    {/* blog post card end */}
                  </div>
                  {/* col end */}
                  {/* col */}
                  <div className="col-lg-6">
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
                        <a href="/blog-post.html" className="art-link art-color-link art-w-chevron">
                          Read more
                        </a>
                      </div>
                      {/* post description end */}
                    </div>
                    {/* blog post card end */}
                  </div>
                  {/* col end */}
                  {/* col */}
                  <div className="col-lg-6">
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
                        <a href="/blog-post.html" className="art-link art-color-link art-w-chevron">
                          Read more
                        </a>
                      </div>
                      {/* post description end */}
                    </div>
                    {/* blog post card end */}
                  </div>
                  {/* col end */}

                  {/* col */}
                  <div className="col-lg-6">
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
                        <a href="/blog-post.html" className="art-link art-color-link art-w-chevron">
                          Read more
                        </a>
                      </div>
                      {/* post description end */}
                    </div>
                    {/* blog post card end */}
                  </div>
                  {/* col end */}
                  {/* col */}
                  <div className="col-lg-6">
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
                        <a href="/blog-post.html" className="art-link art-color-link art-w-chevron">
                          Read more
                        </a>
                      </div>
                      {/* post description end */}
                    </div>
                    {/* blog post card end */}
                  </div>
                  {/* col end */}
                  {/* col */}
                  <div className="col-lg-6">
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
                        <a href="/blog-post.html" className="art-link art-color-link art-w-chevron">
                          Read more
                        </a>
                      </div>
                      {/* post description end */}
                    </div>
                    {/* blog post card end */}
                  </div>
                  {/* col end */}

                  {/* col */}
                  <div className="col-lg-6">
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
                        <a href="/blog-post.html" className="art-link art-color-link art-w-chevron">
                          Read more
                        </a>
                      </div>
                      {/* post description end */}
                    </div>
                    {/* blog post card end */}
                  </div>
                  {/* col end */}
                  {/* col */}
                  <div className="col-lg-6">
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
                        <a href="/blog-post.html" className="art-link art-color-link art-w-chevron">
                          Read more
                        </a>
                      </div>
                      {/* post description end */}
                    </div>
                    {/* blog post card end */}
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
                        href="/blog-3-col.html"
                        className="art-link art-color-link art-w-chevron art-left-link"
                      >
                        <span>Previous page</span>
                      </a>
                      <div className="art-pagination-center art-m-hidden">
                        <a href="/blog-3-col.html"></a>
                        <a href="/blog-3-col.html">1</a>
                        <a className="art-active-pag" href="/blog-2-col.html">
                          2
                        </a>
                        <a href="/blog-3-col.html">3</a>
                        <a href="/blog-3-col.html">...</a>
                      </div>
                      {/* button */}
                      <a href="/blog-3-col.html" className="art-link art-color-link art-w-chevron">
                        <span>Next page</span>
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

export default Blog2col;
