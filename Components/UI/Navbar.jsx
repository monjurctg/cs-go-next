import React from "react";

function Navbar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <nav className="navbar navbar-expand-lg navigation">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <div className="haeder_logo">
                  <img src="img/SD Logo 2.png" alt="logo" />
                </div>
              </a>
              <button
                className="navbar-toggler menu"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                  <i className="fa-sharp fa-solid fa-bars"></i>
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav m-auto h_nav">
                  <li>
                    <a href="#">Market</a>
                  </li>
                  <li>
                    <a href="#">
                      My Inventory <i className="fa-solid fa-angle-down"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">Items on Sale</a>
                  </li>
                </ul>
                <div className="connect_btn mt-md-4 text-md-center">
                  <button className="h_btn">
                    <i className="fa-brands fa-steam-symbol"></i> Connect with
                    Steam
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
