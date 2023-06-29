import React from "react";
import Card from "./UI/Card";
import classes from "./BlueCard.module.css";
import sun from "../assets/wb_sunny_white_24dp.svg";
import more from "../assets/more_horiz_white_24dp.svg";
import toggle from "../assets/toggle_off_white_24dp.svg";
import plus from "../assets/add_box_white_24dp.svg";
import send from "../assets/send_white_24dp.svg";

const BlueCard = () => {
  return (
    <Card className={classes.alignment}>
      <div className={classes.top}>
        <img src={plus} alt="" />
        <img src={more} alt="" />
        <img src={toggle} alt="" />
      </div>
      <div className={classes.city}>
        <p>
          <img src={send} alt="" />
          New York USA <span>07:19</span>
        </p>
        <p>
          Today 28 sep <span>19:32</span>
        </p>
      </div>
      <div className={classes.container}>
        <span>&#8249;</span>
        <h1>27&#176;</h1>
        <span>&#8250;</span>
      </div>
      <div className={classes.subheading}>
        <img src={sun} alt="" />
        <p>Sunny</p>
      </div>
      <div className={classes.building}>
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfrmtducz4X6kA2ngZeIiFpxgYEAGDaQbCzA&usqp=CAU"
        />
      </div>
    </Card>
  );
};

export default BlueCard;
