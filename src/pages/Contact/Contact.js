import React, { useRef } from 'react';
import { Scrollbar } from 'smooth-scrollbar-react';
import { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar';
import Brand from '../../components/Brand';
import Footer from '../../components/Layouts/Footer/Footer';
import img1 from '../../img/bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const scrollbar = useRef(BaseScrollbar);
  return (
    <>
      {/* content */}
      <div className="art-content">
        {/* curtain */}
        <div className="art-curtain"></div>

        {/* top background */}
        <div className="art-top-bg" style={{ backgroundImage: `url(${img1}` }}>
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
                    {/* section title */}
                    <div className="art-section-title">
                      {/* title frame */}
                      <div className="art-title-frame">
                        {/* title */}
                        <h4>Contact information</h4>
                      </div>
                      {/* title frame end */}
                    </div>
                    {/* section title end */}
                  </div>
                  {/* col end */}
                  {/* col */}
                  <div className="col-lg-4">
                    {/* contact card */}
                    <div className="art-a art-card">
                      <div className="art-table p-15-15">
                        <ul>
                          <li>
                            <h6>Country:</h6>
                            <span>Canada</span>
                          </li>
                          <li>
                            <h6>City:</h6>
                            <span>Toronto</span>
                          </li>

                          <li>
                            <h6>Streat:</h6>
                            <span>20 Dellbank Rd</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* contact card end */}
                  </div>
                  {/* col end */}
                  {/* col */}
                  <div className="col-lg-4">
                    {/* contact card */}
                    <div className="art-a art-card">
                      <div className="art-table p-15-15">
                        <ul>
                          <li>
                            <h6>Email:</h6>
                            <span>carter.inbox@mail.com</span>
                          </li>
                          <li>
                            <h6>Telegram:</h6>
                            <span>@arter</span>
                          </li>
                          <li>
                            <h6>Skype:</h6>
                            <span>Arter</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* contact card end */}
                  </div>
                  {/* col end */}
                  {/* col */}
                  <div className="col-lg-4">
                    {/* contact card */}
                    <div className="art-a art-card">
                      <div className="art-table p-15-15">
                        <ul>
                          <li>
                            <h6>Support service:</h6>
                            <span>+78 (098) 333 11 22</span>
                          </li>
                          <li>
                            <h6>Office:</h6>
                            <span>+78 (098) 326 11 22</span>
                          </li>
                          <li>
                            <h6>Personal:</h6>
                            <span>+78 (077) 114 26 53</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* contact card end */}
                  </div>
                  {/* col end */}

                  {/* col */}
                  <div className="col-lg-12">
                    {/* section title */}
                    <div className="art-section-title">
                      {/* title frame */}
                      <div className="art-title-frame">
                        {/* title */}
                        <h4>Get in touch</h4>
                      </div>
                      {/* title frame end */}
                    </div>
                    {/* section title end */}

                    {/* contact form frame */}
                    <div className="art-a art-card">
                      {/* contact form */}
                      <form id="form" className="art-contact-form">
                        {/* form field */}
                        <div className="art-form-field">
                          {/* name input */}
                          <input
                            id="name"
                            name="name"
                            className="art-input"
                            type="text"
                            placeholder="Name"
                            required
                          />
                          {/* label */}
                          <label for="name">
                            <FontAwesomeIcon icon={faUser} />
                          </label>
                        </div>
                        {/* form field end */}
                        {/* form field */}
                        <div className="art-form-field">
                          {/* email input */}
                          <input
                            id="email"
                            name="email"
                            className="art-input"
                            type="email"
                            placeholder="Email"
                            required
                          />
                          {/* label */}
                          <label for="email">
                            <FontAwesomeIcon icon={faAt} />
                          </label>
                        </div>
                        {/* form field end */}
                        {/* form field */}
                        <div className="art-form-field">
                          {/* message textarea */}
                          <textarea
                            id="message"
                            name="text"
                            className="art-input"
                            placeholder="Message"
                            required
                          ></textarea>
                          {/* label */}
                          <label for="message">
                            <FontAwesomeIcon icon={faEnvelope} />
                          </label>
                        </div>
                        {/* form field end */}
                        {/* button */}
                        <div className="art-submit-frame">
                          <button className="art-btn art-btn-md art-submit" type="submit">
                            <span>Send message</span>
                          </button>
                          {/* success */}
                          <div className="art-success">
                            Success <i className="fas fa-check"></i>
                          </div>
                        </div>
                      </form>
                      {/* contact form end */}
                    </div>
                    {/* contact form frame end */}
                  </div>
                  {/* col end */}
                </div>
                {/* row end */}
              </div>
              {/* container end */}

              {/* container */}
              <Brand />
              {/* container end */}

              {/* footer */}
              <Footer />
              {/* footer end */}
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

export default Contact;
