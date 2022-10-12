import React, {useEffect, useState} from "react";

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";

function BestDetails() {
  const [domLoaded, setdomLoaded] = useState(false);

  useEffect(() => {
    setdomLoaded(true);
  }, []);
  const handleLeftClick = () => {
    document.getElementById("prev").click();
  };
  const handleRightClick = () => {
    document.getElementById("next").click();
  };
  return (
    <div>
      <div className="bestDealsContainer header_area">
        <div style={{overflow: "hidden"}} className="d-flex w-100">
          <div style={{width: "400px", marginRight: "14px"}}>
            <button className="limitedOfferButton">Limited Offer</button>
            <h4
              style={{
                color: "#9DB4D3",
                marginBottom: "25px",
                fontSize: "39px",
                fontWeight: "400px",
                width: "200px",
              }}>
              Best Deals
            </h4>
            <div className="sliderLeftOrRightButton">
              <div
                className="leftArrow"
                style={{cursor: "pointer"}}
                onClick={handleLeftClick}>
                <i class="fa-solid fa-chevron-left"></i>
              </div>
              <div
                className="rightArrow"
                style={{cursor: "pointer"}}
                onClick={handleRightClick}>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
            <div>
              <p style={{color: "#fff", marginTop: "10px"}}>5 of 35</p>
            </div>
          </div>
          <div className=" w-100">
            <Swiper
              spaceBetween={10}
              //   navigation={true}
              navigation={{
                prevEl: "#prev",
                nextEl: "#next",
              }}
              slidesPerView={5}
              breakpoints={{
                350: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                700: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                968: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1100: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1400: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
              }}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              style={{color: "#fff"}}>
              <SwiperSlide className="swiper-slide" style={{width: "246px"}}>
                <a href="#">
                  <h6>
                    Water elemental <span>FN</span>
                  </h6>
                  <div className="bDeals__img">
                    <img src="img/330x192 (1) 1 (2).png" alt="" />
                  </div>
                  <div className="dis__price">
                    <div className="dis">
                      <span>-12.97%</span>
                      <p>$4.00</p>
                    </div>
                    <div className="pinCode">
                      <span>0.198752</span>
                      <p>
                        <i className="fa-solid fa-lock"></i> 3D
                      </p>
                    </div>
                  </div>
                  <p>
                    <i className="fa-brands fa-steam-symbol"></i> Steam price:
                    $6.77
                  </p>
                </a>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" style={{width: "246px"}}>
                <a href="#">
                  <h6>
                    Water elemental <span>FN</span>
                  </h6>
                  <div className="bDeals__img">
                    <img src="img/330x192 (1) 1 (2).png" alt="" />
                  </div>
                  <div className="dis__price">
                    <div className="dis">
                      <span>-12.97%</span>
                      <p>$4.00</p>
                    </div>
                    <div className="pinCode">
                      <span>0.198752</span>
                      <p>
                        <i className="fa-solid fa-lock"></i> 3D
                      </p>
                    </div>
                  </div>
                  <p>
                    <i className="fa-brands fa-steam-symbol"></i> Steam price:
                    $6.77
                  </p>
                </a>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide" style={{width: "246px"}}>
                <a href="#">
                  <h6>
                    Water elemental <span>FN</span>
                  </h6>
                  <div className="bDeals__img">
                    <img src="img/330x192 (1) 1.png" alt="" />
                  </div>
                  <div className="dis__price">
                    <div className="dis">
                      <span>-12.97%</span>
                      <p>$4.00</p>
                    </div>
                    <div className="pinCode">
                      <span>0.198752</span>
                      <p>
                        <i className="fa-solid fa-lock"></i> 3D
                      </p>
                    </div>
                  </div>
                  <p>
                    <i className="fa-brands fa-steam-symbol"></i> Steam price:
                    $6.77
                  </p>
                </a>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" style={{width: "246px"}}>
                <a href="#">
                  <h6>
                    Water elemental <span>FN</span>
                  </h6>
                  <div className="bDeals__img">
                    <img src="img/330x192 (1) 1 (1).png" alt="" />
                  </div>
                  <div className="dis__price">
                    <div className="dis">
                      <span>-12.97%</span>
                      <p>$4.00</p>
                    </div>
                    <div className="pinCode">
                      <span>0.198752</span>
                      <p>
                        <i className="fa-solid fa-lock"></i> 3D
                      </p>
                    </div>
                  </div>
                  <p>
                    <i className="fa-brands fa-steam-symbol"></i> Steam price:
                    $6.77
                  </p>
                </a>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" style={{width: "246px"}}>
                <a href="#">
                  <h6>
                    Water elemental <span>FN</span>
                  </h6>
                  <div className="bDeals__img">
                    <img src="img/330x192 (1) 1 (2).png" alt="" />
                  </div>
                  <div className="dis__price">
                    <div className="dis">
                      <span>-12.97%</span>
                      <p>$4.00</p>
                    </div>
                    <div className="pinCode">
                      <span>0.198752</span>
                      <p>
                        <i className="fa-solid fa-lock"></i> 3D
                      </p>
                    </div>
                  </div>
                  <p>
                    <i className="fa-brands fa-steam-symbol"></i> Steam price:
                    $6.77
                  </p>
                </a>
              </SwiperSlide>
              <div id="prev"></div>
              <div id="next"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestDetails;
