import React from "react";
import DefaultModal from "./modal/DefaultModal";

function Footer() {
  return (
    <>
      <DefaultModal />

      <footer className="footer">
        <div className="container">
          <hr className="mb-5" />
          <div className="row">
            <div className="col-lg-4 col-6 ">
              <div className="footer__content">
                <div className="footer__logo mb-4">
                  <img src="img/SD Logo 2.png" alt="" />
                </div>
                <p className="md-4">
                  Although we’re providing specific examples and details about
                  our process below, it’s important to remember that there is a
                  lot of competition for slots in a weapon case
                </p>
                <span>©2022 SKINS DOJO All Rights Reserved</span>
              </div>
            </div>
            <div className="col-lg-2 d-none d-md-block  col-sm-3 mt-sm-4 mt-lg-0">
              <div className="footer__list">
                <h3>Features</h3>
                <ul>
                  <li>
                    <a href="#">Market</a>
                  </li>
                  <li>
                    <a href="#">Steam Inventory</a>
                  </li>
                  <li>
                    <a href="#">Dojo Inventory</a>
                  </li>
                  <li>
                    <a href="#">Items on Sale</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 d-none d-md-block  col-sm-3 mt-sm-4 mt-lg-0">
              <div className="footer__list">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="row">
                <div className="col-lg-6 col-sm-3 mt-sm-4 mt-lg-0">
                  <div className="footer__list">
                    <h3>We accept</h3>
                    <div className="payment">
                      <img src="img/Stripe_Logo,_revised_2016 1.png" alt="" />
                      <img src="images/paypal.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-3 mt-sm-4 mt-lg-0">
                  <div className="footer__list">
                    <h3>Follow us</h3>
                    <div className="payment">
                      <a href="#">
                        <img src="img/Instagram 1.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="img/Twitter 1.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="img/Facebook 1.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
