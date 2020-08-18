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
      <div className="home__row home__row__two">
        <Product
          id="12321341"
          title="Honeybee Gardens 'Skinny Dip' Refillable Eye Shadow Palette : Natural Ingredients : Gluten Free, Vegan, Paraben Free"
          price={27.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41xecyG-lbL.jpg"
          // link="https://www.amazon.com/Honeybee-Gardens-Skinny-Refillable-Palette/dp/B078P1QF2C/ref=sr_1_89?dchild=1&keywords=vegan+makeup&qid=1597628877&sr=8-89"
        />

        <Product
          id="12321342"
          title="Antonym Cosmetics Ecocert Certified Organic Baked Blush, Peach"
          price={36.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/719FD9XhndL._SL1419_.jpg"
          // link="https://www.amazon.com/Antonym-Cosmetics-Ecocert-Certified-Organic/dp/B00GM5XO82/ref=sr_1_1_sspa?dchild=1&keywords=Antonym+Cosmetics+Ecocert+Certified+Organic+Baked+Blush%2C+Peach&qid=1597631174&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTDVQTTJWSTU3T1FVJmVuY3J5cHRlZElkPUEwNDkzODczMzhGUTdUMkIwRU0yUyZlbmNyeXB0ZWRBZElkPUEwOTY2OTgyNUFRUldUTldSWkZDJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
        />
      </div>

      <div className="home__row home__row__three">
        <Product
          id="12321343"
          title="ZEESEA Picasso Matte Lipstick Cruelty Free and Vegan Long Lasting Moisturizing Non-Marking, Non-Stick Cup Waterproof Lips Makeup"
          price={21.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/716BRPT08XL._SL1000_.jpg"
          // link="https://www.amazon.com/Lipstick-Moisturizing-Non-Marking-Non-Stick-Waterproof/dp/B082HQGRCR/ref=sr_1_16_sspa?dchild=1&keywords=vegan+makeup&qid=1597628877&sr=8-16-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFWMUtOMk9XS1JWTjMmZW5jcnlwdGVkSWQ9QTA4MzY4MjgyVTJaVU05R0hUSzQxJmVuY3J5cHRlZEFkSWQ9QTAxMTE5NzAyRUo4WlBKSFNHSjcwJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
        />
        <Product
          id="12321344"
          title="BaeBlu Organic Aloe-Based LUX Liquid Foundation, Natural Vegan Gluten-Free Made in USA, Latte"
          price={29.95}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71RJ1ex3uKL._SL1500_.jpg"
          // link="https://www.amazon.com/Organic-Gluten-Free-Aloe-Based-Foundation-BaeBlu/dp/B071W2HLVC/ref=sr_1_24?dchild=1&keywords=vegan+makeup&qid=1597628877&sr=8-24"
        />
        <Product
          id="12321345"
          title="Burt’s Bees 100% Natural Origin All Aflutter Multi-Benefit Mascara, Black Brown, 0.32 Ounce"
          price={12.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/714ZXww3c9L._SL1500_.jpg"
          // link="https://www.amazon.com/Burts-Bees-Natural-Aflutter-Multi-Benefit/dp/B07G1V3FC1/ref=pd_sbs_194_6/147-4845540-8519217?_encoding=UTF8&pd_rd_i=B085BXR5H1&pd_rd_r=d80d85d1-aae1-43a9-a3d0-048f388baa1a&pd_rd_w=5cIZA&pd_rd_wg=zkPc7&pf_rd_p=703f3758-d945-4136-8df6-a43d19d750d1&pf_rd_r=VRNSX0TZV1FGTRHZZYJY&psc=1&refRID=VRNSX0TZV1FGTRHZZYJY"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321346"
          title="Honest Beauty Eyeshadow Palette with 10 Pigment-Rich Shades | Paraben Free, Talc Free, Dermatologist Tested & Cruelty Free | 0.67 oz."
          price={19.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61uzVREFNqL._AC_SL1300_.jpg"
          // link="https://www.amazon.com/Honest-Beauty-Everything-Eyeshadow-Palette/dp/B07F4JJ8LH/ref=sr_1_1?dchild=1&keywords=Honest+Beauty+Eyeshadow+Palette+with+10+Pigment-Rich+Shades%7CParaben+Free&qid=1597631245&sr=8-1"
        />
      </div>
      {/* product */}
    </div>
  );
}

export default Home;
