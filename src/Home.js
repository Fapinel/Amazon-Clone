import React from "react";
import "./Home.css";
import Product from "./Product";
// import { Button, Carousel } from 'react-bootstrap';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_row">
          <Product
            id="12345678"
            title="Tucker: Eternity Springs: The McBrides of Texas Kindle"
            price={29.99}
            image="https://d188rgcu4zozwl.cloudfront.net/content/B07SCTC5Q3/resources/1563745415"
            rating={5}
          />
          <Product
            id="12345678"
            title="Kenwood Kitchen Mixer range is a high quality, co-ordinated range of kitchen accessories that express."
            price={239.0}
            image="https://www.noelleeming.co.nz/shop/render-image/products/151/151580.2.530.556.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="4903850"
            title="Honor Band 5 Smart Watch, Smart Watch with SpO2."
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/615-sOndCzL._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker."
            price={98.99}
            image="https://www.bhphotovideo.com/images/images2500x2500/amazon_b07nftvp7p_echo_3rd_generation_charcoal_1512895.jpg"
            rating={5}
          />
          <Product
            id="3254354345"
            title="New Apple ipad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://www.bhphotovideo.com/images/images2500x2500/apple_my2h2ll_a_12_9_ipad_pro_early_1553840.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
