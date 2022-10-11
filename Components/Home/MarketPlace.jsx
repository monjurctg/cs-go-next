import React from "react";

function MarketPlace() {
  return (
    <>
      {/* img/bg6\ 2.png */}
      <section
        className="marketPlace"
        style={{backgroundImage: `url("img/bg6\ 2.png")`}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2>Marketplace</h2>
              <div className="marketPlace__items d-flex justify-content-around">
                <div className="mpItems__list">
                  <span>
                    <p>1</p>
                  </span>
                  <h5>We care about our reputation</h5>
                  <p>
                    Verified sellers add skins to our bot. After the purchase
                    from us, a skin is yours. If the skin is trade locked, just
                    wait until it expires and withdraw to Steam.
                  </p>
                </div>
                <div className="mpItems__list">
                  <span>
                    <p>4</p>
                  </span>
                  <h5>Control your inventory</h5>
                  <p>
                    As a seller, you can always change the skin price or simply
                    remove the item from sale at any time.
                  </p>
                </div>
              </div>
              <div className="marketPlace__items d-flex justify-content-between">
                <div className="mpItems__list">
                  <span>
                    <p>2</p>
                  </span>
                  <h5>Bargain prices</h5>
                  <p>
                    Buyers always see comparable Steam prices on skin cards.
                    Sellers can choose either a custom or recommended price for
                    their items.
                  </p>
                </div>
                <div className="mpItems__list">
                  <span>
                    <p>5</p>
                  </span>
                  <h5>Share your shop</h5>
                  <p>
                    After putting skins on sale, you can share your dedicated
                    shop space for faster sales.
                  </p>
                </div>
              </div>
              <div className="marketPlace__items d-flex justify-content-around">
                <div className="mpItems__list">
                  <span>
                    <p>3</p>
                  </span>
                  <h5>Transparency</h5>
                  <p>
                    6% sales fee. No buyer fee. For all users, when you top up
                    or withdraw your balance, we charge payment processing fees,
                    which are always clearly displayed.
                  </p>
                </div>
                <div className="mpItems__list">
                  <span>
                    <p>6</p>
                  </span>
                  <h5>Community trust</h5>
                  <p>
                    We are partnered with renowned esports teams and content
                    creators whose shops you can buy from.
                  </p>
                </div>
              </div>
              <div className="mpBtn text-center">
                <button className="btn">Check out the Market</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketPlace;
