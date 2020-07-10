import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import { fetchUSDailyData } from "../api";
import { Legend } from "recharts";

const Chart = () => {
  const [usDailyData, setUsDailyData] = useState({});

  useEffect(() => {
    const fetchedUsDailyData = async () => {
      const dailyDataUS = await fetchUSDailyData();
      setUsDailyData(dailyDataUS);
    };
    fetchedUsDailyData();
  }, []);
  console.log(usDailyData);

  const lineChart = usDailyData.length ? (
    <Line
      legend={{
        labels: {
          fillStyle: "rgb(250, 250, 250)",
        },
      }}
      data={{
        labels: usDailyData.map(({ date }) => date),
        datasets: [
          {
            data: usDailyData.map(({ postive }) => postive),
            label: "Positives",
            borderColor: "red",
            backgroundColor: "rgba(250, 0, 0, .25)",
            pointBackgroundColor: "red",
            fill: true,
          },
          {
            data: usDailyData.map(({ death }) => death),
            label: "Deaths",
            borderColor: "black",
            pointBackgroundColor: "black",
            backgroundColor: "rgba(0, 0, 250, .25)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const lineChart1 = usDailyData.length ? (
    <Line
      legend={{
        labels: {
          fillStyle: "rgb(250, 250, 250)",
        },
      }}
      data={{
        labels: usDailyData.map(({ date }) => date),
        datasets: [
          {
            data: usDailyData.map(({ postive }) => postive),
            label: "Positives",
            borderColor: "red",
            backgroundColor: "rgba(250, 0, 0, .25)",
            pointBackgroundColor: "red",
            fill: true,
          },
          {
            data: usDailyData.map(({ death }) => death),
            label: "Deaths",
            borderColor: "black",
            pointBackgroundColor: "black",
            backgroundColor: "rgba(0, 0, 250, .25)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div>
      <div className="flex flex-wrap p-4 justify-evenly">{lineChart}</div>
      <div className="flex flex-wrap p-4 justify-evenly">{lineChart1}</div>
    </div>
  );
};

export default Chart;
