import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Drawer = ({ activeMenu, handleMenuClick }) => {
  const activeMenuStyle = activeMenu ? 'art-active' : '';
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isBlogVisible, setIsBlogVisible] = useState(false);
  return (
    <>
      {/* menu bar */}
      <div className={`art-menu-bar ${activeMenuStyle}`}>
        {/* menu bar frame */}
        <div className="art-menu-bar-frame">
          {/* menu bar header */}
          <div className="art-menu-bar-header" onClick={handleMenuClick}>
            {/* menu bar button */}
            <a
              className={`art-menu-bar-btn ${activeMenuStyle} `}
              href="#."
              onClick={handleMenuClick}
            >
              {/* icon */}
              <span></span>
            </a>
            {/* menu bar button end */}
          </div>
          {/* menu bar header end */}

          {/* current page title */}
          <div className="art-current-page"></div>
          {/* current page title end */}

          {/* scroll frame */}
          <div className="art-scroll-frame">
            {/* menu */}
            <nav id="swupMenu">
              {/* menu list */}
              <ul className="main-menu">
                {/* menu item */}
                <li className="menu-item current-menu-item">
                  <Link to="/" onClick={handleMenuClick}>
                    Home
                  </Link>
                </li>
                {/* menu item */}
                <li className="menu-item menu-item-has-children">
                  <Link to="#." onClick={() => setIsPortfolioVisible(!isPortfolioVisible)}>
                    Portfolio
                  </Link>
                  {/* sub menu */}
                  <ul className={`sub-menu ${isPortfolioVisible ? 'art-active' : ''}`}>
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="portfolio/portfolio-2-col" onClick={handleMenuClick}>
                        2 column
                      </Link>
                    </li>
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="portfolio/portfolio-3-col" onClick={handleMenuClick}>
                        3 column
                      </Link>
                    </li>
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="portfolio/portfolio-2-col-masonry" onClick={handleMenuClick}>
                        2 column masonry
                      </Link>
                    </li>
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="portfolio/portfolio-3-col-masonry" onClick={handleMenuClick}>
                        3 column masonry
                      </Link>
                    </li>
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="portfolio/portfolio-single" onClick={handleMenuClick}>
                        Single project
                      </Link>
                    </li>
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="portfolio/portfolio-single-2" onClick={handleMenuClick}>
                        Single project 2
                      </Link>
                    </li>
                  </ul>
                  {/* sub menu end */}
                </li>
                {/* menu item */}
                <li className="menu-item">
                  <Link to="/history" onClick={handleMenuClick}>
                    History
                  </Link>
                </li>
                {/* menu item */}
                <li className="menu-item">
                  <Link to="/contact" onClick={handleMenuClick}>
                    Contact
                  </Link>
                </li>
                {/* menu item */}
                <li className="menu-item menu-item-has-children">
                  <Link to="#." onClick={() => setIsBlogVisible(!isBlogVisible)}>
                    Blog
                  </Link>
                  {/* sub menu */}
                  <ul className={`sub-menu ${isBlogVisible ? 'art-active' : ''}`}>
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="blog/blog-2-col" onClick={handleMenuClick}>
                        2 column
                      </Link>
                    </li>
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="blog/blog-3-col" onClick={handleMenuClick}>
                        3 column
                      </Link>
                    </li>
                    {/* lvl 2 nav link */}
                    <li className="menu-item">
                      <Link to="blog/blog-post" onClick={handleMenuClick}>
                        Publication
                      </Link>
                    </li>
                  </ul>
                  {/* sub menu end */}
                </li>
                {/* menu item */}
                <li className="menu-item">
                  <Link to="onepage" target="_blank" onClick={handleMenuClick}>
                    Onepage
                  </Link>
                </li>
              </ul>
              {/* menu list end */}
            </nav>
            {/* menu end */}

            {/* language change */}
            <ul className="art-language-change">
              {/* language item */}
              <li>
                <Link to="#.">FR</Link>
              </li>
              {/* language item */}
              <li className="art-active-lang">
                <Link to="#.">EN</Link>
              </li>
            </ul>
            {/* language change end */}
          </div>
          {/* scroll frame end */}
        </div>
        {/* menu bar frame */}
      </div>
      {/* menu bar end */}
    </>
  );
};
