import React, {useState} from "react";
import InitailProcess from "../Process/Streem/InitailProcess";
import CommonBtn from "./CommonBtn";
import DefaultModal from "./modal/DefaultModal";

function Navbar() {
  const [defaltModalShow, setDefaultModalShow] = useState(false);
  console.log(defaltModalShow);

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
                  <CommonBtn
                    className="h_btn"
                    onClick={() => setDefaultModalShow(!defaltModalShow)}>
                    <i className="fa-brands fa-steam-symbol"></i> Connect with
                    Steam
                  </CommonBtn>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <DefaultModal
        isShow={defaltModalShow}
        setClose={setDefaultModalShow}
        body={<InitailProcess />}
      />
    </div>
  );
}

export default Navbar;
