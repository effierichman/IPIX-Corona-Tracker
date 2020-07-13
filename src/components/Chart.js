import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import { fetchUSDailyData, fetchUSDailyDataLabel } from "../api";
import { getDailyDif, processUsDailyLabels } from "../api/helper";

const Chart = () => {
  const [usDailyData, setUsDailyData] = useState([]);
  const [usLabelData, setUsLabelData] = useState([]);
  const [usDailyDataDif, setUsDailyDataDif] = useState([]);

  const casesLineColor = "rgba(250, 0, 0, .5)";
  const casesLineColor2 = "rgba(250, 0, 0, .25)";

  const deathsLineColor = "rgba(0, 53, 85, .5)";
  const deathsLineColor2 = "rgba(0, 53, 85, .25)";

  useEffect(() => {
    const fetchedUsDailyData = async () => {
      const dailyDataUS = await fetchUSDailyData();
      setUsDailyData(dailyDataUS);
      setUsDailyDataDif(getDailyDif(dailyDataUS));
    };
    fetchedUsDailyData();
  }, []);

  useEffect(() => {
    const labelHelper = async () => {
      let labels = await fetchUSDailyDataLabel();
      console.log(labels);
      setUsLabelData(labels);
    };
    labelHelper();
  }, []);
  console.log(usLabelData);

  const lineChart = usDailyData.length ? (
    <Line
      data={{
        labels: usDailyData.map(({ date }) => date),
        datasets: [
          {
            data: usDailyData.map(({ postive }) => postive),
            label: "Positives",
            borderColor: casesLineColor,
            backgroundColor: casesLineColor2,
            pointBackgroundColor: casesLineColor2,
            pointBorderColor: casesLineColor,
            fill: true,
          },
          {
            data: usDailyData.map(({ death }) => death),
            label: "Deaths",
            borderColor: deathsLineColor,
            backgroundColor: deathsLineColor2,
            pointBackgroundColor: deathsLineColor2,
            pointBorderColor: deathsLineColor,
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const lineChart1 = usDailyData.length ? (
    <Line
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
      <div className=" w-3/4 h100">{lineChart}</div>
      <div className=" w-3/4 h-100">{lineChart1}</div>
    </div>
  );
};

export default Chart;
