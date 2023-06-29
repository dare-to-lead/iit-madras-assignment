import React from "react";
import Card from "./UI/Card";
import classes from "./OuterCard.module.css";
import Chart from "./Chart";
import profilePic from "../assets/profilepic.png";
import MoreDetails from "./MoreDetails";

const OuterCard = () => {
  return (
    <Card className={classes.bg}>
      <div className={classes.content}>
        <div>
          <h2>Welcome back Isabella!</h2>
          <p>Check out today's weather information</p>
        </div>
        <div className={classes.profile}>
          <p>...</p>
          <img className={classes.img} src={profilePic} alt="" />
        </div>
      </div>

      <Chart />
      <MoreDetails />
    </Card>
  );
};

export default OuterCard;
