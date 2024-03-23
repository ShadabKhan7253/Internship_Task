import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Scrollbar } from 'smooth-scrollbar-react';
import { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar';
import 'react-circular-progressbar/dist/styles.css';
import About from './components/About';
import Language from './components/Language';
import TechnicalSkill from './components/TechnicalSkill';
import KnowledgeList from './components/KnowledgeList';
import Cv from './components/Cv';

const SideBar = ({ activeMenu, data }) => {
  const isDisable = activeMenu ? ' ' : 'art-disabled';
  const scrollbar = useRef(BaseScrollbar);
  const about = data?.user.about;
  const technicalSkill = data?.user.skills;
  const social_handles = data?.user.social_handles;
  return (
    <>
      {/* info bar */}
      <div className="art-info-bar">
        {/* menu bar frame */}
        <div className="art-info-bar-frame">
          {/* info bar header */}
          <div className="art-info-bar-header">
            {/* info bar button */}
            <a className={`art-info-bar-btn ${isDisable}`} href="#.">
              {/* icon */}
              <i className="fas fa-ellipsis-v"></i>
            </a>
            {/* info bar button end */}
          </div>
          {/* info bar header end */}

          {/* info bar header */}
          <div className="art-header">
            {/* avatar */}
            <div className="art-avatar">
              <a data-fancybox="avatar" href="img/face-1.jpg" className="art-avatar-curtain">
                <img src={about?.avatar.url} alt="avatar" />
                <i className="fas fa-expand"></i>
              </a>
              {/* available */}
              <div className="art-lamp-light">
                {/* add class 'art-not-available' if not available*/}
                <div className="art-available-lamp"></div>
              </div>
            </div>
            {/* avatar end */}
            {/* name */}
            <h5 className="art-name mb-10">
              <a href="/home.html">{about?.name}</a>
            </h5>
            {/* post */}
            <div className="art-sm-text">
              {about?.title} <br></br> {about?.subTitle},{' '}
            </div>
            <p>{data?.user.email}</p>
          </div>
          {/* info bar header end */}

          {/* scroll frame */}
          <div className="art-scroll-frame" style={{ maxHeight: '100%', display: 'flex' }}>
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
              <About about={about} />
              {/* divider */}
              <div className="art-ls-divider"></div>

              <Language />
              {/* divider */}
              <div className="art-ls-divider"></div>

              <TechnicalSkill technicalSkill={technicalSkill} />
              {/* divider */}
              <div className="art-ls-divider"></div>

              <KnowledgeList />

              {/* divider */}
              <div className="art-ls-divider"></div>

              <Cv />
            </Scrollbar>
          </div>
          {/* scroll frame end */}

          {/* sidebar social */}
          <div className="art-ls-social">
            {/* social link */}
            {social_handles &&
              social_handles.map((social) => (
                <a href="#." target="_blank" key={social._id}>
                  <img src={social?.image.url} alt={social.platform} height={'25px'} />
                </a>
              ))}
          </div>
          {/* sidebar social end */}
        </div>
        {/* menu bar frame end */}
      </div>
      {/* info bar end */}
    </>
  );
};

export default SideBar;
