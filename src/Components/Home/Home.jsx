import "./Home.css";
import React from "react";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="
     https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
        alt=""
      />

      {/* product id, title, price, rating, image */}
      <Product
        id="12321341"
        title="Honest Beauty Eyeshadow Palette with 10 Pigment-Rich Shades | Paraben Free, Talc Free, Dermatologist Tested & Cruelty Free | 0.67 oz."
        price={19.99}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/61uzVREFNqL._AC_SL1300_.jpg"
      />
      {/* product */}
    </div>
  );
}

export default Home;
