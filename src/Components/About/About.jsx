import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius minima
          repellendus cumque maiores doloremque facere recusandae quis corporis?
          Dolorem deleniti magnam distinctio, nemo accusamus nostrum nam
          inventore? Dolorem, labore inventore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
          doloribus eos ipsum vero cupiditate! Repellat aperiam doloribus,
          ratione consectetur maiores, ducimus eius debitis saepe numquam minima
          iure culpa aspernatur incidunt?
        </p>
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
          repellendus. Quis fugit soluta porro nihil sed, ducimus iusto magnam
          vitae, ab ratione sit eaque consectetur qui voluptate perferendis
          voluptatem laudantium.
        </p>
      </div>
    </div>
  );
}
