import Image from "next/image";
import BestDetails from "../Components/Home/BestDetails";
// import HeaderSlider from "../Components/Home/HeaderSlider";
import MaskGroup from "../public/img/MaskGroup.png";
import HowItwork from "../Components/Home/HowItwork";
import MarketPlace from "../Components/Home/MarketPlace";
import Footer from "../Components/UI/Footer";
import Navbar from "../Components/UI/Navbar";
import CommonBtn from "../Components/UI/CommonBtn";
import HeaderSlider from "../Components/Home/HeaderSlider";

// import styles from "../styles/Home.module.css";

export default function Home() {
  const color = typeof window !== "undefined" ? "red" : "blue";
  console.log(color, "color");

  return (
    <>
      <header
        className="header_area "
        style={{backgroundImage: `url("img/bg.png")`}}>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Buy or Sell</h1>
              <div className="hero_bnnr">
                <Image src={MaskGroup} height={680} width={1080} alt="bnnr" />
              </div>
              <h3>Gear up for your next stylish clutch</h3>
              <div className="hero_btn">
                <CommonBtn className="btn">Check out the Market</CommonBtn>
              </div>
              {/* <HeaderSlider /> */}
              <BestDetails />
            </div>
          </div>
        </div>
      </header>
      <main>
        <HowItwork />
        <MarketPlace />
      </main>
      <Footer />
    </>
  );
}
