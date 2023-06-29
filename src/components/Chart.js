import React from "react";
import Card from "./UI/Card";
import classes from "./Chart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const labels = [
  "23%",
  "29%",
  "58%",
  "75%",
  "33%",
  "20%",
  "75%",
  "29%",
  "23%",
  "29%",
  "58%",
  "75%",
  "33%",
  "20%",
  "75%",
  "29%",
  "33%",
  "20%",
  "75%",
  "29%",
  "23%",
  "29%",
  "58%",
  "75%",
  "33%",
  "20%",
  "75%",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: [
        "27",
        "28",
        "28",
        "29",
        "30",
        "29",
        "29",
        "28",
        "30",
        "28",
        "28",
        "27",
        "28",
        "28",
        "29",
        "30",
        "29",
        "29",
        "28",
        "32",
        "28",
        "28",
        "29",
        "30",
        "29",
        "26",
        "28",
        "28",
        "28",
        "29",
        "30",
        "29",
        "26",
        "28",
      ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235)",
      tension: 0.2,
      pointStyle: false,
    },
  ],
};

const Chart = () => {
  return (
    <>
      <Card className={classes.cardbg}>
        <div className={classes.row}>
          <div>
            <p>Upcoming hours</p>
          </div>
          <div className={classes.select}>
            <select>
              <option>Rain precipitation</option>
            </select>
            <button>Next days &#8827;</button>
          </div>
        </div>

        <Line data={data} height={130} width={640} />
      </Card>
    </>
  );
};

export default Chart;
