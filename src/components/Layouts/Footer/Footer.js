import React from 'react';

const Footer = () => {
  return (
    <>
      {/* container */}
      <div className="container-fluid">
        {/* footer */}
        <footer>
          {/* copyright */}
          <div>© 2020 Artur Carter</div>
          {/* author ( Please! Do not delete it. You are awesome! :) */}
          <div>
            Template author:&#160;{' '}
            <a
              href="https://themeforest.net/user/millerdigitaldesign"
              target="_blank"
              rel="noreferrer"
            >
              Nazar Miller
            </a>
          </div>
        </footer>
        {/* footer end */}
      </div>
      {/* container end */}
    </>
  );
};

export default Footer;
