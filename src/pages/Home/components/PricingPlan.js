import React from 'react';

const PricingPlan = () => {
  return (
    <>
      {/* container */}
      <div className="container-fluid">
        {/* row */}
        <div className="row p-0-0">
          {/* col */}
          <div className="col-lg-12">
            {/* section title */}
            <div className="art-section-title">
              {/* title frame */}
              <div className="art-title-frame">
                {/* title */}
                <h4>Price Plans</h4>
              </div>
              {/* title frame end */}
            </div>
            {/* section title end */}
          </div>
          {/* col end */}

          {/* col */}
          <div className="col-lg-4">
            {/* price */}
            <div className="art-a art-price">
              {/* price body */}
              <div className="art-price-body">
                <h5 className="mb-30">Starter Price</h5>
                {/* price cost */}
                <div className="art-price-cost">
                  <div className="art-number">
                    FREE<sup>*</sup>
                  </div>
                </div>
                {/* price cost end */}
                {/* price list */}
                <ul className="art-price-list">
                  {/* list item */}
                  <li>Ui Design</li>
                  {/* list item */}
                  <li>Web Development</li>
                  {/* list item */}
                  <li className="art-empty-item">Logo design</li>
                  {/* list item */}
                  <li className="art-empty-item">SEO optimization</li>
                  {/* list item */}
                  <li className="art-empty-item">Wordpress integration</li>
                </ul>
                {/* price list end */}
                {/* button */}
                <a href="/contact.html" className="art-link art-color-link art-w-chevron">
                  Order now
                </a>
                <div className="art-asterisk">
                  <sup>*</sup>Free only when ordering paid services
                </div>
              </div>
              {/* price body end */}
            </div>
            {/* price end */}
          </div>
          {/* grid */}

          {/* col */}
          <div className="col-lg-4">
            {/* price */}
            <div className="art-a art-price art-popular-price">
              {/* price body */}
              <div className="art-price-body">
                <h5 className="mb-30">Hourly payment</h5>
                {/* price cost */}
                <div className="art-price-cost">
                  <div className="art-number">
                    <span>$</span>29<span>h</span>
                  </div>
                </div>
                {/* price cost end */}
                {/* price list */}
                <ul className="art-price-list">
                  {/* list item */}
                  <li>Ui Design</li>
                  {/* list item */}
                  <li>Web Development</li>
                  {/* list item */}
                  <li>Logo design</li>
                  {/* list item */}
                  <li className="art-empty-item">SEO optimization</li>
                  {/* list item */}
                  <li className="art-empty-item">Wordpress integration</li>
                </ul>
                {/* price list end */}
                {/* button */}
                <a href="/contact.html" className="art-link art-color-link art-w-chevron">
                  Order now
                </a>
              </div>
              {/* price body end */}
            </div>
            {/* price end */}
          </div>
          {/* col end */}

          {/* col */}
          <div className="col-lg-4">
            {/* price */}
            <div className="art-a art-price">
              {/* price body */}
              <div className="art-price-body">
                <h5 className="mb-30"> Full time</h5>
                {/* price cost */}
                <div className="art-price-cost">
                  <div className="art-number">
                    <span>$</span>2999<span>m</span>
                  </div>
                </div>
                {/* price cost end */}
                {/* price list */}
                <ul className="art-price-list">
                  {/* list item */}
                  <li>Ui Design</li>
                  {/* list item */}
                  <li>Web Development</li>
                  {/* list item */}
                  <li>Logo design</li>
                  {/* list item */}
                  <li>SEO optimization</li>
                  {/* list item */}
                  <li>Wordpress integration</li>
                </ul>
                {/* price list end */}
                {/* button */}
                <a href="/contact.html" className="art-link art-color-link art-w-chevron">
                  Order now
                </a>
              </div>
              {/* price body end */}
            </div>
            {/* price end */}
          </div>
          {/* col end */}
        </div>
        {/* row end */}
      </div>
      {/* container end */}
    </>
  );
};

export default PricingPlan;
