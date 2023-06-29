import React from "react";
import Card from "./UI/Card";
import classes from "./MoreDetails.module.css";
import humid from "../assets/water_drop_white_24dp.svg";
import wind from "../assets/air_white_24dp.svg";
import thermostat from "../assets/thermostat_white_24dp.svg";
import rain from "../assets/thunderstorm_white_24dp.svg";
import sun from "../assets/wb_sunny_white_24dp.svg";
import looks from "../assets/looks_white_24dp.svg";
import speed from "../assets/speed_white_24dp.svg";

const MoreDetails = () => {
  return (
    <>
      <h4>More deatails of today's weather</h4>
      <div className={classes.container}>
        <Card className={classes.bg}>
          <div className={classes.heading}>
            <h5>Humidity</h5>
            <img className={classes.image} src={humid} alt="" />
          </div>
          <div className={classes.percent}>
            <h3>82%</h3>
            <p>bad</p>
          </div>
          <span>good normal bad</span>

          <div className={classes.range}>
            <hr className={classes.hr} />
            <hr className={classes.hr} />
            <hr className={classes.hr} />
          </div>
        </Card>
        <Card className={classes.bg}>
          <div className={classes.heading}>
            <h5>Wind</h5>
            <img className={classes.image} src={wind} alt="" />
          </div>
          <div className={classes.percent}>
            <img
              style={{
                backgroundColor: "rgb(53, 162, 235)",
                height: "50px",
                width: "60px",
                marginTop: "14px",
                borderRadius: "10px",
              }}
              src={speed}
              alt=""
            />
          </div>
        </Card>
        <Card className={classes.bg}>
          <div className={classes.heading}>
            <h5>Precipitation</h5>
            <img className={classes.image} src={rain} alt="" />
          </div>
          <div className={classes.percent}>
            <h3>1.4CM</h3>
          </div>

          <span>0 10 20 30 40 50 60 70 80 90</span>
          <div className={classes.range}>
            <hr className={classes.hr} />
            <hr className={classes.hr} />
            <hr className={classes.hr} />
            <hr className={classes.hr} />
            <hr className={classes.hr} />
            <hr className={classes.hr} />
            <hr className={classes.hr} />
            <hr className={classes.hr} />
            <hr className={classes.hr} />
            <hr className={classes.hr} />
          </div>
        </Card>
      </div>
      <div className={classes.container}>
        <Card className={classes.bg}>
          <div className={classes.heading}>
            <h5>UV Index</h5>
            <img className={classes.image} src={sun} alt="" />
          </div>

          <div className={classes.percent}>
            <h3>4</h3>
            <p>medium</p>
          </div>

          <span
            style={{
              wordSpacing: "22px",
            }}>
            0-2 3-5 6-8 9-11 11+
          </span>
          <div className={classes.range}>
            <hr className={classes.hr} />
            <hr className={classes.hr} />
            <hr className={classes.hr} />
            <hr className={classes.hr} />
            <hr className={classes.hr} />
          </div>
        </Card>
        <Card className={classes.bg}>
          <div className={classes.heading}>
            <h5>Feels Like</h5>
            <img className={classes.image} src={thermostat} alt="" />
          </div>
          <div className={classes.percent}>
            <h3>30</h3>
          </div>

          <div className={classes.range}>
            <input type="range" min="0" max="50" defaultValue="30" />
          </div>
        </Card>
        <Card className={classes.bg}>
          <div className={classes.heading}>
            <h5>Chance of rain</h5>
            <img className={classes.image} src={looks} alt="" />
          </div>
          <div className={classes.percent}>
            <h3>42%</h3>
          </div>

          <div className={classes.range}>
            <input type="range" min="0" max="100" defaultValue="42" />
          </div>
        </Card>
      </div>
    </>
  );
};

export default MoreDetails;
