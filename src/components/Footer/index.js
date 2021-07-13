import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <section id="footer-Content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="footer-logo">
                <img src="img/footer-logo.png" alt="" />
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Company</h3>
                <ul className="menu">
                  <li>
                    <Link to="#"> - About Us</Link>
                  </li>
                  <li>
                    <Link to="#">- Career</Link>
                  </li>
                  <li>
                    <Link to="#">- Blog</Link>
                  </li>
                  <li>
                    <Link to="#">- Press</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Product</h3>
                <ul className="menu">
                  <li>
                    <Link to="#"> - Customer Service</Link>
                  </li>
                  <li>
                    <Link to="#">- Enterprise</Link>
                  </li>
                  <li>
                    <Link to="#">- Price</Link>
                  </li>
                  <li>
                    <Link to="#">- Scurity</Link>
                  </li>
                  <li>
                    <Link to="#">- Why SLICK?</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Download App</h3>
                <ul className="menu">
                  <li>
                    <Link to="#"> - Android App</Link>
                  </li>
                  <li>
                    <Link to="#">- IOS App</Link>
                  </li>
                  <li>
                    <Link to="#">- Windows App</Link>
                  </li>
                  <li>
                    <Link to="#">- Play Store</Link>
                  </li>
                  <li>
                    <Link to="#">- IOS Store</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Subscribe Now</h3>
                <p>
                  Appropriately implement calysts for change visa wireless
                  catalysts for change.
                </p>
                <div className="subscribe-area">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                  <span>
                    <i className="lni-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="site-info text-center">
                  <p>
                    Crafted by
                    <Link to="http://uideck.com" rel="nofollow">
                      UIdeck
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
