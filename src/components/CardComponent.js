import React from "react";
import image from "../images/image-equilibrium.jpg";
import eth from "../images/icon-ethereum.svg";
import clock from "../images/icon-clock.svg";
import avatar from "../images/image-avatar.png";

const CardComponent = () => {
  return (
    <div className="Card">
      <div>
        <img src={image} alt="" className="Card_image" />
      </div>
      <div className="Card_content">
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
      </div>
      <section className="Card_price">
        <div className="Card_price-cost">
          <img src={eth} alt="" />
          <p>0.041 ETH</p>
        </div>
        <div className="Card_price-time">
          <img src={clock} alt="" />
          <p>3 days left</p>
        </div>
      </section>
      <div className="Card_footer">
        <img src={avatar} alt="" className="Card_footer-avatar" />
        <p>
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
