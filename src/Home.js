import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
      <img
      className="home_image"
       src="https://wallpapercave.com/wp/wp7049714.jpg"
      alt=""/>
                
      <div className="home_row">
      <Product title="IIT-JEE 41 Years Solved papers" price={20.00} image="https://m.media-amazon.com/images/I/81f-1yrwISL.jpg " />
        <Product
        id="4953094"
        title="Chemistry Class 12 NCERT Book"
        price={15.50}
        image="https://ncert.nic.in/textbook/pdf/lech1cc.jpg"/>
      </div>
      <div className="home_row">
        <Product 
        id="4903850"
        title="Physics NCERT Book Class 12"
        price={18.60}
        image="https://m.media-amazon.com/images/I/911-2v5Yq8L.jpg"/>

        <Product
        id="23445930"
        title="Mathematics NCERT Book Class 12"
        price={12.60}
        image="https://m.media-amazon.com/images/I/918O3XZAW9L.jpg"/>
        <Product
        id="3254354345"
        title="The Merchant of Venice-A Verity Addition"
          price={23.60}
          image="https://m.media-amazon.com/images/I/A1vGyasNkBL.jpg"/>

      </div>
      <div className="home_row">
        <Product
        id="90829332"
        title="15 Years Solved Papers NEET-Arihant"
        price={34.89}
        image="https://m.media-amazon.com/images/I/61XsYpaNOZL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"/>
      </div>
      </div>
     </div>
     );
}

export default Home;
