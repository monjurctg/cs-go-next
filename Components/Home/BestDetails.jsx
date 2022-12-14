import React, {useEffect, useRef, useState} from "react";

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import {Navigation, Pagination} from "swiper";

function BestDetails() {
  const [domLoaded, setdomLoaded] = useState(false);
  const swiperRef = useRef();
  const [currentValue, setCurrentValue] = useState(1);
  const [isChange, setIsChange] = useState(false);
  const [total, setTotal] = useState(6);
  useEffect(() => {
    console.log("object");
    const crntValue = window?.document.querySelector(
      ".swiper-pagination-current"
    );
    const total = document.querySelector(".swiper-pagination-total")?.innerHTML;
    setTotal(total);

    setCurrentValue(crntValue?.innerHTML);
  }, [isChange]);
  console.log(currentValue, total);

  useEffect(() => {
    setdomLoaded(true);
  }, []);
  const handleLeftClick = () => {
    setIsChange(!isChange);
    document.getElementById("prev").click();
  };
  const handleRightClick = () => {
    document.getElementById("next").click();
    setIsChange(!isChange);
  };
  const prevHandler = () => {
    swiperRef.current?.slidePrev();
  };
  return (
    <div>
      <div className=" slider-container ">
        <div style={{overflow: "hidden"}} className="header__slider w-100">
          <div className="bt__deals mt-4">
            <button className="limitedOfferButton">Limited Offer</button>
            <h4
              style={{
                color: "#9DB4D3",
                marginTop: "25px",
                fontSize: "39px",
                fontWeight: "400px",
                width: "200px",
              }}>
              Best Deals
            </h4>
            <div className="slider-btn-container">
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
              <div
                className="d-flex"
                style={{marginTop: "27px", marginLeft: "20px"}}>
                <p> {currentValue ?? 1} &nbsp; </p>
                <p style={{color: "#9DB4D3"}}>
                  of &nbsp;
                  {total ?? 6}
                </p>
              </div>
            </div>
          </div>
          <div className="swiper headerSwiper">
            {domLoaded && (
              <Swiper
                slidesPerView={4}
                spaceBetween={15}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                pagination={{
                  type: "fraction",
                }}
                loop={true}
                breakpoints={{
                  350: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  500: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  770: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1000: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },

                  1100: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1300: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },

                  1400: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                // navigation={true}
                modules={[Pagination, Navigation]}
                className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
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
                <SwiperSlide className="swiper-slide">
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
                <SwiperSlide className="swiper-slide">
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
                <SwiperSlide className="swiper-slide">
                  <a href="#">
                    <h6>
                      Water elemental <span>FN</span>
                    </h6>
                    <div className="bDeals__img">
                      <img src="img/330x192 (1) 1 (3).png" alt="" />
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
                <SwiperSlide className="swiper-slide">
                  <a href="#" className="">
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
                <SwiperSlide className="swiper-slide">
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
                <div id="prev" onClick={prevHandler}></div>
                <div
                  id="next"
                  onClick={() => swiperRef.current?.slideNext()}></div>
              </Swiper>
            )}
            <div className="">
              {/* <a href="#" className="swiper-slide">
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
                <i className="fa-brands fa-steam-symbol"></i> Steam price: $6.77
              </p>
            </a>
            <a href="#" className="swiper-slide">
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
                <i className="fa-brands fa-steam-symbol"></i> Steam price: $6.77
              </p>
            </a>
            <a href="#" className="swiper-slide">
              <h6>
                Water elemental <span>FN</span>
              </h6>
              <div className="bDeals__img">
                <img src="img/330x192 (1) 1 (3).png" alt="" />
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
                <i className="fa-brands fa-steam-symbol"></i> Steam price: $6.77
              </p>
            </a>
            <a href="#" className="swiper-slide">
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
                <i className="fa-brands fa-steam-symbol"></i> Steam price: $6.77
              </p>
            </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="slider-btn-992">
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
        <div className="fraction d-flex">
          <p> {currentValue ?? 1} &nbsp; </p>
          <p style={{color: "#9DB4D3"}}>
            of &nbsp;
            {total ?? 6}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BestDetails;
