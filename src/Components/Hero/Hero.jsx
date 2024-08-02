import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
export default function Hero() {
  return (
    <div className="hero , container">
      <div className="hero-text">
        <h1>We Ensure Better Education For A Better World</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          animi recusandae hic. Minima iure impedit aperiam omnis voluptatum rem
          rerum, quis est sapiente unde necessitatibus ad saepe nisi dolor
          quasi.
        </p>
        <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
}
