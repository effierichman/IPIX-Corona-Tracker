import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import { fetchUSDailyData } from "../api";
import { Legend } from "recharts";
import { getDailyDif } from "../api/helper";

const Chart = () => {
  const [usDailyData, setUsDailyData] = useState([]);
  const [usDailyDataDif, setUsDailyDataDif] = useState([]);

  useEffect(() => {
    const fetchedUsDailyData = async () => {
      const dailyDataUS = await fetchUSDailyData();
      setUsDailyData(dailyDataUS);
      setUsDailyDataDif(getDailyDif(dailyDataUS));
    };
    fetchedUsDailyData();
  }, []);
  console.log(usDailyData);
  console.log(usDailyDataDif);

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
        labels: usDailyDataDif.map(({ date }) => date),
        datasets: [
          {
            data: usDailyDataDif.map(({ postive }) => postive),
            label: "Positives",
            borderColor: "red",
            backgroundColor: "rgba(250, 0, 0, .25)",
            pointBackgroundColor: "red",
            fill: true,
          },
          {
            data: usDailyDataDif.map(({ death }) => death),
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
    <div className="flex flex-wrap p-4 justify-evenly justify-center">
      <div className=" w-3/4 h-100">{lineChart}</div>
      <div className=" w-3/4 h-100">{lineChart1}</div>
    </div>
  );
};

export default Chart;
